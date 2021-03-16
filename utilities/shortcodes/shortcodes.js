const CLOUDNAME = "peterbroom"
const FOLDER = "peterbroom_portfolio"
const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
const FALLBACK_WIDTHS = [ 300, 600, 680, 1360 ];
const FALLBACK_WIDTH = 680;

function getSrcset(file, widths) {
  const fileName = file.split(['/','\\']).pop();
  const widthSet = widths ? widths : FALLBACK_WIDTHS
  return widthSet.map(width => {
    return `${getSrc(fileName, width)} ${width}w`;
  }).join(", ")
}

function getSrc(file, width) {
  const fileName = file.split(['/','\\']).pop();
  return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${FOLDER}/${fileName}`
}

module.exports = {
  srcset: (file, widths) => getSrcset(file, widths),
  src: (file, width) => getSrc(file, width),
}