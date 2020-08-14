const compose = require('next-compose-plugins')

const transpileAdditionals = require('next-transpile-modules')(['ol'])
// const optimizeImages = require('next-optimized-images')

module.exports = compose([
    // [optimizeImages, {
    //     optimizeImages: false,
    // }],
    [transpileAdditionals]
]);
