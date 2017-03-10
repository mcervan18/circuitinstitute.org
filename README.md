# circuit


## To develop:

### Run `webpack` to watch directory for changes
In the root directory, run `webpack --watch`. (You may need to `npm i --global webpack` first)

### Run a dev server to see the compiled version
In the `dist` directory, run your simple http server. Either `python2 -m SimpleHTTPServer`, or use the faster node equivalent: Install with `npm i --global http-server` and then run with `http-server`

### See results in browser
Open `localhost:8000` (python) or `localhost:8080` (node) in your browser to see changes take effect *after reload*.

## To deploy:

### Package the app for delivery:
Run `webpack -p` once from the root directory to generate a **p**roduction-ready bundle.js

Compress the dist/ directory (including the new bundle) and upload to s3.
