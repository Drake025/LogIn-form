function showRegistrationForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registrationForm").style.display = "block";
  }
  
  function showLoginForm() {
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  }
  
  function toggleGameDropdown() {
    var dropdown = document.getElementById("gameDropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  }
  
  // Close the dropdown menus if the user clicks outside of them
  window.onclick = function(event) {
    var dropdown = document.getElementById("myDropdown");
    if (!event.target.matches('.dropbtn')) {
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  
    var gameDropdown = document.getElementById("gameDropdown");
    if (!event.target.matches('.gamedrop')) {
      if (gameDropdown.style.display === "block") {
        gameDropdown.style.display = "none";
      }
    }
  };
  