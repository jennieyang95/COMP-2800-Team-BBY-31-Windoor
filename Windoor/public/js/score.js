function addOne() {
    var score = document.getElementById("scoreBoard").innerHTML
    score++;
    document.getElementById("scoreBoard").innerHTML = score;
    console.log(score);
}

