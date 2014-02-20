# node-connect-livereload

Start a file server with connect and connect-livereload to instantly preview your files.

Inspired by the grunt plugin [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect).

## How It Works

1. Start a Connect file server.
2. Start a livereload server using tiny-lr.
3. Append the livereload script to your html files using connect-livereload.
4. Open the server in your browser.

## Usage

`node index.js`