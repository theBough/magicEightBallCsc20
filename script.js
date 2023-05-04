var myBtn = document.getElementById("myBtn");
var theirQuestion = document.getElementById("theirQuestion")
var answer = document.getElementById("answer")
var rndNum =0;
var i =0;
var responses = [
  "Yep",
  "Yes",
  "Of course",
  "I feel 100% confident this will happen",
  "Nope",
  "Hard No",
  "Not a chance keep dreaming",
  "I have no idea, sorry.",
  "That questions is waaaay to hard for me to answer.",
  "Why would you even ask that? Of course the answer is YES!!!"
]
function test(){
  myBtn.innerHTML = "Hello World"
  //the number 10 is the amount of resposes plus 1
  rndNum = Math.random()*10;
  rndNum = Math.floor(rndNum)
  answer.innerHTML += "<br>You:>>" + theirQuestion.value;
  answer.innerHTML += "<br>The 8 Ball:>>"
  i=0;
  ghostTyping();
  theirQuestion.value = "";
}
function ghostTyping(){
  if(i < responses[rndNum].length){
    //this is grabbing the letter at index 'i'
    //index means position or address.
    //eg "hello" chatAt(3) would be 'l'
    answer.innerHTML += responses[rndNum].charAt(i);
    i++;
    setTimeout(ghostTyping, 100)
  }
}//end function
