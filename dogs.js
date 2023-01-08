//GET ALL
const myBtn = document.querySelector(".myBtn");
const resultContainer = document.getElementById("result-container");

//POST FORM
const postForm = document.getElementById("postForm");
// const newUser = document.getElementById("newUser");

//PUT FORM
const putForm = document.getElementById("putForm");
// const changedDog = document.getElementById("changedDog");

//DELETE FORM
const deleteForm = document.getElementById("deleteForm");

//GET ONE SPECIAL
const specialForm = document.getElementById("specialForm");

//GET ALL
function loadPractice() {
  fetch("http://localhost:3100/dogs")
    .then((res) => {
      return res.json();
    })
    .then(function (ovningar) {
      ovningar.forEach((ovning) => {
        const div = document.createElement("div");
        div.innerHTML = ovning.dogName + " " + "har tassat in...";
        resultContainer.appendChild(div);
      });
    });
}

myBtn.addEventListener("click", function () {
  resultContainer.innerHTML = "";
  loadPractice();
});

//POST
postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("nameOfTheDog").value;
  var breed = document.getElementById("breed").value;
  var owner = document.getElementById("owner").value;
  var email = document.getElementById("epost").value;
  var id = document.getElementById("id").value;

  fetch("http://localhost:3100/dogs/dogsname", {
    method: "POST",
    body: JSON.stringify({
      dogName: name,
      breed: breed,
      owner: owner,
      email: email,
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      titel = document.getElementById("newUser");
      titel.innerHTML = data.dogName + " " + "har tassat in...";
    })
    .catch((error) => console.error("Error:", error));
});

//PUT
putForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("updateNameOfTheDog").value;
  var breed = document.getElementById("updateBreed").value;
  var owner = document.getElementById("updateOwner").value;
  var email = document.getElementById("updateEpost").value;
  var id = document.getElementById("updateId").value;

  fetch("http://localhost:3100/dogs/id", {
    method: "PUT",
    body: JSON.stringify({
      dogName: name,
      breed: breed,
      owner: owner,
      email: email,
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      title = document.getElementById("changedDog");
      title.innerHTML = data.dogName + " " + "har tassat in...";
    })
    .catch((error) => console.error("Error:", error));
});

//DELETE
deleteForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var id = document.getElementById("deleteId").value;

  fetch("http://localhost:3100/dogs/id", {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const title = document.getElementById("changedDog");
      title.innerHTML = data.dogName + " " + "har tassat in...";
    })
    .catch((error) => console.error("Error:", error));
});

//GET ONE
