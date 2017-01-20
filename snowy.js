node bot.js
var DubtrackAPI = require('./dubtrackapi');

// For the cookie route, just set creds to the cookie value
var creds = '...'; // Put the value of the connect.sid cookie here

// For username and password
creds = {
  username: 'snowyy winter',
  password: '123bot132'
};

var bot = new DubtrackAPI(creds);

bot.connect('LITHUANIAN PARADISE'); // specify the room name part of the url for the room

bot.on('ready', function(data) {
  console.log("Ready to go: ", data);
  // data contains the currentDJ (by name) and currentTrack (artist and track), and the list of users in the room (does not update on join/depart)

  bot.getEvents(function(events) {
    console.log("These are the Dubtrack events I respond to: ", events);
  });
});

bot.on('chat-message', function(data) {
  console.log("got chat: ", data);
});

bot.on('room_playlist-update', function(data) {
  console.log("new song playing: ", data);
});

bot.on('error', function(msg, trace) {
  console.log("Got an error from the virtual browser: ", msg, trace);
});