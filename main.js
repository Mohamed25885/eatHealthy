



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

function showImageModal(img){
    let image = img.className.split(" gallery ")[1]
    openImageModel(image)
}

function openDrawer(){
    var drawer = document.getElementsByClassName("drawerModal")[0]
    /*
    var style = window.getComputedStyle(drawer)
    var prop = style.getPropertyValue("display")*/
    if(drawer.style.display == "block"){
        drawer.style.display = "none"
    }
    else{
        drawer.style.display = "block"
    }
}
function openImageModel(img){
    var modal = document.getElementsByClassName("imageModalParent")[0]
    var imageModal = document.getElementsByClassName("imageModal")[0]
    /*
    var style = window.getComputedStyle(drawer)
    var prop = style.getPropertyValue("display")*/
    if(modal.style.display == "block"){
        modal.style.display = "none"
    }
    else{
        console.log(img == "two")
        if(img == "one"){
            imageModal.style.backgroundImage = "url(./Images/image.jpg)"
        }
        else if(img == "two"){
            imageModal.style.backgroundImage = "url(./Images/image4.jpg)"
        }
        else if(img == "three"){
            imageModal.style.backgroundImage = "url(./Images/image2.jpg)"
        }
        else{
            imageModal.style.backgroundImage = "url(./Images/image3.jpg)"

        }
        
        modal.style.display = "block"
    }
}

function getValue(id) {
    return document.getElementById(`${id}`).value
}


function homePageLoaded() {
    let temp = sessionStorage.getItem("currentClient")
    currentClient = new Client().fromJSON(JSON.parse(temp))
    let gender = currentClient.gender == "male" ? "Mr. "  : "Mrs. "
    document.getElementById("footerEmail").value = currentClient.email
}

function openDialog(){
    let drawer = document.getElementById("drawerDialog");
    if(drawer.open){
        drawer.open = false
    }
    else{
        drawer.open = true
    }
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
        alert("INVALID PASSWORD")
        return false
    }
}


function passwordValidator() {
    let pwd = String(getValue("password"))
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




