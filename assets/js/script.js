// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //The variables below are set up to access the text in the respective textareas of each hour
  var b18 = $(".18A")
  var b17 = $(".17A")
  var b16 = $(".16A")
  var b15 = $(".15A")
  var b14 = $(".14A")
  var b13 = $(".13A")
  var b12 = $(".12A")
  var b11 = $(".11A")
  var b10 = $(".10A")
  var b9 = $(".9A")
  var b8 = $(".8A")

  var timeInterval = setInterval(function () {
      displayTime();}, 1000);
  

//these are the sets of functions that save the data when the 
//buttons are pushed.
  function set8(){
    var apt8 = { am8: $(".8AMT").val(), }
    localStorage.setItem("apt8", JSON.stringify(apt8))||"";
  }
  function set9(){
    var apt9 = {am9: $(".9AMT").val(),}
    localStorage.setItem("apt9", JSON.stringify(apt9))||"";
  }
  function set10(){
    var apt10 = {am10: $(".10AMT").val(),}
    localStorage.setItem("apt10", JSON.stringify(apt10))||"";
  }
  function set11(){
  var apt11 = {am11: $(".11AMT").val(),}
    localStorage.setItem("apt11", JSON.stringify(apt11))||"";
  }
  function set12(){
    var apt12 = {am12: $(".12AMT").val(),}
    console.log(apt12)
    localStorage.setItem("apt12", JSON.stringify(apt12))||"";
  }
  function set13(){
    var apt13 = {am13: $(".13AMT").val(),}
    localStorage.setItem("apt13", JSON.stringify(apt13))||"";
  }
  function set14(){
    var apt14 = {am14: $(".14AMT").val(),}
    localStorage.setItem("apt14", JSON.stringify(apt14))||"";
  }
  function set15(){
    var apt15 = {am15: $(".15AMT").val(),}
    localStorage.setItem("apt15", JSON.stringify(apt15))||"";
  }
  function set16(){
    var apt16 = {am16: $(".16AMT").val(),}
    localStorage.setItem("apt16", JSON.stringify(apt16))||"";
  }
  function set17(){
    var apt17 = {am17: $(".17AMT").val(),}
    localStorage.setItem("apt17", JSON.stringify(apt17))||"";
  }
  function set18(){
    var apt18 = {am18: $(".18AMT").val(),}
    localStorage.setItem("apt18", JSON.stringify(apt18))||"";
  }
//these are the other functions fired by the buttons
function stopDefault(e){
e.preventDefault();
}
function markSaved(){
  var saveText = $("#saved")
 saveText.text("Saved to local storage")
 $('body').css("background-color","pink")
 var timeInterval = setInterval(function () {
  saveText.text("");
$('body').css("background-color","white")
}, 5000);
}


  //This draws the data from localstorage on first use so each
//refrest starts with the past data 
var apt8 = JSON.parse(localStorage.getItem("apt8"));
console.log(apt8)
$(".8AMT").val(apt8.am8);
var apt9 = JSON.parse(localStorage.getItem("apt9"));
console.log(apt9)
$(".9AMT").val(apt9.am9);
var apt10 = JSON.parse(localStorage.getItem("apt10"));
console.log(apt10)
$(".10AMT").val(apt10.am10);
var apt11 = JSON.parse(localStorage.getItem("apt11"));
console.log(apt11)
$(".11AMT").val(apt11.am11);
var apt12 = JSON.parse(localStorage.getItem("apt12"));
console.log(apt12)
$(".12AMT").val(apt12.am12);
var apt13 = JSON.parse(localStorage.getItem("apt13"));
console.log(apt13)
$(".13AMT").val(apt13.am13);
var apt14 = JSON.parse(localStorage.getItem("apt14"));
console.log(apt14)
$(".14AMT").val(apt14.am14);
var apt15 = JSON.parse(localStorage.getItem("apt15"));
console.log(apt15)
$(".15AMT").val(apt15.am15);
var apt16 = JSON.parse(localStorage.getItem("apt16"));
console.log(apt16)
$(".16AMT").val(apt16.am16);
var apt17 = JSON.parse(localStorage.getItem("apt17"));
console.log(apt17)
$(".18AMT").val(apt17.am17);
var apt18 = JSON.parse(localStorage.getItem("apt18"));
console.log(apt18.am18)
$(".18AMT").val(apt18.am18);
  //This function displays the day and time and sets up the colors
  //of the textareas as the day passes
  function displayTime() {
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, hh:mm:ss A'));
  var now = dayjs().format('H')
   if (now>=8){
    $("#hour-8").removeClass('future');
    $("#hour-8").addClass('present');
   }
   if (now>=9){
    $("#hour-9").removeClass('future');
    $("#hour-9").addClass('present');
    $("#hour-8").removeClass('present');
    $("#hour-8").addClass('past');
   }
   if (now>=10){
    $("#hour-10").removeClass('future');
    $("#hour-10").addClass('present');
    $("#hour-9").removeClass('present');
    $("#hour-9").addClass('past');
   }
   if (now>=11){
    $("#hour-11").removeClass('future');
    $("#hour-11").addClass('present');
    $("#hour-10").removeClass('present');
    $("#hour-10").addClass('past');
   }
   if (now>=12){
    $("#hour-12").removeClass('future');
    $("#hour-12").addClass('present');
    $("#hour-11").removeClass('present');
    $("#hour-11").addClass('past');
   }
   if (now>=13){
    $("#hour-13").removeClass('future');
    $("#hour-13").addClass('present');
    $("#hour-12").removeClass('present');
    $("#hour-12").addClass('past');
   }
   if (now>=14){
    $("#hour-14").removeClass('future');
    $("#hour-14").addClass('present');
    $("#hour-13").removeClass('present');
    $("#hour-13").addClass('past');
   }
   if (now>=15){
    $("#hour-15").removeClass('future');
    $("#hour-15").addClass('present');
    $("#hour-14").removeClass('present');
    $("#hour-14").addClass('past');
   }
   if (now>=16){
    $("#hour-16").removeClass('future');
    $("#hour-16").addClass('present');
    $("#hour-15").removeClass('present');
    $("#hour-15").addClass('past');
   }
   if (now>=17){
    $("#hour-17").removeClass('future');
    $("#hour-17").addClass('present');
    $("#hour-16").removeClass('present');
    $("#hour-16").addClass('past');
   }
   if (now>=18){
    $("#hour-18").removeClass('future');
    $("#hour-18").addClass('present');
    $("#hour-17").removeClass('present');
    $("#hour-17").addClass('past');
   }
   if (now>=19){
    $("#hour-18").removeClass('present');
    $("#hour-18").addClass('past');
   }
  }


   displayTime()
  setInterval(displayTime, 1000);
var apt8 = JSON.parse(localStorage.getItem("apt8"));
console.log(apt8)
$(".8AMT").val(apt8.am8);
var apt9 = JSON.parse(localStorage.getItem("apt9"));
console.log(apt9)
$(".9AMT").val(apt9.am9);
var apt10 = JSON.parse(localStorage.getItem("apt10"));
console.log(apt10)
$(".10AMT").val(apt10.am10);
var apt11 = JSON.parse(localStorage.getItem("apt11"));
console.log(apt11)
$(".11AMT").val(apt11.am11);
var apt12 = JSON.parse(localStorage.getItem("apt12"));
console.log(apt12)
$(".12AMT").val(apt12.am12);
var apt13 = JSON.parse(localStorage.getItem("apt13"));
console.log(apt13)
$(".13AMT").val(apt13.am13);
var apt14 = JSON.parse(localStorage.getItem("apt14"));
console.log(apt14)
$(".14AMT").val(apt14.am14);
var apt15 = JSON.parse(localStorage.getItem("apt15"));
console.log(apt15)
$(".15AMT").val(apt15.am15);
var apt16 = JSON.parse(localStorage.getItem("apt16"));
console.log(apt16)
$(".16AMT").val(apt16.am16);
var apt17 = JSON.parse(localStorage.getItem("apt17"));
console.log(apt17)
$(".17AMT").val(apt17.am17);
var apt18 = JSON.parse(localStorage.getItem("apt18"));
console.log(apt18.am18)
$(".18AMT").val(apt18.am18);
//these are the EventListeners that target the functions above 
//to save the data in the textarea where the button is pushed

b9[0].addEventListener("click", function(e){
  stopDefault(e);
  set8();
  markSaved();
 }) 

 b8[0].addEventListener("click", function(e){
  stopDefault(e);
  set8();
  markSaved();
 }) 
 b10[0].addEventListener("click",function(e){
  stopDefault(e);
  set10();
  markSaved();
 }
 ) 
 b11[0].addEventListener("click",function(e){
  stopDefault(e);
  set11();
  markSaved();
 }
 ) 
 b12[0].addEventListener("click",function(e){
  stopDefault(e);
  set12();
  markSaved();
 }
 ) 
 b13[0].addEventListener("click",function(e){
  stopDefault(e);
  set13();
  markSaved();
 }
 ) 
 b14[0].addEventListener("click",function(e){
  stopDefault(e);
  set14();
  markSaved();
 }
 ) 
 b15[0].addEventListener("click",function(e){
  stopDefault(e);
  set15();
  markSaved();
 }
 ) 
 b16[0].addEventListener("click",function(e){
  stopDefault(e);
  set16();
  markSaved();
 }
 ) 
 b17[0].addEventListener("click",function(e){
  stopDefault(e);
  set17();
  markSaved();
 }
 ) 
 b18[0].addEventListener("click",function(e){
  stopDefault(e);
  set18();
  markSaved();
 }
 ) 


// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


