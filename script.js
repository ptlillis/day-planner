console.log("linked?");

// declaring header timer
    var today = moment().format('dddd,MMMM,Do');

    $(".currentDay").append(today);
    // time in hours only
    var now =  parseInt(moment().format('HH'));
        console.log("the time is: ", now);
          
    // input text tags
    var time09Am = $("#hour9Am");
    var time10Am = $("#hour10Am");
    var time11Am = $("#hour11Am");
    var time12Pm = $("#hour12Pm");
    var time01Pm = $("#hour1Pm");
    var time02Pm = $("#hour2Pm");
    var time03Pm = $("#hour3Pm");
    var time04Pm = $("#hour4Pm");
    var time05Pm = $("#hour5Pm");

    // input text according to current time

    $("input").each( function () { 
         var scheduleTime = parseInt($(this).attr("data-hour"));
            
         if (scheduleTime < now){
             $(this).addClass("past");
           
         }
         if (scheduleTime > now) {
             $(this).addClass("future");
         
         }
          if  (scheduleTime === now) {
              $(this).addClass("present");
        
          }
    });
    
     //  local storage save

    $("button").on("click", function () { 
        
        localStorage.setItem("9Am",(time09Am.val()));
        localStorage.setItem("10Am", (time10Am.val()));
        localStorage.setItem("11Am", (time11Am.val()));
        localStorage.setItem("12Pm", (time12Pm.val()));
        localStorage.setItem("1Pm", (time01Pm.val()));
        localStorage.setItem("2Pm", (time02Pm.val()));
        localStorage.setItem("3Pm", (time03Pm.val()));
        localStorage.setItem("4Pm", (time04Pm.val()));
        localStorage.setItem("5Pm", (time05Pm.val()));
            
    
    
    // calling local storage data back to browser
    
    $('#hour9Am').val((localStorage.getItem("9Am")));
    $("#hour10Am").append(localStorage.getItem("10Am"));
    $("#hour11Am").append(localStorage.getItem("11Am"));
    $("#hour12Pm").append(localStorage.getItem("12Pm"));
    $("#hour1Pm").append(localStorage.getItem("1Pm"));
    $("#hour2Pm").append(localStorage.getItem("2Pm"));
    $("#hour3Pm").append(localStorage.getItem("3Pm"));
    $("#hour4Pm").append(localStorage.getItem("4Pm"));
    $("#hour5Pm").append(localStorage.getItem("5Pm"));
    });


    if(localStorage.getItem("9Am") !== null){
        time09Am.val(localStorage.getItem("9Am"));
    }
    if(localStorage.getItem("10Am") !== null){
        time10Am.val(localStorage.getItem("10Am"));
    }
    if(localStorage.getItem("11Am") !== null){
        time11Am.val(localStorage.getItem("11Am"));
    }
    if(localStorage.getItem("12Pm") !== null){
        time12Pm.val(localStorage.getItem("12Pm"));
    }
    if(localStorage.getItem("1Pm") !== null){
        time01Pm.val(localStorage.getItem("1Pm"));
    }
    if(localStorage.getItem("2Pm") !== null){
        time02Pm.val(localStorage.getItem("2Pm"));
    }
    if(localStorage.getItem("3Pm") !== null){
        time03Pm.val(localStorage.getItem("3Pm"));
    }
    if(localStorage.getItem("4Pm") !== null){
        time04Pm.val(localStorage.getItem("4Pm"));
    }
    if(localStorage.getItem("5Pm") !== null){
        time05Pm.val(localStorage.getItem("5Pm"));
    }
