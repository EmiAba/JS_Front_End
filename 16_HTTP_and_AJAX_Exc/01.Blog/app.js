function attachEvents() {
  
    
}

attachEvents();

// function attachEvents() {
//     document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
//     document.getElementById('btnViewPost').addEventListener('click', displayPostDetails);
    
//     async function loadPosts() {
//         const postsResponse = await fetch('http://localhost:3030/jsonstore/blog/posts');
//         const postsData = await postsResponse.json();
    
//         const postsSelect = document.getElementById('posts');
//         postsSelect.innerHTML = ''; // Clear existing options
    
//         Object.keys(postsData).forEach(key => {
//             const optionElement = document.createElement('option');
//             optionElement.value = key;
//             optionElement.textContent = postsData[key].title;
//             postsSelect.appendChild(optionElement);
//         });
//     }
    
//     async function displayPostDetails() {
//         const selectedPostId = document.getElementById('posts').value;
//         const commentsResponse = await fetch('http://localhost:3030/jsonstore/blog/comments');
//         const commentsData = await commentsResponse.json();
    
//         const postResponse = await fetch(`http://localhost:3030/jsonstore/blog/posts/${selectedPostId}`);
//         const postData = await postResponse.json();
    
//         document.getElementById('post-title').textContent = postData.title;
//         document.getElementById('post-body').textContent = postData.body;
    
//         const postComments = document.getElementById('post-comments');
//         postComments.innerHTML = ''; // Clear existing comments
    
//         Object.values(commentsData).forEach(comment => {
//             if (comment.postId === selectedPostId) {
//                 const liElement = document.createElement('li');
//                 liElement.textContent = comment.text;
//                 postComments.appendChild(liElement);
//             }
//         });
//     }
    
// }

// attachEvents();