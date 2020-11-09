

function validateForm() {

    // send the message and get it back
    const message = document.getElementById("form-message").value();
    const file =document.getElementById("form-file");
    const form = document.getElementById('form-upload');
    const formData = new FormData(form);



    fetch("/uploads", {
        method: "POST",
        headers: {
            // when setting the formData it will not work by setting the content-type
            "content type": "application/jason"
        },
        body: JSON.stringify({
            message,
            file

        })
    })
        .then(res => res.json())// returns a new then
        // .then (res => console.log(res));
        .then(result => {
            // when you get the response redirect to the download page
            window.location.href = `/download/${result.id}`;
        });
  }

    /*function handleFormSubmitted() {
        const formMessage = document.getElementById("form-message").value;
    /!*    $.ajax({
            url: "/form",
            type: "POST",
            data: { formMessage }
        }).done((response) => {
            console.log(response.data);
        });*!/
    }*/






