var startTime = 0, endTime = 0, elapsed = 0, numPlays = 0, avg = 0;

//function to generate a new shape
function newShape(){
  //initialize random variables
  var xPos = Math.floor(Math.random() * 1001);
  var yPos = Math.floor(Math.random() * 401);
  var shape = Math.floor(Math.random() * 2);
  var size = Math.floor((Math.random() * 201) + 100);
  var color = Math.floor(Math.random() * 5);

  //Format position variables
  xPos += "px";
  yPos += "px";

  //Format shape variables.
  //If the random number is 0, set a string to 0% to format a square
  //If the random number is 1, set a string to 50% to format a circle
  if(shape == 0){
    shape = "0%";
  }
  else{
    shape = "50%";
  }

  //Format shape size
  size += "px";

  //Format color
  switch(color){
    case 0: color = "red";
      break;
    case 1: color = "blue";
      break;
    case 2: color = "brown";
      break;
    case 3: color = "purple";
      break;
    case 4: color = "black";
      break;
    default:
      color = "light-blue";
  }
  document.getElementById('shape').style.left = xPos;
  document.getElementById('shape').style.top = yPos;
  document.getElementById('shape').style.borderRadius = shape;
  document.getElementById('shape').style.width = size;
  document.getElementById('shape').style.height = size;
  document.getElementById('shape').style.backgroundColor = color;
  document.getElementById('shape').style.display = "block";
  startTime = new Date();
}
function appearAfterDelay() {
    setTimeout(newShape, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById('shape').onclick = function(){
  document.getElementById("shape").style.display = "none";
  endTime = new Date();
  elapsed = (endTime - startTime) / 1000;
  avg = (avg*numPlays + elapsed)/(numPlays+1);
  elapsed = elapsed.toFixed(2);
  avg = avg.toFixed(2);
  numPlays++;
  document.getElementById("time").innerHTML = elapsed;
  document.getElementById("aveTime").innerHTML = avg;
  appearAfterDelay();

  startTime = endTime;
}
