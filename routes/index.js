var express = require('express');
var router = express.Router();
var lastFmNode = require('lastfm').LastFmNode;

/* GET home page. */

var lastfm = new lastFmNode({
	api_key: 'dea8b9d2899c645d046e7e733abdc1a0',
	secret: 'b8b9ce9ce3d60ee528eaec24fed01244'
});

var trackStream = lastfm.stream('s_mn');

var nowPlaying = {};

trackStream.on('nowPlaying', function(track){
	//console.log(track);
	nowPlaying['artist'] = track.artist['#text'];
	nowPlaying['track'] = track.name;
	nowPlaying['album'] = track.album['#text'];

	track.image.forEach(function(url){
		if(url.size === 'large'){
			nowPlaying['imageUrl'] = url['#text'];
		}
	});
});

trackStream.start();

router.get('/', function(req, res) {
  res.render('index', nowPlaying);
});


module.exports = router;
