// Create a new XMLHttpRequest object
function loadDoc() {
  let xhr = new XMLHttpRequest();

  // Configure the request: GET method, URL, asynchronous
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);

  // Set up a callback function to handle the response
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // Success! Parse the response and update the UI
      let responseData = JSON.parse(xhr.responseText);
      console.log("Response data:", responseData);
    } else {
      // Error handling
      console.error("Request failed with status:", xhr.status);
    }
  };

  // Handle network errors
  xhr.onerror = function () {
    console.error("Request failed");
  };

  // Send the request
  xhr.send();
}
