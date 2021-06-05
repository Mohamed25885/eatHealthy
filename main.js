var currentClient

class Client {
    constructor(gender,fname, lname, email, phoneNumber) {
        this.gender = gender
        this.fname = fname
        this.lname = lname
        this.email = email
        this.phoneNumber = phoneNumber
    }
    fromJSON(json) {
        return new Client(json.gender,json.fname, json.lname, json.email, json.phoneNumber)
    }
}

function getValue(id) {
    return document.getElementById(`${id}`).value
}

function formSubmitted() {
    if (passwordValidator()) {
        let temp = new Client(getValue("gender"),getValue("fname"), getValue("lname"), getValue("email"), getValue("tel"))
        sessionStorage.setItem("currentClient", JSON.stringify(temp))
        window.location.remove = "index.html"
        window.location.replace("homePage.html")
        document.getElementById("registrationForm").reset();
        return true
    }
    else {
        alert("PASSWORD IS INVALID")
        return false
    }
}
function homePageLoaded() {
    let temp = sessionStorage.getItem("currentClient")
    console.log(temp)
    currentClient = new Client().fromJSON(JSON.parse(temp))
    let gender = currentClient.gender == "male" ? "Mr. "  : "Mrs. "
    document.getElementById("firstName").innerHTML =gender +  currentClient.fname
}


function passwordValidator() {
    let pwd = String(document.getElementById("password").value)
    if (pwd != null && pwd != "") {
        if (pwd[0].match("^[A-Z]{1}") && pwd.indexOf(" ") == -1) {
            pwd = pwd.slice(1)
            if (pwd.match("[*.!@$%^&(){}:;<>,./?~_+=|]{1}") && pwd.match("(?=.*[0-9])") && pwd.length == 7) {
                return true
            }
            else return false
        }
        else return false
    }
    else return false
}




