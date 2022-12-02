var example = document.getElementById("MyCanvas");
var ctx = example.getContext('2d');
ctx.strokeStyle = 'black';
ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(18, 18, 260, 260);
ctx.fillStyle = 'white';
ctx.fillRect(20, 20, 256, 256);
for (i=0; i<8; i+=2){
    for (j=0; j<8; j+=2) {
        if(j == 0){
            ctx.fillStyle = 'yellow';
        }
        if(j == 2){
            ctx.fillStyle = 'aqua';
        }
        if(j == 4){
            ctx.fillStyle = 'green';
        }
        if(j == 6){
            ctx.fillStyle = 'navy';
        }
            ctx.fillRect(20+i*32, 20+j*32, 32, 32);
        if(i == 0){
            ctx.fillStyle = 'crimson';
        }
        if(i == 2){
            ctx.fillStyle = 'lime';
        }
        if(i == 4){
            ctx.fillStyle = 'black';
        }
        if(i == 6){
            ctx.fillStyle = 'maroon';
        }
            ctx.fillRect(20+(i+1)*32, 20+(j+1)*32, 32, 32);
        }
}
