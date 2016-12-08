/*(function() {*/
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height;
  
  function writeText(font,text,x,y) {
    var c;
    for (var i = 0;i<message.length;i++) {
      c = text.charCodeAt(i);
      ctx.drawImage(font,(c-(Math.floor(c/16)*16))*8,Math.floor(c/16)*12,8,12,(i*10)+x,y,8,12);
    }
  }
  
  ctx.imageSmoothingEnabled = false;
  ctx.clearRect(0,0,width,height);
/*})()*/

/* Exposing game envoriment */
