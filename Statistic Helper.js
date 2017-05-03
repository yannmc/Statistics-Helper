/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Made by Yann Morin Charbonneau - Github : @yannmc
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//Function called everytime the values are changed
function refresh(){
  var data = document.getElementById("data").value.trim();//Retrieve the values
  x = data.split(" ");
  getSum();
  getMean();
  getMax();
  getMin();
  getRange();
  getStdDeviation();
  getVariance();
  getMedian();
  getquartiles();
  getMode();
}

//Function to get the sum
function getSum(){
  var sum = 0;
  for(var i = 0; i < x.length; i++){
    sum = sum + Number(x[i]);
  }
  document.getElementById("sum").innerHTML = "Sum = " + sum;
  return sum;
}

//Function to get the mean
function getMean(){
  var mean = 0;
  mean = getSum() / x.length; //Divide the sum of all values by the amount of values
  document.getElementById("mean").innerHTML = "Mean = " + mean;
  return mean;
}

//Function to get the maximum value
function getMax(){
  var max = 0;
  for(var i = 0; i < x.length; i++){ //Scan all the values
    if(max < Number(x[i])){ //Remember the current maximum value and change it if a bigger one is located
      max = Number(x[i]);
    }
  }
  document.getElementById("max").innerHTML = "Maximum = " + max;
  return max;
}

//Function to get the minimum value
function getMin(){
  var min = getMax();
  for(var j = 0; j < x.length; j++){ //Scan all the values
    if(min > Number(x[j])){ //Remember the current minimum value and change it if a smaller one is located
      min = Number(x[j]);
    }
  }
  document.getElementById("min").innerHTML = "Minimum = " + min;
  return min;
}

//Function to get the range
function getRange(){
  var range = getMax() - getMin(); //Difference between maximum and minimum value
  document.getElementById("range").innerHTML = "Range = " + range;
  return range;
}

//Function to get the variance
function getVariance(){
  var add = 0;
  var variance = 0;

  for(var j = 0; j < x.length; j ++){
    add = add + Math.pow((x[j]) - getMean(),2);
  }
  variance = add / x.length;
  document.getElementById("variance").innerHTML = "Variance = " + variance;
  return variance;
}

//Function to get the standard deviation
function getStdDeviation(){
  var stdDeviation = Math.sqrt(getVariance()); //variance^(1/2)
  document.getElementById("stdDeviation").innerHTML = "Standard Deviation = " + stdDeviation;
}

//Function to get the median
function getMedian(){
  var median = 0;
  x.sort(); //Sort values in ascending order
  if(x.length <= 1){ //If there is no value
    document.getElementById("median").innerHTML = "Median = Enter more than 1 value";
  }else if(x.length % 2 == 0){ //If there is an even number of values
    median = (Number(x[(x.length/2)-1]) + Number(x[x.length/2]))/2;
    document.getElementById("median").innerHTML = "Median = " + median;
  }else{ //If there is an odd number of values
    median = x[Math.round((x.length)/2)];
    document.getElementById("median").innerHTML = "Median = " + median;
  }
}

//Function to get the quartiles Q1, Q2, Q3 and Q4
function getquartiles(){
  var q1 = 0;
  var q2 = 0;
  var q3 = 0;
  x.sort(); //Sort the values in ascending order
  if(x.length <= 6){ //IF we don't have at least 6 values we do nothing
    document.getElementById("quartiles").innerHTML = "quartiles = Enter more than 6 values";

  }else if(x.length % 4 == 0){ //If the amount of value is a multiple of 4
    q1 = (Number(x[((x.length/4)-1)]) + Number(x[(x.length/4)]))/2;
    q2 = (Number(x[((x.length/2)-1)]) + Number(x[(x.length/2)]))/2;
    q3 = (Number(x[((3*(x.length/4))-1)]) + Number(x[(3*(x.length/4))]))/2;
    document.getElementById("quartiles").innerHTML = "quartiles: Q1 = " + q1 + ", Q2 = " + q2 + ", Q3 = " + q3;

  }else if(x.length % 4 != 0 && x.length % 2 == 0){ //If the amount of values is even but not a multiple of 4
    q1 = Number(x[Math.round(x.length/4)]);
    q2 = (Number(x[((x.length/2)-1)]) + Number(x[(x.length/2)]))/2;
    q3 = Number(x[Math.round(3*(x.length/4)+1)]);
    document.getElementById("quartiles").innerHTML = "quartiles: Q1 = " + q1 + ", Q2 = " + q2 + ", Q3 = " + q3;

  }else if((x.length+1) % 4 == 0){ //If the amount of values + 1 is a multiple of 4
    q1 = Number(x[Math.round(x.length*25/100)]);
    q2 = Number(x[Math.round(x.length*50/100)]);
    q3 = Number(x[Math.round(x.length*75/100)]);
    document.getElementById("quartiles").innerHTML = "quartiles: Q1 = " + q1 + ", Q2 = " + q2 + ", Q3 = " + q3;

  }else{ //Other scenarios
    q1 = (Number(x[((Math.round(x.length/4))-1)]) + Number(x[(Math.round(x.length/4))]))/2;
    q2 = (Number(x[Math.round(x.length*50/100)]));
    q3 = (Number(x[(3*(Math.round(x.length/4)))]) + Number(x[(3*(Math.round(x.length/4)))+1]))/2;
    document.getElementById("quartiles").innerHTML = "quartiles: Q1 = " + q1 + ", Q2 = " + q2 + ", Q3 = " + q3;
  }
}

//Function to get the mode
function getMode(){
  var frenquency = 0;
  for(var i = 0; i < x.length; i++){
    var counter = 0 ;
    for (var j = 0 ; j < x.length; j++){
      if (Number(x[i]) == Number(x[j])) {
        counter = counter + 1 ; //How many times the value[i] is found within all values
      }
    }

    if(counter > frenquency) { //If the counter is higher than our current highest, take the new one
      frenquency = counter ;
      var mode = x[i];
      document.getElementById("mode").innerHTML = "Mode = " + mode;
    }
  }
}
