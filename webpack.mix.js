// webpack.mix.js

// let mix = require('laravel-mix');

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/scss/app.scss', 'public/css')
//    .sourceMaps();


let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/app.js').sass("resources/scss/app.scss","public/css/app.css");