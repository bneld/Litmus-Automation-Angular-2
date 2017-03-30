var mqtt = require('mqtt');
var data = require('./data.js');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client  = mqtt.connect('ws://test.mosquitto.org:8080');


client.on('connect', function () {
	client.subscribe('timeline');
	data.forEach((element) => {
		client.publish('timeline', JSON.stringify(element));
	});
});

client.on('message', function (topic, message) {
	// message is Buffer
	console.log(message.toString());
	client.end();
});