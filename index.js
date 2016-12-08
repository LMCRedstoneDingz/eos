(function() {
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width,
    height = canvas.height
  ctx.fillStyle = "rgb(255,0,0)";
  ctx.rect(0,0,width,height);
  ctx.fill();
})()
