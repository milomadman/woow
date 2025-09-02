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
        "fields": {
            "Name": name,
            "Email": email,
            "Mitteilung": message,

        }
    });

    // Send data to Airtable using fetch API
    fetch('https://api.airtable.com/v0/appX7zVHQpDRRHllk/Mitteilungen', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer patLHfZCfikvZOji7.8a8b9e3c9637eb60f0344f1d9688ccba343635c7f4c318455f705b9b1e88ab38',
            'Content-Type': 'application/json'
        },
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
        alert('Sorry, there was a problem with your submission. Please try again.');
    });
});