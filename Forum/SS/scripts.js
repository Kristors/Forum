
const postButton = document.getElementById('post-button');
const postContent = document.getElementById('post-content');
const forumSection = document.getElementById('forum-section');


function createPost(content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.textContent = content;
    forumSection.appendChild(postDiv);
}


postButton.addEventListener('click', () => {
    const content = postContent.value.trim();
    if (content) {
        createPost(content);
        postContent.value = ''; 
    } else {
        alert('Please enter a message');
    }
});
