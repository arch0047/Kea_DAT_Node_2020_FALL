// when clicking the button console.log"clicked"

/*
// these 2 are same thing
//(1)
 const reusableEventHandler =()=>{
    console.log("clicked");
};
//(2)
$('#teleport-btn').click(reusableEventHandler);
$('#teleport-btn2').click(reusableEventHandler);
*/
// other way
$('#teleport-btn').click(()=>{
  console.log("Clicked");

 // Changing left input to the right and right input to the left by click.
  const tempLeft= $(".input-left").val();

    $(".input-left").val($(".input-right").val())
    $(".input-right").val(tempLeft);
});
