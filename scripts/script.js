let name = "Devin";
let goal = "become a software engineer";
let cars = [
  "2016 Subaru Impreza Base",
  "2015 Scion FRS Base",
  "1993 Mazda Miata LE",
];

function introduce() {
  console.log(`Hello, my name is ${name} and my goal is to ${goal}.`);
}
introduce();

function introduceWithHobby(hobby) {
  console.log(
    `Hello, my name is ${name}, my goal is to ${goal}, and I enjoy ${hobby}.`,
  );
}

introduceWithHobby("racing cars");

function phaseClick(id) {
  let button = document.getElementById(id);
  if (id === "phase1") {
    button.textContent = "Learn HTML and CSS";
  } else if (id === "phase2") {
    button.textContent = "Learn JavaScript";
  } else if (id === "phase3") {
    button.textContent = "Build Projects in React";
  } else if (id === "phase4") {
    button.textContent = "Build Full Stack portfolio projects";
  } else if (id === "reset") {
    document.getElementById("phase1").textContent = "Phase 1";
    document.getElementById("phase2").textContent = "Phase 2";
    document.getElementById("phase3").textContent = "Phase 3";
    document.getElementById("phase4").textContent = "Phase 4";
  }
}

function login(id) {
  let loggedIn = false;
  if (loggedIn === false) {
    if (document.getElementById("name").value === "") {
      alert("Please enter your name to log in.");
      loggedIn = false;
      return;
    } else {
      let username = document.getElementById("name").value;
      document.getElementById(id).textContent = `Welcome, ${username}!`;
      loggedIn = true;
    }
  }
  if (loggedIn === true) {
    document.getElementById("name").value = "";
    document.getElementById("login-button").disabled = true;
    document.getElementById("name").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "hidden";
  }
}

function handleGarageClick() {
  let garage = document.getElementById("garage");
  if (garage.textContent === "Open The Garage") {
    garage.textContent = "Close The Garage";
    for (let i = 0; i < cars.length; i++) {
      let container = document.getElementById("car-list");
      let item = document.createElement("li");
      item.textContent = cars[i];
      container.appendChild(item);
    }
  } else if (garage.textContent === "Close The Garage") {
    garage.textContent = "Open The Garage";
    let container = document.getElementById("car-list");
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}
