var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseEvent="vazio";
var ultimaPosicaoX;
var ultimaPosicaoY;
var cor="green";
var largura=1;
var raio=10;

canvas.addEventListener("touchstart", mouseParaBaixo);
function mouseParaBaixo(evento){
    mouseEvent="touchDown";
    cor=document.getElementById("cor").value ;
    largura=document.getElementById("largura").value ;
    raio=document.getElementById("raio").value ;
    ultimaPosicaoX=evento.touches[0].clientX-canvas.offsetLeft;
    ultimaPosicaoY=evento.touches[0].clientY-canvas.offsetTop;
}



canvas.addEventListener("touchmove", touchmove);
function touchmove(evento){
    var x=evento.touches[0].clientX-canvas.offsetLeft;
    var y=evento.touches[0].clientY-canvas.offsetTop;
  
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + x + "y = " + y);
        ctx.beginPath();
        ctx.strokeStyle = cor;
        ctx.linewidth = largura;
        ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
        ctx.lineTo(x, y);
        ctx.stroke();

ultimaPosicaoX=x;
ultimaPosicaoY=y;
}
function apagar(){
ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}