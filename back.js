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

let btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let content = document.querySelector("#content").value;
  let author = document.querySelector("#author").value;

  fetch("https://axv-blogs.up.railway.app/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      author,
    }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
