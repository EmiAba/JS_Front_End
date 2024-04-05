function loadRepos() {
	// Obtain the username from the input field
    const username = document.getElementById("username").value;

    // Clear the current contents of the list
    const reposList = document.getElementById("repos");
    reposList.innerHTML = '';

    // Construct the GitHub API URL for the user's repositories
    const url = `https://api.github.com/users/${username}/repos`;

    // Execute the Fetch API request to load the user's GitHub repositories
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // If an error occurs (like 404), throw to catch block
                throw new Error('Not Found');
            }
            return response.json();
        })
        .then(data => {
            // Process each repository and append it to the list
            data.forEach(repo => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = repo.html_url;
                link.textContent = repo.full_name;
                listItem.appendChild(link);
                reposList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Handle errors by appending an appropriate message to the list
            const listItem = document.createElement("li");
            listItem.textContent = 'Error: ' + error.message; // 'Not Found' for 404 errors
            reposList.appendChild(listItem);
        });
}