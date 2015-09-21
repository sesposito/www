var express = require('express');
var router = express.Router();
var lastFmNode = require('lastfm').LastFmNode;

/* GET home page. */

var lastfm = new lastFmNode({
	api_key: 'dea8b9d2899c645d046e7e733abdc1a0',
	secret: 'b8b9ce9ce3d60ee528eaec24fed01244'
});

<<<<<<< HEAD
var trackStream = lastfm.stream('s_mn');
=======
var trackStream = null;

try {
  trackStream = lastfm.stream('s_mn');
} catch(err) {
	console.log('Cannot get Lastfm stream: '+err);
}
>>>>>>> lastfm

var musicInfo = {};

trackStream.on('nowPlaying', function(track){
	//console.log(track);
	musicInfo['artist'] = track.artist['#text'];
	musicInfo['track'] = track.name;
	musicInfo['album'] = track.album['#text'];
<<<<<<< HEAD
	musicInfo['nowPlaying'] = Boolean(track['@attr'].nowplaying);

=======
	//musicInfo['nowPlaying'] = Boolean(track['@attr'].nowplaying);
	console.log(track);
>>>>>>> lastfm
	track.image.forEach(function(url){
		if(url.size === 'large'){
			musicInfo['imageUrl'] = url['#text'];
		}
	});
});

trackStream.start();

router.get('/', function(req, res) {
<<<<<<< HEAD
=======
	console.log(musicInfo);
>>>>>>> lastfm
	res.render('index', {musicInfo: musicInfo});
});


module.exports = router;
