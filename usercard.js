let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  let sarlavha = document.querySelector("#sarlavha").value;
  let matn = document.querySelector("#matn").value;
  let muallif = document.querySelector("#muallif").value;

  fetch("https://axv-blogs.up.railway.app/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: sarlavha,
      content: matn,
      author: muallif,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#sarlavha").value = "";
      document.querySelector("#matn").value = "";
      document.querySelector("#muallif").value = "";
    });
});
