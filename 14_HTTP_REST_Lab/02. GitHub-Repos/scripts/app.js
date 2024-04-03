function loadRepos() {
   fetch("https://api.github.com/users/testnakov/repos")
   .then(response => response.text()) // Transform the data into text
   .then(data => {
       // Find the div with id "res" and replace its content with the fetched data
       document.getElementById("res").textContent = data;
   })
   .catch(error => console.error('Error fetching data:', error));
}