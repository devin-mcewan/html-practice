let name = "Devin";
let goal = "become a software engineer";

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
