
browserify index.js --s module > dist/module.js

browserify foo.js -o foo_bundle.js -s foo

// OK
browserify handler.js -o handler_bundle.js -s handler
browserify handler.js -o handler.bundle.js -s handler
