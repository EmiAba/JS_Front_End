function loadCommits() {
    // Get the username and repository from the input fields
    const username = document.getElementById("username").value;
    const repo = document.getElementById("repo").value;

    // Clear the previous contents
    const commitsList = document.getElementById("commits");
    commitsList.innerHTML = '';

    // Construct the GitHub API URL
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    // Fetch the commit data from GitHub
    fetch(url)
        .then(response => {
            if (!response.ok) {
                // If an error occurs, throw to pass to the catch block
                throw response;
            }
            return response.json();
        })
        .then(data => {
            // For each commit, add a list item with the author and message
            data.forEach(commit => {
                const listItem = document.createElement("li");
                listItem.textContent = `${commit.commit.author.name}: ${commit.commit.message}`;
                commitsList.appendChild(listItem);
            });
        })
        .catch(error => {
            // Handle errors by displaying a message
            error.json().then(body => {
                const listItem = document.createElement("li");
                listItem.textContent = `Error: ${error.status} (${body.message})`;
                commitsList.appendChild(listItem);
            });
        });
}