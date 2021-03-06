
var map;    // declares a global map variable
var HTMLheaderName = '<div class="bounceInLeft animated"><h1>%data%</h1></div>';
var HTMLheaderRole = '<span class="subHeader flex-column bounceInLeft animated">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="darker-grey-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="darker-grey-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="darker-grey-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="darker-grey-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="darker-grey-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="darker-grey-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="darker-grey-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic img-responsive circle-border">';
var HTMLwelcomeMsg = '<span class="welcome-message ">%data%</span>';

var HTMLskillsStart = '<ul id="skills" class="flex-column"><li class="flex-item"><h3 id="skills-h3">%category%:</h3></li></ul>';
var HTMLskills = '<li class="flex-item"><span">%data%</span></li>';
var HTMLframeworksStart = '<ul id="frameworks" class="flex-column"><li class="flex-item"><span class="white-text"><h3 id="skills-h3">Frameworks:</h3></span></li></ul>';
var HTMLframeworks = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var HTMLotherStart = '<ul id="other-skills" class="flex-column"><li class="flex-item"><span class="white-text"><h3 id="skills-h3">Others:</h3></span></li></ul>';
var HTMLother = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLProjectImagePlaceholder = '<div class="row flex-box"><div id="img0" class="col-sm-4 col-md-4 col-lg-4 gray"></div><div id="img1" class="col-sm-4 col-md-4 col-lg-4 gray"></div><div id="img2" class="col-sm-4 col-md-4 col-lg-4 gray"></div></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<a href="#"><img src="%data%" class="project-img img-responsive"></a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDate = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<br>Major: %data%';

var HTMLonlineClasses = '<br><br><h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div><br>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var HTMLfooterInfo = '<li><a href="#" class="fontawesome-%class% social-link" target="_blank" title="%title%"></a></li>';
var HTMLCopyWriteText ='<p>Copyright© 2017 Developed By <span class="fancy-text">by </span><span class="signature-text"><a href="#" target="_blank" title="%title%">%data%</a></span><p>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/* 
Google Map
*/

/*
initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school and work locations and appends each location to the locations array

    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

     work.jobs.forEach(function(job) {
      locations.push(job.location);
     });
     
      return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

   //show more on click
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent("<h3>" + marker.title + "</h3>");
      infoWindow.open(map, marker);
    });

    // pin gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

//Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
//  Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});