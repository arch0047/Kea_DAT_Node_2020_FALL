const currentYear= new Date().getFullYear();

const footCopyright = document.getElementById("footer-copyright");

const copyrightElement = document.createTextNode("©" + currentYear);
const footer = document.getElementById();

const  fromMessage = document.getElementById("form- message").value;
console.log(fromMessage);

//document.getElementById("form- message").addEventListener("click")
function handelFormSubmitted() {
    const  fromMessage = document.getElementById("form- message").value;
    /* $.get("/form?message="+formMessage ,(response)=>{  // + * or & for adding all the other value with the message
        console.log(response);  });*/

    $.ajax({
        url:"/form",
        type:"POST",
        data:{fromMessage}
    }).done((response)=>{
        console.log()


    })




}

