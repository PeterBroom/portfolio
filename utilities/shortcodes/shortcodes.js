const path = require('path');
const CLOUDNAME = "peterbroom"
const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
const FALLBACK_WIDTHS = [ 300, 600, 680, 1360 ];
const FALLBACK_WIDTH = 680;

function getSrcset(file, widths) {
  const widthSet = widths ? widths : FALLBACK_WIDTHS
  return widthSet.map(width => {
    return `${getSrc(file, width)} ${width}w`;
  }).join(", ")
}

function getSrc(file, width) {
  const folderName = file.split(path.sep)[7]; // split file path to get folder at position 7
  const fileName = path.parse(file).base;

  return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${folderName}/${fileName}`
}

function getImageWidth(file, width) {
  console.log('width', width);
  return `${width}`;
}

module.exports = {
  srcset: (file, widths) => getSrcset(file, widths),
  src: (file, width) => getSrc(file, width),
  imageWidth: (file, width) => getImageWidth(file, width)
}