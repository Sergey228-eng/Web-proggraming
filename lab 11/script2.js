var variable = document.getElementById("Canvas");
var ctx = variable.getContext('2d');


ctx.lineWidth = 2;
ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 270, 280);
ctx.strokeRect(15, 15, 260, 270);
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.strokeRect(55, 60, 65, 50);
ctx.strokeRect(175, 60, 65, 50);
ctx.strokeRect(55, 170, 65, 35);
ctx.strokeRect(175,170, 65, 60);

ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
for (i=50; i<275; i+=25){
  ctx.strokeRect(i, 35, 2, 2);
  ctx.strokeRect(i, 135, 2, 2);
  ctx.strokeRect(150, i+10, 2, 2);
  ctx.strokeRect(250, i+10, 2, 2);
  ctx.strokeRect(i, 260, 2, 2);
} 
for (i=50; i<200; i+=25){
    ctx.strokeRect(i, 260, 2, 2);
}
for (i=160; i<=260; i+=25){
    ctx.strokeRect(25, i, 2, 2);
}

var gradient1 = ctx.createLinearGradient(25, 0, 50, 0);
gradient1.addColorStop(0, "red");
gradient1.addColorStop(1, "yellow");

ctx.beginPath();
ctx.arc(40, 37.5, 15, 0.2 * Math.PI, 1.8 * Math.PI);
ctx.lineTo(35, 37.5);
ctx.fillStyle = gradient1;
ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(40.5, 28.5, 2, 2);


var gradient2 = ctx.createLinearGradient(10, 25, 70, 0);
gradient2.addColorStop(0, "purple");
gradient2.addColorStop(1, "blue");

var gradient3 = ctx.createLinearGradient(0, 20, 55, 0);
gradient3.addColorStop(0, "green");
gradient3.addColorStop(1, "orange");

var radius = 15;
var angle = Math.PI/180;
ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(112.5,135, radius, angle * 180, angle * 0, false);
ctx.lineTo(127.5, 150);
ctx.lineTo(120, 142);
ctx.lineTo(116.25, 150);
ctx.lineTo(112.5, 142);
ctx.lineTo(109.25, 150);
ctx.lineTo(105, 142);
ctx.lineTo(97.5, 150);
ctx.lineTo(97.5, 135);
ctx.fillStyle = gradient2;
ctx.fill();
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(105, 135, 5, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(102.5, 135, 2, angle * 0, angle * 360, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(120, 135, 5, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(117.5, 135, 2, angle * 0, angle * 360, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();


ctx.beginPath();
ctx.lineWidth = 1;
ctx.arc(150,260, radius, angle * 180, angle * 0, false);
ctx.lineTo(165,275);
ctx.lineTo(157.5, 267);
ctx.lineTo(153.75, 275);
ctx.lineTo(150, 267);
ctx.lineTo(146.25, 275);
ctx.lineTo(142.5, 267);
ctx.lineTo(135, 275);
ctx.lineTo(135, 267);
ctx.fillStyle = gradient3;
ctx.fill();
ctx.closePath();
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(142.5, 260, 5, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(145, 260, 2, angle * 0, angle * 360, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(157.5, 260, 5, angle * 0, angle * 360, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(160, 260, 2, angle * 0, angle * 360, false);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke();

ctx.fillStyle = "crimson";
ctx.font = "30px serif";
ctx.fillText("Pac-Man", 100,320);