
  // Location Maps
  var path = '/application/themes/C5/';
   if (location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.hostname === ""){
      path = '';
   }
  var locations = [];
  $('.map_cords .loc').each(function(i, v) {
    locations.push({
      'lat': $(v).attr('data-lat'),
      'lng': $(v).attr("data-lng"),
      'name': $(v).text()
    });
  });

  //console.log(locations[0].lat);

  function init_map() {
    // Navigate map on btn click
    $('.map_cords .loc').on('click', function(e) {
      var lat = $(this).attr("data-lat");
      var lng = $(this).attr("data-lng");
      var loc = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
      };
      map.panTo(loc);
      map.setZoom(16);
      //map.panBy(-300, 0);
    });
    var map = new google.maps.Map(document.getElementById('location_map'), {
      zoom: 18,
      scrollwheel: false,
      center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    });
    var marker, i;
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
        icon: path + "images/map-marker.svg",
        map: map,
        title: locations[i].name
      });
    };
    if ($(window).width() < 991) {
      map.panBy(0, 0);
    } else {
      //map.panBy(-300, 0);
    }
  };
  // Lazy Load for map Start
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  var map_load = false;
  $(window).on('resize scroll', function(e) {
    if ($('#location_map').isInViewport()) {
      $(window).unbind('resize');
      if (!map_load) {
        init_map();
      }
      map_load = true;
    }
  });
  // Lazy Load for map End
