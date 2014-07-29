spotify.httpToURI.user.js
=========================

Chrome userscript (Might also work on Opera as well as Firefox with Greasemonkey) that, when a spotify http link is clicked, converts it to a Spotify URI which causes the link to open in the Desktop client automatically instead of the web client, just like the good old days. The link window/tab will stay open for ~500ms and then close itself.

This has not been tested on any other setups than my own (OS X 10.9, Chrome 36) but for me it works just like I want it to.

AFAIK the easiest way to install a userscript is to download the js file and then drag and drop it into `chrome://extensions`.

Note: The setTimeout 500ms delay is not required if your internet connection is fast (in which case 0ms will work) however I had to set it higher due to latency issues. I made this a long time ago because I needed a quick fix, so the code might not be as good as it could be.

Second note: I am aware that you can configure the web client to open links in the desktop client, but that is not good enough for me as the behaviour is still not like it used to be.

Hope you'll like it! If anyone wants to convert this to a proper extension or come up with a more clever solution, please collaborate!