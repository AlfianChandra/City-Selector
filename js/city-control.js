class City
{
  loadcity(url,target)
  {
    $.ajax({
      url:url,
      type:"get",
      cache:false,
      async:true,
      success:function(res)
      {
        target.html(res);
      }
    });
  }

  loadto(url,target)
  {
    $.ajax({
      url:url,
      type:"get",
      cache:false,
      async:true,
      success:function(res)
      {
        $(target).html(res);
      },
      error:function(res)
      {
        console.log("City Selector - List Kota tidak ditemukan pada direktori: "+url+". Periksa penulisan url atau periksa file.");
      }
    });
  }
}

//Create Object
city = new City;
//Init Cities
$(window).load(function(){
  city.loadcity("asset/kota.php",$('.city-init'));
});

$('.city-init').change(function(){
  //Get Target
  var target = $(this).attr("city-target");

  //Get Value
  var value = $(this).val();
  var res = value.replace(/ /g, "");
  var tar = res.toLowerCase();

  //Create new attribute and set using value
  $(this).attr("city-url",value);
  //Loads cities//
  city.loadto("asset/kab/"+tar+".php",target);
});