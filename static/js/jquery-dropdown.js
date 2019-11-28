console.log("dropdown loaded");

$.get('/studentstatistics').then(function (response) {
    console.log(response)
    
    for (i = 0; i < response.length; i++){
      $('#class').append($('<option>', { 
        value: response[i],
        text : response[i]
        }));
        };    
});