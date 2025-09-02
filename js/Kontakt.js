document.getElementById("Danke").style.display="none";
document.getElementById('Kontaktformular').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // Get form data
    var formData = new FormData(event.target);
    var name = formData.get('Name');
    var email = formData.get('Email');
    var message = formData.get('Mitteilung');
    //var betrag = formData.get('Betrag');

    // Construct the JSON object to be sent to Airtable
    var requestBody = JSON.stringify({
        Name: name,
        Email: email,
        Mitteilung: message
    });


    fetch("https://woow-thun.netlify.app/.netlify/functions/airtable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: requestBody
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("Kontaktformular").style.display="none";
        document.getElementById("Danke").style.display="block";
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Es gab ein Problem. Bitte schick eine Email an info@woow-thun.ch');
    });
});
