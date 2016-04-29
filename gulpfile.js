const elixir = require('laravel-elixir');
require('laravel-elixir-vueify');

// Set BasePaths
const basePath = {
  bower: './bower_components',
  js: {
    src: './src/js',
    dist: './dist/js',
  },
  sass: {
    src: './src/sass',
    dist: './dist/css'
  },
  fonts: './dist/fonts',
};

// Get Bower Packages
const paths = {
  scripts:{
    jquery: `${basePath.bower}/jquery/dist/jquery.js`,
    bootstrapJs: `${basePath.bower}/bootstrap-sass/assets/javascripts/bootstrap.js`,
    vue: `${basePath.bower}/vue/dist/vue.js`,
    vuex: `${basePath.bower}`,
    vueRouter: `${basePath.bower}/vue-router/dist/vue-router.js`,
    vueResource: `${basePath.bower}/vue-resource/dist/vue-resource.js`
  },
  styles:{
    fontawesome: `${basePath.bower}/font-awesome/scss`,
    bootstrapSass: `${basePath.bower}/bootstrap-sass/assets/stylesheets`
  },
  fonts:{
    fontawesome: `${basePath.bower}/font-awesome/fonts`
  }
};

elixir( (mix) => {
  mix
    // Copy JS
    .copy(paths.scripts.jquery, `${basePath.js.src}/vendor/jquery.js`)
    .copy(paths.scripts.bootstrapJs, `${basePath.js.src}/vendor/bootstrap.js`)
    // Copy SASS
    .copy(paths.styles.bootstrapSass, `${basePath.sass.src}/vendor/bootstrap`)
    .copy(paths.styles.fontawesome, `${basePath.sass.src}/vendor/font-awesome`)

    // Copy Fonts
    .copy(paths.fonts.fontawesome, basePath.fonts )

    // Vendor Scripts Task
    .scripts([
      'jquery.js',
      'bootstrap.js',
    ], `${basePath.js.dist}/vendor.js`, `${basePath.js.src}/vendor` )

    // JS Source Task
    .browserify([
      'main.js',
    ], `${basePath.js.dist}/app.js`, basePath.js.src)

    // Mocha Tests Task
    .browserify([
      'Task/mutations.spec.js',
      'Alert/mutations.spec.js',
      'Actions/actions.spec.js',
    ], `${basePath.js.src}/test/TestBundle/tests.js`, `${basePath.js.src}/test/`)
    // Mocha E2E Task
    .browserify([
      'E2E/e2e.spec.js'
    ], `${basePath.js.src}/test/TestBundle/e2e.js`, `${basePath.js.src}/test/`)


    // Sass Task
    .sass('app.scss', basePath.sass.dist, basePath.sass.src);

});
