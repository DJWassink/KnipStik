function init_map() {
    var myOptions = {
        zoom: 15,
        center: new google.maps.LatLng(52.405551, 6.633262),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(52.405551, 6.633262)
    });
    infowindow = new google.maps.InfoWindow({
        content: "<b>KnipStik</b><br/>Zuivering 18<br/> 7671 SP Vriezenveen"
    }); 
    google.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);
