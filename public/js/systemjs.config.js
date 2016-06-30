/**
 * System configuration for Angular 2 apps
 * Adjust as necessary for your application needs.
 */
(function (global) {

  // map tells the System loader where to look for things
  var map = {
    'demo': 'demo',

    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',

    '@angular2-material': 'node_modules/@angular2-material',
    'DISQUS': 'src'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'demo': { main: 'main.js', defaultExtension: 'js' },
    'DISQUS': { main: 'index.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    '@angular2-material/core': { format: 'cjs', defaultExtension: 'js', main: 'core.js' },
    '@angular2-material/toolbar': { format: 'cjs', defaultExtension: 'js', main: 'toolbar.js' },
    '@angular2-material/card': { format: 'cjs', defaultExtension: 'js', main: 'card.js' },
    '@angular2-material/input': { format: 'cjs', defaultExtension: 'js', main: 'input.js' },
    '@angular2-material/button': { format: 'cjs', defaultExtension: 'js', main: 'button.js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);