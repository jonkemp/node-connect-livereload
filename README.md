# node-connect-livereload

Start a file server with connect and connect-livereload to instantly preview and watch your files.

Initially inspired by the grunt plugin [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect).

## How It Works

1. Starts a Connect file server.
2. Starts a livereload server using tiny-lr.
3. Appends the livereload script to your html files using connect-livereload.
4. Opens the server in your browser.
5. Watches your files for changes.

## Usage

`node index.js`