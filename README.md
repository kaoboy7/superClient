# client

## Build & development
 
Npm and bower install
```bash
$ bower install
$ npm install
```

Please note if you get a bunch of "ERR! unpack Could not read data for ..." you may have to run on your osx terminal:
```bash
$ ulimit -n 2048
```

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
