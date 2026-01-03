// Display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

// Fetch posts
async function fetchPosts() {
  const response = await window.fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts);
}

fetchPosts();
