// Set the countdown clock to 60s
// On click event to select answer; count the correct answers
// On click event, don't let user select multiple choices (just one or the other)
// when time is up, coount correct and incorrect answers

var correct = 0;
var incorrect = 0;

$("#start-button").on("click", function () {
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("time").textContent = timeleft;
        if (timeleft <= 0)
            clearInterval(downloadTimer);
    }, 1000);
})

//function selectRightA(result) {

// var numberOfChecked = $('input:checkbox:checked').length;
//console.log(numberOfChecked);

// var numberofCheckedCo = 

function checkboxes() {
    var divs = document.getElementsByClassName("righta");
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].type === "checkbox" && divs[i].checked === true) {
            correct++;
            $("#wins").text(correct);
        }
    }
}

window.setInterval(function () {
    alert(correct);
}, 10000);





   // if (numberOfChecked === result) {
    //    correct++;
     //   console.log(correct);
     //   document.getElementById("#wronga").addEventListener("click", function(event){
     //       event.preventDefault()
     //   });

  //  }
//}

