const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");
const btn = document.getElementById("btn");

let nameFirst, nameLast, mail, mdp;

const errorDisplay = (tag, valid) => {
  const container = document.querySelector("." + tag + "-container > input");
  const span = document.querySelector("." + tag + "-container > span");
  const img = document.querySelector("." + tag + "-container > img");

  if (!valid) {
    container.classList.add("error");
    span.classList.add("error");
    img.classList.add("error");
  } else {
    container.classList.remove("error");
    span.classList.remove("error");
    img.classList.remove("error");
  }
};

const firstNameChecker = (value) => {
  if (value.length == 0) {
    errorDisplay("first");
    nameFirst = null;
  } else {
    errorDisplay("first", true);
    nameFirst = value;
  }
};
const lastNameChecker = (value) => {
  if (value.length == 0) {
    errorDisplay("last");
    nameLast = null;
  } else {
    errorDisplay("last", true);
    nameLast = value;
  }
};
const emailChecker = (value) => {
  if (value.length == 0) {
    errorDisplay("email");
    spanEmail.textContent = "Email Address cannot be empty";
    mail = null;
  } else if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay("email");
    spanEmail.textContent = "Looks like this is not an email";
    mail = null;
  } else {
    errorDisplay("email", true);
    mail = value;
  }
};
const passwordChecker = (value) => {
  if (value.length == 0) {
    errorDisplay("password");
    mdp = null;
  } else {
    errorDisplay("password", true);
    mdp = value;
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstNameChecker(e.target.value);
        break;
      case "lastName":
        lastNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameFirst && nameLast && mail && mdp) {
    const data = {
      nameFirst,
      nameLast,
      mail,
      mdp,
    };

    console.log(data);

    inputs.forEach((input) => {
      input.value = "";
    });

    nameFirst = null;
    nameLast = null;
    mail = null;
    mdp = null;
  } else {
    alert("Please fill in all fields correctly");
  }
});
