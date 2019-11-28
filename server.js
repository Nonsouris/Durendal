const https = require('https'),
	express = require('express'),
	fs = require('fs');

const options = {
	key: fs.readFileSync("arandomcert.key"),
	cert: fs.readFileSync("arandomcert.crt")
}

const app = express();
      
   
app.get('/studentstatistics', function (request, response) {
	var data = fs.readFileSync('static/userPhoto/userInfo').toString('utf-8');
    var data = data.split("\n")
    console.log(data.toString()); 
    console.log(typeof(data));
	response.send(data);
});

app.get('/attendance', function (request, response) {
	var data = fs.readFileSync('static/userPhoto/DISM-FT-3A-02').toString('utf-8');
    var data = data.split("\n")
    console.log(data.toString()); 
    console.log(typeof(data));
	response.send(data);
});

app.use(express.static('static'));
app.use((req, res) => {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});
let ip = "192.168.223.130"
app.listen(8000)
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}
https.createServer(options, app).listen(443)

console.log('Server running at https://localhost');