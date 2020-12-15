canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    colour = document.getElementById("color").value;
    mouse_x = e.clientX - canvas.offsetLeft; 
    mouse_y = e.clientY - canvas.offsetTop;

    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc (mouse_x,mouse_y,50,0,2*Math.PI);
ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}