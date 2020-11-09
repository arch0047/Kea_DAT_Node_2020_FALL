
const urlArray = window.location.href.split("/");

const uploadId = urlArray[urlArray.length-1];
// console.log( uploadId);


fetch(`/uploads/${uploadId}` )
 .then(res => res.json())
 .then (data => {
    // console.log(data);
     $("#message").append(`<p>${data.data.message}<p>`);
 }) ;



// instead of hardcoded message show the custom message on the page

// todo get the upload object with a fetch here
// in the  backend get by id method
// in the frontend by fetch method
