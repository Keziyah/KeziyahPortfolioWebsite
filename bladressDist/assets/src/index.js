$(window).on('load', function() {
		$(".loader-container").delay(2000).fadeOut(1000);
		$('.hero').delay(2000).fadeIn(3000);
})

$(document).ready(function(){
    //Hamburger menu animation
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open')  //Animate the hamburger
		$('.menu').toggleClass('wide-menu')
	})

	//Close the menu if a link is clicked. 

	$('.menu a').on('click', function() {
		$('#nav-icon4').toggleClass('open')
		$('.menu').toggleClass('wide-menu')
	})

	//********** Header scroll stuff ****************//
	var didScroll;
	var scrollY; 
	var lastY = 0; 
	
	$(window).scroll(function(event){
		didScroll = true;
		scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop
	});
	
	setInterval(function() {
			if (didScroll) {
					hasScrolled();
					didScroll = false;
			}
	}, 150);
	
	function hasScrolled() {

		if(scrollY === 0) {
			$('header').removeClass('nav-up').removeClass('nav-color').addClass('nav-down');
		}
		else if(scrollY - lastY > 0 && scrollY > 70) {
			$('header').removeClass('nav-down').addClass('nav-up');
		} else if (scrollY - lastY < 0 && scrollY > 70) {
			$('header').removeClass('nav-up').addClass('nav-down').addClass('nav-color');
		}
	
		lastY = scrollY; 
	}

	//********************************************** */
			//********************************************** */
		//********************************************** */
		
		//Fade in on scroll stuff
	
		$(window).scroll( function(){
			/* Check the location of each desired element */
			$('.hideme').each( function(i){
				
				var bottom_of_object = $(this).position().top + $(this).outerHeight();
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				/* If the object is completely visible in the window, fade it it */
				if( bottom_of_window > bottom_of_object ){
					
					$(this).animate({'opacity':'1'},1000);
						
				}
				
			}); 

})

//********************************************** */
//********************************************** */
//********************************************** */

//Smooth Scroll Stuff


// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
	// On-page links
	if (
	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	&& 
	location.hostname == this.hostname
	) {
	// Figure out element to scroll to
	var target = $(this.hash);
	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	// Does a scroll target exist?
	if (target.length) {
		// Only prevent default if animation is actually gonna happen
		event.preventDefault();
		$('html, body').animate({
		scrollTop: target.offset().top
		}, 1000, function() {
		// Callback after animation
		// Must change focus!
		var $target = $(target);
		$target.focus();
		if ($target.is(":focus")) { // Checking if the target was focused
			return false;
		} else {
			$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			$target.focus(); // Set focus again
		}
		});
	}
	}
});

//Google Maps JS   https://codepen.io/hubpork/pen/xriIz 
		//Set Map
		function initialize() {
			// var directionsService = new google.maps.DirectionsService;
			// var directionsDisplay = new google.maps.DirectionsRenderer;

			var style = [
				{
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#212121"
					}
				  ]
				},
				{
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#25152e"
					}
				  ]
				},
				{
				  "elementType": "labels.icon",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#212121"
					}
				  ]
				},
				{
				  "featureType": "administrative",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "administrative.country",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "administrative.locality",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#bdbdbd"
					}
				  ]
				},
				{
				  "featureType": "administrative.neighborhood",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#181818"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#1b1b1b"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#2c2c2c"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "labels",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#8a8a8a"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#373737"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#3c3c3c"
					}
				  ]
				},
				{
				  "featureType": "road.highway.controlled_access",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#4e4e4e"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "transit",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#000000"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry.fill",
				  "stylers": [
					{
					  "color": "#bbbbbb"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#3d3d3d"
					}
				  ]
				}
			  ]

			var myLatlng = new google.maps.LatLng(46.8182,8.2275);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 5,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			var roadTrip = [
				{lat: 48.85661400000001, lng: 2.3522219000000177}, //Paris 1
				{lat: 50.8503396, lng: 4.351710300000036}, //Brussels 2
				{lat: 51.9244201, lng: 4.4777325999999675}, //Rotterdam 3
				{lat: 52.3702157, lng: 4.895167899999933}, //Amsterdam 4
				{lat: 52.3758916, lng: 9.732010400000036}, //Hanover 5
				{lat: 52.52000659999999, lng: 13.404953999999975}, //Berlin 6
				{lat: 52.2296756, lng: 21.012228700000037}, //Warsaw 7
				{lat: 50.0755381, lng: 14.43780049999998}, //Prague 8
				{lat: 48.2081743, lng: 16.37381890000006}, //Vienna 9
				{lat: 47.497912, lng: 19.04023499999994}, //Budapest 10
				{lat: 45.8150108, lng: 15.981918899999982}, //Zagreb 11
				{lat: 46.0569465, lng: 14.505751499999974}, //Ljubljana 12
				{lat: 45.6495264, lng: 13.77681819999998}, //Trieste 13
				{lat: 45.4408474, lng: 12.31551509999997}, //Venice 14
				{lat: 44.49488700000001, lng: 11.342616200000066}, //Bologna 15
				{lat: 43.94236, lng: 12.457776999999965}, //San Marino 16
				{lat: 41.1171432, lng: 16.871871499999997}, //Bari 17
				{lat: 41.90278349999999, lng: 12.496365500000024}, //Rome 18
				{lat: 44.4056499, lng: 8.946255999999948}, //Genoa 19
				{lat: 45.4642035, lng: 9.189981999999986}, //Milan 20
				{lat: 45.07031200000001, lng: 7.686856499999976}, //Turin 21
				{lat: 44.933393, lng: 4.892360000000053}, //Valence 22
				{lat: 43.296482, lng: 5.369779999999992}, //Marseille 23
				{lat: 43.610769, lng: 3.8767159999999876}, //Montpellier 24
				{lat: 42.4919826, lng: 1.5111805999999888}, //Andorra la Vella 25
				{lat: 41.38506389999999, lng: 2.1734034999999494}, //Barcelona 26
				{lat: 39.4699075, lng: -0.3762881000000107}, //Valencia 27
				{lat: 37.3890924, lng: -5.984458899999936}, //Seville 28
				{lat: 38.7222524, lng: -9.139336599999979}, //Lisbon 29
				{lat: 40.2033145, lng: -8.410257300000012}, //Coimbra 30
				{lat: 40.4167754, lng: -3.7037901999999576}, //Madrid 31
				{lat: 47.218371, lng: -1.553621000000021}, //Nantes 32
				{lat: 48.85661400000001, lng: 2.3522219000000177} //Paris 33
			  ];

			  var cities = [
				'Paris', 'Brussels', 'Rotterdam', 'Amsterdam', 
				'Hanover','Berlin', 'Warsaw', 'Prague', 
				'Vienna', 'Budapest', 'Zagreb', 'Ljubjana', 
				'Trieste', 'Venice', 'Bologna', 'San Marino', 
				'Bari', 'Rome', 'Genoa', 'Milan', 'Turin', 
				'Valence', 'Marseille', 'Montpellier', 
				'Andorra la Vella', 'Barcelona', 'Valencia', 
				'Seville', 'Lisbon', 'Coimbra', 'Madrid', 
				'Nantes'
			]

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
			map.setOptions({styles: style})
		//Set the path of the trip using the coordinates above

		var flightPath = new google.maps.Polyline({
			path: roadTrip,
			geodesic: false,
			strokeColor: '#3b111e',
			strokeOpacity: 1.0,
			strokeWeight: 6
		  });
		
		  flightPath.setMap(map);
			var currWindow; 
		//Add Markers
      function createMarker(pos, city, waypointNum) {
			var contentString = 
			'<div class="mapCard">' +
				'<div class="firstHeading">' +
					'<h3 id="firstHeading">'+ waypointNum + ' - ' + city + '</h3>'+
				'</div>'+
				'<div id="bodyContent" class="bodyContent">'+
					'<p id="theP">The Bladress will soon be on her way to ' + city + '. Sign up to meet her there!</p>'+
				'</div>' +
			'</div>';
			//Set window width + content
			var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300
			});

			var marker = new google.maps.Marker({       
				position: pos, 
				map: map,  // google.maps.Map 
				title: city,
				icon: imagePath    
			}); 
			google.maps.event.addListener(marker, 'click', function() { 
				infowindow.open(map,marker); 
			}); 
			return marker;  
		}

		for (var i = 0; i < roadTrip.length - 1; i++) {
			var waypointNum = i + 1
			createMarker(roadTrip[i], cities[i], waypointNum)
		}
	
		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
})


//Callout Content
		// var contentString = 
		// 				'<h3 id="firstHeading" class="firstHeading">Life Solutions Counseling</h3>'+
		// 				'<div id="bodyContent">'+
		// 					'<p>We are located in La Mirada Plaza off Vine Street in Kissimmee, FL.</p>'+
		// 				'</div>';
		// //Set window width + content
		// var infowindow = new google.maps.InfoWindow({
		// 	content: contentString,
		// 	maxWidth: 300
		// });

		// directionsDisplay.setMap(map);
		// var waypts1 = []; 
		// var waypts2 = []; 

		// for (var i = 0; i < 18; i++) {
		// 	var ele = roadTrip[i]
		// 	waypts1.push({
		// 		location: new google.maps.LatLng(ele.lat, ele.lng), 
		// 		stopover: true
		// 	})
		// }

		// for (var i = 18; i < roadTrip.length; i++) {
		// 	var ele = roadTrip[i]
		// 	waypts2.push({
		// 		location: new google.maps.LatLng(ele.lat, ele.lng), 
		// 		stopover: true
		// 	})
		// }

		// directionsService.route({
		// 	origin: 'Paris, France',
		// 	destination: 'Rome, Italy',
		// 	waypoints: waypts1,
		// 	optimizeWaypoints: true,
		// 	travelMode: 'WALKING'
		//   }, function(response, status) {
		// 	if (status === 'OK') {
		// 	  directionsDisplay.setDirections(response);
		// 	  var route = response.routes[0];
		// 	//   var summaryPanel = document.getElementById('directions-panel');
		// 	//   summaryPanel.innerHTML = '';
		// 	//   // For each route, display summary information.
		// 	//   for (var i = 0; i < route.legs.length; i++) {
		// 	// 	var routeSegment = i + 1;
		// 	// 	summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
		// 	// 		'</b><br>';
		// 	// 	summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
		// 	// 	summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
		// 	// 	summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
		// 	  //}
		// 	} else {
		// 	  window.alert('Directions request failed due to ' + status);
		// 	}
		//   });

		// var drawingManager = new google.maps.drawing.DrawingManager({
		// 	drawingMode: google.maps.drawing.OverlayType.MARKER,
		// 	drawingControl: true,
		// 	drawingControlOptions: {
		// 	  position: google.maps.ControlPosition.TOP_CENTER,
		// 	  drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
		// 	},
		// 	markerOptions: {icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'},
		// 	circleOptions: {
		// 	  fillColor: '#ffff00',
		// 	  fillOpacity: 1,
		// 	  strokeWeight: 5,
		// 	  clickable: false,
		// 	  editable: true,
		// 	  zIndex: 1
		// 	}
		//   });
		//   drawingManager.setMap(map);