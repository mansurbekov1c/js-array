let postlar = document.querySelector("#postlar");
let btn_get = document.querySelector(".btn_get");

btn_get.addEventListener("click", (e) => {
  e.preventDefault();
  getPosts();
});

function getPosts() {
  fetch("https://axv-blogs.up.railway.app/api/posts")
    .then((res) => res.json())
    .then((data) => {
      postlar.innerHTML = "";

      data.forEach((post) => {
        createPost(post);
      });
    });
}

function createPost(post) {
  let title = document.createElement("h3");
  let content = document.createElement("p");
  let author = document.createElement("h4");
  let hr = document.createElement("hr");
  let del_btn = document.createElement("button");

  det_btn.addEventListener("click", (e) => {
    e.preventDefault();
    deletePost(post.id);
  });

  title.textContent = post.title;
  content.textContent = post.content;
  author.textContent = post.author;
  del_btn.textContent = "Delete";

  postlar.appendChild(title);
  postlar.appendChild(content);
  postlar.appendChild(author);
  postlar.appendChild(del_btn);
  postlar.appendChild(hr);
}

function deletePost(id) {
  fetch(`https://axv-blogs.up.railway.app/api/posts/${id}`, {
    method: "DELETE",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      getPosts();
    });
}
