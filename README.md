You will need:

* node.js source code
* v8 source code
* libcurl development package

Building:

    node-waf configure && node-waf build

Copy Generated library to current directory:

    cp build/default/curllib.node .

Run the test.js file:

    node test.js
