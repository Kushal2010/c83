canvas=document.getElementById("myCanvus");
ctx=canvas.getContext("2d");
var color="aqua";
width_line=1;
var mouseEvent="";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientX-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        ctx.moveTo(last_potision_of_x,last_potision_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke()
    }

    last_potision_of_x=current_position_of_mouse_x;
    last_potision_of_y=current_potsition-Of_mouse_y;
}