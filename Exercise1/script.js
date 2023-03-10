function ChangeName() {
    let yourName = prompt("What is your name?");
    console.log(yourName);

    document.getElementById("inputName").innerHTML = `Hello ${yourName}`;
}