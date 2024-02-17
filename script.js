function myFun() {
  var a = parseInt(document.getElementById("wgt").value);
  var b = parseInt(document.getElementById("hgt").value);
  var c = (a / ((b * b) / 10000)).toFixed(2);

  document.getElementById("result").innerHTML = c;

  if (c < 18.5) {
    document.getElementById("bmi").innerHTML = "Under Weight";
    document.body.style.backgroundColor = "orange";
  } else if (c >= 18.5 && c <= 24.9) {
    document.getElementById("bmi").innerHTML = "Normal Weight";
    document.body.style.backgroundColor = "green";
  } else if (c >= 25 && c <= 29.9) {
    document.getElementById("bmi").innerHTML = "Over Weight";
    document.body.style.backgroundColor = "blue";
  } else {
    document.getElementById("bmi").innerHTML = "Obese";
    document.body.style.backgroundColor = "red";
  }
}
