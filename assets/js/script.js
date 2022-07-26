// Current date
var currentDate = moment().format('dddd : MMMM Do, YYYY');
$("#currentDay").html(currentDate);


// Save button
$(".saveBtn").on("click", function () {
     var text = $(this).siblings(".description").val();
     var time = $(this).siblings(".hour").text();

    // Saves text found in description in local storage
    localStorage.setItem(time, text);
});

// When pushed, resets schedule after page refresh
$("#reset").on("click", function(){
    localStorage.clear();
    usePlanner()
}); 

// When events are saved, they remain even after page is refreshed
function usePlanner() {

    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentPlan = localStorage.getItem(currentHour);

        if(currentPlan !== null) {
            $(this).siblings(".description").val(currentPlan);
        }
    });
};


// Color-codes each time block to indicate whether the event is in the past, present, or future
function timeBlock() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currentTime = parseInt($(this).attr("id"));

        if (currentTime > hour) {
            $(this).addClass("future");
        } else if (currentTime === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


// Call functions
timeBlock();
usePlanner();