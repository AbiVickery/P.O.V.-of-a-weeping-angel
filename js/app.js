function scenario1() {
    var answer;
    var story = prompt(".");
    switch(story) {
        case "A" :
            answer = ".";
            console.log('answer 1/2');
        break;
        case "B" :
            answer = ".";
            console.log('answer 2/2');
        break;
        default:
            answer = "Either answer with A or B. Please try again.";
    }
    document.getElementById("story1").innerHTML = answer;
}