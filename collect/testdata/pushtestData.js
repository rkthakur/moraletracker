var http = require('http');

//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'


callback = function(response) {
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}
for (var i=0;i < 1000;i++)
{
  var options = {
    host: 'localhost',
    path: '/setdata?morale='+ Math.floor(Math.random() * (3 - 0) + 0),
    port: '8088'
  };
  http.request(options, callback).end();
}
