console.log("table loaded");

$.get('/attendance').then(function (response) {
    console.log(response)
    for (i = 0; i < response.length; i++){
		items = response[i].split(" ");
      $('#example2 > tbody:last-child').append('<tr><td>'+items[0]+'</td><td>'+items[1]+'</td><td>'+items[2]+'</td></tr>');
	};
});