var myBtn = document.getElementById("myBtn");
var theirQuestion = document.getElementById("theirQuestion")
var answer = document.getElementById("answer")

function test(){
  myBtn.innerHTML = "Hello World"
  answer.innerHTML += "<br>You:>>" + theirQuestion.value;
}
