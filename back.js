// fetch("https://axv-blogs.up.railway.app/health")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// fetch("https://axv-blogs.up.railway.app/api/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", () => {
//   fetch("https://axv-blogs.up.railway.app/api/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title: "post sorov",
//       content: "biz darsda post sorov yubordik",
//       author: "Jorabek",
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.querySelector("#title").value;
//   let content = document.querySelector("#content").value;
//   let author = document.querySelector("#author").value;

//   fetch("https://axv-blogs.up.railway.app/api/posts", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title,
//       content,
//       author,
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

// let btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   let title = document.querySelector("#title").value;
//   let content = document.querySelector("#content").value;
//   // let author = document.querySelector("#author").value;

//   fetch("https://axv-blogs.up.railway.app/api/posts/100", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       title,
//       content,
//       // author,
//     }),
//   })
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// });

let btn_get = document.querySelector(".btn_get");
let btn_put = document.querySelector(".btn_put");

btn_get.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title");
  let content = document.querySelector("#content");
  let author = document.querySelector("#author");

  fetch("https://axv-blogs.up.railway.app/api/posts/100", {
    method: "GET",
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      title.value = data.title;
      author.value = data.author;
      content.value = data.content;

      console.log(data);
    });
});

btn_put.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let content = document.querySelector("#content").value;
  // let author = document.querySelector("#author").value;

  fetch("https://axv-blogs.up.railway.app/api/posts/100", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      // author,
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
