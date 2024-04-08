function attachEvents() {
  const postUrl='http://localhost:3030/jsonstore/blog/posts';
  const commentUrl='http://localhost:3030/jsonstore/blog/comments';
  
  const selectPostElement=document.getElementById('posts');
  const postBodyElement=document.getElementById('post-body');
  const postTitleElement=document.getElementById('post-title');
  const postCommentsElement=document.getElementById('post-comments');

  const loadPostsButton=document.getElementById('btnLoadPosts');
  const viewPostButton=document.getElementById('btnViewPost');

loadPostsButton.addEventListener('click',()=>{
    selectPostElement.innerHTML='';

    fetch(postUrl)
    .then(response=>response.json())
    .then(posts=> {
        Object.values(posts)
        .forEach(post=>{
                const optionElement=document.createElement('option');
                optionElement.value=post.id;
                optionElement.textContent=post.title;
                selectPostElement.appendChild(optionElement);

        });


        viewPostButton.addEventListener('click', async ()=>{
           // console.log(selectPostElement.value);
            const selectedPostId=selectPostElement.value;
            const postResponse=await fetch(`${postUrl}/${selectedPostId}`);
            const selectedPost= await postResponse.json();
         
           postBodyElement.textContent=selectedPost.body;
           postTitleElement.textContent=selectedPost.title;

//load comments
           const commentsResponse=await fetch(commentUrl);
           const comments= await commentsResponse.json();

           const commentsFragment=document.createDocumentFragment();
          // console.log(Object.values(comments));
          //postComments



          const liElements=Object.values(comments)
          .filter(comment=>comment.postId===selectedPostId)
          .forEach(comment=>{
            const liElement=document.createElement('li');
            liElement.id=comment.id;
            liElement.textContent=comment.text;


            commentsFragment.appendChild(liElement);
       


          })
         

       //console.log(liElements);
       postCommentsElement.innerHTML = ''; 
       postCommentsElement.appendChild(commentsFragment);
      





        })


    });
    //console.log(Object.values(posts))
  
});



}

attachEvents();

// function attachEvents() {
//     const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
//     const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'

//     let loadPostsButton = document.getElementById('btnLoadPosts')
//     loadPostsButton.addEventListener('click', loadPostsEvent)

//     let postsSelect = document.getElementById('posts')

//     let viewPostButton = document.getElementById('btnViewPost')
//     viewPostButton.addEventListener('click', viewPostEvent)

//     allPosts = {}

//     async function loadPostsEvent(event) {
//         postsSelect.innerHTML = ''
//         let allPostsResponse = await fetch(postsURL)
//         allPosts = await allPostsResponse.json()
        
//         for (let postArr of Object.entries(allPosts)) {
//             let option = document.createElement('option')
//             option.textContent = postArr[1].title
//             option.value = postArr[0]
//             postsSelect.appendChild(option)
//         }
//     }

//     async function viewPostEvent(event) {
//         let currentPostObject = document.getElementById('posts')
//         let currentPostComments = []

//         let allCommentsResponse = await fetch(commentsURL)
//         let allComments = await allCommentsResponse.json()
        
//         for (let commentArr of Object.entries(allComments)) {
//             if (commentArr[1].postId === currentPostObject.value) {
//                 currentPostComments.push(commentArr[1].text)
//             }
//         }

//         let chosenPost = allPosts[currentPostObject.value]
    
//         let titleElement = document.getElementById('post-title')
//         titleElement.textContent = chosenPost.title

//         let postContentElement = document.getElementById('post-body')
//         postContentElement.textContent = chosenPost.body

//         let ul = document.getElementById('post-comments')
//         ul.innerHTML = ''
//         for (let comment of currentPostComments) {
//             let li = document.createElement('li')
//             li.textContent = comment
//             ul.appendChild(li)
//         }
//     }
// }

// attachEvents();