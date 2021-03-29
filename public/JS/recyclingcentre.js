/*declaration of variables*/
let pos;
    let map;
    let bounds;
    let infoWindow;
    let currentInfoWindow;
    let service;
    let info;
    
    /*function to initialize the map*/
    function initMap() {

      /* Initialize variables*/
      bounds = new google.maps.LatLngBounds();
      infoWindow = new google.maps.InfoWindow;
      currentInfoWindow = infoWindow;

      //Add side bar to display information about the recycling centre
      info = document.getElementById('panel');

      // add georgraphical location of the user
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map = new google.maps.Map(document.getElementById('map'), {
            center: pos,
            zoom: 15
          });
          bounds.extend(pos);

          infoWindow.setPosition(pos);
          infoWindow.setContent('Location found.');
          infoWindow.open(map);
          map.setCenter(pos);

          // Call nearby recycling centre closest to user location
          getRecyclingCentre(pos);
        }, () => {
          
          handleLocationError(true, infoWindow);
        });
      } else {
        // georgraphical location not supported by browser.
        handleLocationError(false, infoWindow);
      }
    }

    // If bowser doesn't support georgraphical location it will display the defualt location
    function handleLocationError(browserHasGeolocation, infoWindow) {
      // Set default location to Aberdeen, Scotland
      pos = { lat: 57.1498817, lng:-2.1950675 };
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: 15
      });

      // Display an InfoWindow at the map center
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Location denied.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
      currentInfoWindow = infoWindow;

      // Call Places recycling centres Search on the default location
      getRecyclingCentre(pos);
    }

    // Perform a recycling centre  Search Request
    function getRecyclingCentre(position) {
      let request = {
        location: position,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: 'recycling centre'
      };
      
      service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, nearbyCallback);
    }

    // create results of the Nearby recycling centre Search
    function nearbyCallback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        createMarkers(results);
      }
    }

    // Set markers at the location of each place result
    function createMarkers(places) {
      places.forEach(place => {
        let marker = new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name,
        });

        // Add click listener to each marker
        google.maps.event.addListener(marker, 'click', () => {
          let request = {
            placeId: place.place_id,
            fields: ['name', 'formatted_address', 'geometry', 'rating',
              'website', 'photos']
          };
         //An event that print the details of information about the place once the user /////click on marker.
          
          service.getDetails(request, (placeResult, status) => {
            showDetails(placeResult, marker, status)
          });
        });

        // Adjust the map bounds to include the location of this marker
        bounds.extend(place.geometry.location);
      });
      //adjust map bound to include all visible area.
      
      map.fitBounds(bounds);
    }

    
    // show place detail in infowindow
    function showDetails(placeResult, marker, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        let placeInfowindow = new google.maps.InfoWindow();
        let rating = "None";
        if (placeResult.rating) rating = placeResult.rating;
        placeInfowindow.setContent('<div><strong>' + placeResult.name +
          '</strong><br>' + 'Rating: ' + rating + '</div>');
        placeInfowindow.open(marker.map, marker);
        currentInfoWindow.close();
        currentInfoWindow = placeInfowindow;
        showPanel(placeResult);
      } else {
        console.log('showDetails failed: ' + status);
      }
    }

   
    // Displays place details in a sidebar
    function showPanel(placeResult) {
      // If infoPane is already open, close it
      if (info.classList.contains("open")) {
        info.classList.remove("open");
      }

      // Clear the previous details
      while (info.lastChild) {
        info.removeChild(info.lastChild);
      }

    
      // On click the infoWindown will display a photo with detail of place.
      if (placeResult.photos) {
        let firstPhoto = placeResult.photos[0];
        let photo = document.createElement('img');
        photo.classList.add('hero');
        photo.src = firstPhoto.getUrl();
        info.appendChild(photo);
      }

      // Add place details with text formatting
      let name = document.createElement('h1');
      name.classList.add('place');
      name.textContent = placeResult.name;
      info.appendChild(name);
      if (placeResult.rating) {
        let rating = document.createElement('p');
        rating.classList.add('details');
        rating.textContent = `Rating: ${placeResult.rating} \u272e`;
        info.appendChild(rating);
      }
      let address = document.createElement('p');
      address.classList.add('details');
      address.textContent = placeResult.formatted_address;
      info.appendChild(address);
      if (placeResult.website) {
        let para = document.createElement('p');
        let link = document.createElement('a');
        link.classList.add('link');
        para.classList.add('paragraph');
        link.innerText = 'Link!';

        //let Url = document.createTextNode(placeResult.website);
        //link.appendChild(Url);
        link.title = placeResult.website;
        link.href = placeResult.website;
        para.appendChild(link);
        info.appendChild(para);            
      }

      // Open the infoPane
      info.classList.add("open");
    }
      
