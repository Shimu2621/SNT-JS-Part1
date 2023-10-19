let score = 40;
// || or operatore

if(score >= 90) {  // 90, 91, 92....
    console.log("You got an A");
}
else if(score >= 80 && score < 90) { // 80, 81, 82, 83,.... 89
    console.log("You got a B");
}
else if(score >= 70 && score < 80) { //70, 71, 72....79
    console.log("You got a C");
} else {
    console.log("You need improvement");
}