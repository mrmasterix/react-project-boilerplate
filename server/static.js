const express = require('express');
const path = require('path');
const Router = express.Router();

const staticPath = {};
const pathConfig = {
  dist: './dist',
  js: './js',
  img: './img',
  css: './css',
};

const pathKeys = Object.keys(pathConfig);
for (let keyIndex = 0; keyIndex < pathKeys.length; keyIndex += 1) {
  const currentKey = pathKeys[keyIndex];
  const currentPath = pathConfig[currentKey];
  Object.defineProperty(staticPath, currentKey, {
    get() {
      return path.resolve('./', currentPath);
    },

  });
}

const { dist, js, css, img } = staticPath;

Router.use(express.static(staticPath.dist));
Router.use('/js/*', express.static(staticPath.js));
Router.use('/img/*', express.static(staticPath.img));
Router.use('/css/*', express.static(staticPath.css));

module.exports = Router;