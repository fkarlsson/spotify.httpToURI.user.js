// ==UserScript==
// @name        Spotify HTTP to URI
// @namespace   dfgh
// @description Redirects a Spotify HTTP-link to a Spotify URI
// @include     *open.spotify.com*
// @version     1
// ==/UserScript==

var console = unsafeWindow.console;

if (window.top != window.self)  //don't run on frames or iframes
    return;

// the guts of this userscript
function main() {
    console.log(window.location);

  	var pathname = window.location.pathname.split('/');
  	var type = pathname[1];

  	var uri = 'spotify:';
  	if (type == 'track' || type == 'album' || type == 'artist') {
  		uri += type + ':' + pathname[2];
  	}
  	else if (type == 'user') {
  		var username = pathname[2];

  		if (pathname[3] == 'playlist') {
  			if (pathname[4] == 'starred') {
  				uri += type + ':' + username + ':starred';
  			} else {
  				uri += type + ':' + username + ':playlist:' + pathname[4];
  			}
  		} else {
  			uri += type + ':' + username;
  		}
  	}

 	setTimeout(closeWindow, 500);
 	window.location = uri;
}

function closeWindow() {
	window.open('', '_self', ''); //bug fix for chrome
	window.close();
}

main();