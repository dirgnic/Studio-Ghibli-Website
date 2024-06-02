function openWidget() {
    // Open a new window
    var widgetWindow = window.open("", "Widget", "width=600,height=500");

    // Write the HTML content for the menu
    var widgetContent = `
        <html>
        <head>
            <link rel="stylesheet" href="history.css">
        </head>
        <body id="widget-body">
            <h1>Find out more ^_^</h1>
            <form class="widget-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" min="0" max="120" required>
                
                <label for="urgency">Urgency (1-10):</label>
                <input type="range" id="urgency" name="urgency" min="1" max="10" required>
                
                <label>Gender:</label>
                <div class="gender-container">
                    <input type="radio" id="male" name="gender" value="male" required>
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" required>
                    <label for="female">Female</label>
                </div>
                
                <div class="newsletter>
                    <label for="newsletter">Subscribe to newsletter:</label>
                    <input type="checkbox" id="newsletter" name="newsletter">
                </div>
                
                <label for="question">Enter your question:</label>
                <input type="text" id="question" name="question" required>
                
                <button type="submit">Submit</button>
                <div id="result"></div>
            </form>
        </body>
        </html>
    `;

    // Write the HTML content to the new window's document
    widgetWindow.document.write(widgetContent);
    widgetWindow.document.close();  // Close the document to ensure all content is loaded
    
    // Wait for the new window to load its content
    widgetWindow.onload = function() {
        // Find the widget form in the new window
        var widgetForm = widgetWindow.document.querySelector(".widget-form");

        // Add an event listener to the form submit event
        widgetForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get the user input
            var name = widgetForm.querySelector("#name").value;
            var age = widgetForm.querySelector("#age").value;
            var urgency = widgetForm.querySelector("#urgency").value;
            var gender = widgetForm.querySelector('input[name="gender"]:checked').value;
            var newsletter = widgetForm.querySelector("#newsletter").checked;
            var question = widgetForm.querySelector("#question").value;

            // Validate user input using regular expressions
            var nameRegex = /^[a-zA-Z\s]+$/;
            var ageRegex = /^[0-9]{1,3}$/;
            var questionRegex = /^.{1,255}$/;

            if (!nameRegex.test(name)) {
                alert("Please enter a valid name.");
                return;
            }

            if (!ageRegex.test(age)) {
                alert("Please enter a valid age.");
                return;
            }

            if (!questionRegex.test(question)) {
                alert("Question must be between 1 and 255 characters.");
                return;
            }

            // Save the user input to local storage
            var userInput = { name, age, urgency, gender, newsletter, question };
            localStorage.setItem("userInput", JSON.stringify(userInput));

            // Update the text of an element with the user input
            var resultElement = widgetWindow.document.getElementById("result");
            resultElement.innerHTML = `Hello, ${name}! Thank you for your question!`;

            // Redirect back to the history page after a delay
            setTimeout(() => {
                widgetWindow.close();
           //     window.location.href = "history.html";
            }, 3000);
        });
    };

        // Remove the timeline when the widget window is closed
        widgetWindow.onbeforeunload = function() {
            // Retrieve user input from local storage
            var userInput = JSON.parse(localStorage.getItem("userInput"));
            if (userInput) {
                // Remove the timeline element
                var timeline = document.querySelector(".timeline");
                if (timeline) {
                    timeline.remove();
                }

                // Create a table element
                var table = document.createElement("table");
    
                // Create the table header row
                var headerRow = document.createElement("tr");
    
                // Create the table header cells
                var filmHeader = document.createElement("th");
                filmHeader.textContent = "Film";
                headerRow.appendChild(filmHeader);
    
                var locationHeader = document.createElement("th");
                locationHeader.textContent = "Location";
                headerRow.appendChild(locationHeader);
    
                // Append the header row to the table
                table.appendChild(headerRow);
    
                // Create the table body
                var body = document.createElement("tbody");
    
                // Create an array of objects representing the films and their locations
                var films = [
                    { film: "Spirited Away", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "My Neighbor Totoro", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Princess Mononoke", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Howl's Moving Castle", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Ponyo", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "The Wind Rises", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Kiki's Delivery Service", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Castle in the Sky", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "Porco Rosso", location: "Studio Ghibli Museum, Tokyo" },
                    { film: "The Tale of the Princess Kaguya", location: "Studio Ghibli Museum, Tokyo" }
                ];
    
          
            // Iterate over the films array and create table rows
            films.forEach(function(film) {
                var row = document.createElement("tr");

                // Create table cells for the film and location
                var filmCell = document.createElement("td");
                filmCell.textContent = film.film;
                filmCell.style.textAlign = "center"; // Center the text
                filmCell.style.wordWrap = "break-word"; // Wrap text around lines
                row.appendChild(filmCell);

                var locationCell = document.createElement("td");
                locationCell.textContent = film.location;
                locationCell.style.textAlign = "center"; // Center the text
                locationCell.style.wordWrap = "break-word"; // Wrap text around lines
                row.appendChild(locationCell);

                // Append the row to the table body
                body.appendChild(row);
            });
    
                // Append the table body to the table
                table.appendChild(body);
    
                // Append the table to the history section
                var historySection = document.getElementById("history");
                historySection.appendChild(table);

        

                // Display the user message
                var historySection = document.getElementById("history");
                var userResponse = document.createElement("div");
                userResponse.classList.add("user-response");
                userResponse.innerHTML = `Hello, ${userInput.name}! Thank you for your question! ^_^`;

                // Center the new div element
                userResponse.style.display = "flex";
                userResponse.style.justifyContent = "center";
                userResponse.style.alignItems = "center";

                // Customize the display using various properties and methods
                var randomColor = Math.floor(Math.random() * 16777215).toString(16);
                userResponse.style.color = "#" + randomColor;
                userResponse.style.fontSize = "20px";
                userResponse.style.padding = "10px";
                userResponse.style.marginTop = "10px";

                // Append the response to the history section
                historySection.appendChild(userResponse);

                // Remove user input from local storage after processing
                localStorage.removeItem("userInput");


            }
        };
    
}

function loadFind() {
    // Code to execute after 5 seconds
    // Find the "find-out-more" section in the widget window
    var findOutMoreSection = document.getElementById("find-out-more");

    // Apply fade in effect to the section
    findOutMoreSection.style.opacity = "0";
    var fadeInInterval = setInterval(function() {
        findOutMoreSection.style.opacity = parseFloat(findOutMoreSection.style.opacity) + 0.1;
        if (parseFloat(findOutMoreSection.style.opacity) >= 1) {
            clearInterval(fadeInInterval);
        }
    }, 500);

    // Make the section visible
    findOutMoreSection.style.display = "block";
}

window.onload = function() {
    loadFind();
    openWidget();
    
      
    
};
