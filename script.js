$(document).ready(function(){
	// cache the window object
	$window = $(window);
	$('section[data-type="background"]').each(function(){
		// declare the variable to affect the defined data-type
		var $scroll = $(this);
		$(window).scroll(function() {
			// HTML5 proves useful for helping with creating JS functions!
			// also, negative value because we're scrolling upwards
			var yPos = -($window.scrollTop() / $scroll.data('speed'));
			// background position
			var coords = '50% '+ yPos + 'px';
			// move the background
			$scroll.css({ backgroundPosition: coords });    
		}); // end window scroll
	});// end section function
	 loadMap();
}); // close out script

// Function that validates email address through a regular expression.
function validateEmail(address) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	return filter.test(address);
}

function loadMap() {
	var map = L.map('mapid');
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 20, attribution: osmAttrib});
    map.setView(new L.LatLng(47.2039125, -1.5672418),15);
	map.addLayer(osm);
	var PinIcon = L.Icon.extend({
		options: {
			iconAnchor:   [22, 55],
			popupAnchor:  [3, -52]
		}
	});
	var pinJDB = new PinIcon({iconUrl: 'images/map/pinJDB.png'}),
    pinCSM = new PinIcon({iconUrl: 'images/map/pinCSM.png'}),
	pinWH = new PinIcon({iconUrl: 'images/map/pinWH.png'}),
	pinF = new PinIcon({iconUrl: 'images/map/pinF.png'});
	var markerJDB = L.marker([47.207443, -1.5658337], {icon: pinJDB}).addTo(map);
	markerJDB.bindPopup("Jardin des Berges");
	var markerCSM = L.marker([47.206243,  -1.567234], {icon: pinCSM}).addTo(map);
	markerCSM.bindPopup("Cale des Sous-Marins");
	var markerWH = L.marker([47.201259, -1.572899], {icon: pinWH}).addTo(map);
	markerWH.bindPopup("Warehouse");
	var markerF = L.marker([47.20055, -1.57355], {icon: pinF}).addTo(map);
	markerF.bindPopup("Ferrailleur");
}
