/*(function() {*/
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
  
  function drawChar(font,char,x,y) {
    var c = char.charCodeAt(0);
    ctx.drawImage(font,(Math.floor(c/16)*12)+1,(c-(Math.floor(c/16)*16))+1,8,12,x,y,8,12);
  }
  
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0,0,width,height);
/*})()*/

/* Exposing game envoriment */
