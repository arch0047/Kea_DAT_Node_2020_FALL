// exercise 1

$("body").attr("style","text-align:center"); // attr = attribute
// other way
//$("body").css("text-align","center");

//$("body").attr("style","font style:bold");


// exercise 2
$("#title h2").text("New Title");

// exercise 3
$(".subtitle-box").css("background-color","lightgreen");

// exercise 4
$(".temp").css("visibility","hidden");
//$(".temp").css("opacity","0%");
//$(".temp").css("display","none");
 //$(".temp").hide();

// exercise 5
$(".reason" ).css("border-style", "dashed");

// exercise 6
$("#first-list li").css("font-weight","bold ");

// exercise 7
$("#first-list").children().last().css("text-decoration","underline"); // children() gives an array of kids list(sub list)
//$("#first-list li:nth-child(3)").css("text-decoration","underline"); // index from 1 starts
//$("#first-list li:last").css("text-decoration","underline");
//$("#first-list li:eq(2)").css("text-decoration","underline"); // index from 0 starts

// exercise 8

$("#first-list li:nth-child(2)").css("text-decoration", "line-through");

// exercise 9

// this way gives <ul> tag styling so all the elements inside inherit the same styling
// $("#list").css("font-style", "italic");

// this makes only the elements italic not the <ul> tag
$(".second-list").css("font-style", "italic");

// exercise 10
$("span").css("font-size","0.5em");

// exercise 11

$(".unused-box label").remove();

// exercise 12

$(".unused-box").append("<p>Second Sentence</p>");

// exercise 13
// $(".unused-box").after("<p>First Sentence</p>");

$(".unused-box").append("<p>Second Sentence</p>");// does it after the element not within it as a child

$(".unused-box").prepend("<p>first Sentence</p>");

// exercise 14
//$(".unused-box").removeClass("unused-box").addClass("used-box");
$(".unused-box").attr("class","used-box");

// exercise 15

// $(".used-box").click(() =>{});
// other way
$(".used-box").on("click",()=>{
    $(this).toggleClass("used-boxed-clicked");
});

// other way
$(".used-box").on("click",(event)=>{
    $(event.currentTarget).toggleClass("used-boxed-clicked");
});


// exercise

$(".used-box").on("click",(event)=>{
    console.log($)
    $(event.currentTarget).toggleClass("used-boxed-clicked");
});

// exercise 16
$("#button-group").on("hover",(event)=>{
    $(event.currentTarget).append("class: tooltip");

});

// exercise 17

