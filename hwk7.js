
var counter =0;

var locations = [
[
    "Bookstore, 48.466188, -123.309433",
    48.466188, -123.309433
  ],

 [
    "Courtyard behind Law Building, 48.465110, -123.3170000",
    48.465110, -123.3170000
    
  ],
  [
    "Library, 48.463188, -123.309433",
    48.463188, -123.309433
  ]
]

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: new google.maps.LatLng(48.463649, -123.311951),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});


var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

}

 google.maps.event.addListener(map, "bounds_changed", function(){
   console.log('something happened!');

   var bounds = map.getBounds();

var ne = bounds.getNorthEast(); // LatLng of the north-east corner
var sw = bounds.getSouthWest(); // LatLng of the south-west corder

var nw = new google.maps.LatLng(ne.lat(), sw.lng());
var se = new google.maps.LatLng(sw.lat(), ne.lng());

var boundsString;

boundsString = "<p>NE " + ne + "</p>";
boundsString += "<p>NW " + nw + "</p>";
boundsString += "<p>SE " + se + "</p>";
boundsString += "<p>SW " + sw + "</p>";

document.getElementById("demo").innerHTML =boundsString; 

 }); 

 var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map

      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          counter++;
          console.log('you click me ' + counter  + ' times');
          infowindow.setContent(locations[i][0] + "<h1>" + counter+"</h1>");
          infowindow.open(map, marker);
          
        }
      })(marker, i));
    }
   
document.getElementById("myBtn").addEventListener("click", displayDate);


function count() {
    document.getElementById("demo").innerHTML = Date();
}
