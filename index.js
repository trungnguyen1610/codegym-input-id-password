let username = prompt("pls enter your username here");

if (username == "Admin") {
    let password = prompt("pls enter your password here");
    if (password == "TheMaster") {
        document.write("Welcome");
    } else if (password == null) {
        alert('Canceled');
    } else {
        alert("Wrong password");
    }
} else if (username == null) {
    alert("Canceled");
} else {
    alert("Does not exist in our database");
}