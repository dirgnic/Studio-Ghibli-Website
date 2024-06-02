window.onload = function() {
    // Select all elements with the class name "movie"
    const movies = document.querySelectorAll('.movie');
    const characters = document.querySelectorAll('.character');

    // Add event listener for "mouseover" to each movie element
    movies.forEach(movie => {
        const image = movie.querySelector('img'); // Get the image element within the movie container
        // Increase the size of the image on hover with a zoom effect
        movie.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.2)';
            image.style.transition = 'transform 0.3s'; // Add a smooth transition effect
        });
    });

    // Add event listener for "mouseout" to reset the size of the image
    movies.forEach(movie => {
        const image = movie.querySelector('img'); // Get the image element within the movie container
        const id = movie.getAttribute('id'); // Get the id attribute of the movie container

        movie.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s';
        });

    });


        // Add event listener for "click" to reset the filters on second click
        characters.forEach(character => {
            const image = character.querySelector('img'); // Get the image element within the character container
            let isClicked = false; // Flag to track if the character has been clicked

            character.addEventListener('click', () => {
                if (isClicked) {
                    // Reset the filters
                    image.style.filter = 'none';
                    image.style.transition = 'filter 0.3s';
                } else {
                    // Apply the desired animation code for each character
                    if (character.id === 'chihiro') {
                        // Animation for Chihiro
                        image.style.filter = 'hue-rotate(20deg)';
                        image.style.transition = 'filter 0.3s';
                    } else if (character.id === 'seita') {
                        // Animation for Seita
                        image.style.filter = 'sepia(100%)';
                        image.style.transition = 'filter 0.3s';
                    } else if (character.id === 'kiki') {
                        // Animation for Kiki
                        image.style.filter = 'contrast(50%)';
                        image.style.transition = 'filter 0.3s';
                    } else if (character.id === 'totoro') {
                        // Animation for Totoro
                        image.style.filter = 'saturate(200%)';
                        image.style.transition = 'filter 0.3s';
                    }
                }

                isClicked = !isClicked; // Toggle the flag on each click
            });
        });


            setupModal();
            setupLoginForm();
            checkSession();
            fetchMovies();
       
    

  
};

function setupModal() {
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("loginForm");
    const span = document.getElementsByClassName("close")[0];

    loginBtn.onclick = function() {
        modal.style.display = "block";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function setupLoginForm() {
    document.getElementById("login").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/login", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    localStorage.setItem('username', username);
                    document.getElementById("loginForm").style.display = "none";
                    alert("Login successful!");
                    updateUIForLoggedInUser();
                } else {
                    alert("Login failed! Please check your credentials.");
                }
            }
        };
        xhr.send(JSON.stringify({ username: username, password: password }));
    });
}

function checkSession() {
    const username = localStorage.getItem('username');
    if (username) {
        updateUIForLoggedInUser();
    }

    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.onclick = function() {
        localStorage.removeItem('username');
        updateUIForLoggedOutUser();
        alert("Logged out successfully!");
    };
}

function updateUIForLoggedInUser() {
    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "block";
}

function updateUIForLoggedOutUser() {
    document.getElementById("loginBtn").style.display = "block";
    document.getElementById("logoutBtn").style.display = "none";
}

function fetchMovies() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "movies.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const movies = JSON.parse(xhr.responseText);
            const movieContainer = document.querySelector('.poster-container');
            movieContainer.innerHTML = ''; // Clear existing content

            movies.forEach(movie => {
                const movieDiv = document.createElement('div');
                movieDiv.className = 'movie';
                movieDiv.innerHTML = `
                    <img src="img/${movie.img}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                `;
                movieContainer.appendChild(movieDiv);
            });
        }
    };
    xhr.send();
}
