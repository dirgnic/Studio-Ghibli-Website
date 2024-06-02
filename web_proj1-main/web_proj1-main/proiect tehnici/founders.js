// founders.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the grid items
    var gridItems = document.querySelectorAll(".grid-item");

    // Add event listeners to each grid item
    gridItems.forEach(function(item) {
        item.addEventListener("mouseover", function(event) {
            // Stop event propagation to prevent conflicts with other elements
            event.stopPropagation();

            // Toggle the 'hover' class on the target grid item
            event.target.classList.toggle("hover");

            // Get the computed style of the target grid item
            var computedStyle = getComputedStyle(event.target);

            // Change the color of the hovered item's text
            event.target.style.color = computedStyle.color === "rgb(255, 0, 0)" ? "blue" : "green";
        });

        item.addEventListener("mouseout", function(event) {
            // Stop event propagation to prevent conflicts with other elements
            event.stopPropagation();

            // Toggle the 'hover' class on the target grid item
            event.target.classList.toggle("hover");

            // Restore the original color of the text
            event.target.style.color = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to update the clock
    function updateClock() {
        // Get the current time in Japan
        var japanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });

        // Extract hours, minutes, and seconds from the Japan time
        var timeComponents = japanTime.split(", ")[1].split(":");
        var hours = timeComponents[0];
        var minutes = timeComponents[1];
        var seconds = timeComponents[2].split(" ")[0];

        // Format the time components
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Update the clock display
        clock.textContent = hours + ":" + minutes + ":" + seconds;
    }

    // Get the clock element
    // Get the clock element
    var clock = document.getElementById("clock");

    // Apply styles to the clock element
    clock.style.borderRadius = "10px"; // Set the border radius to create rounded corners
    clock.style.backgroundColor = "black";
    clock.style.color = "white";
    clock.style.fontSize = "40px";
    clock.style.marginTop = "50px";
    // Update the clock initially
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
});
