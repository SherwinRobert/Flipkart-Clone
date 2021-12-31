
for (i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", clicker);
}

function clicker(){
    console.log(this)
    console.log(this.classList)
    var btn = this.getAttribute("id")
    
    trigger(btn);
}

function trigger(button){
    switch(button){
        case "1":
            document.querySelector(".slider").classList.add("translator-back1");
            document.querySelector(".slider").classList.remove("translator1");
            break;
        case "2":
            document.querySelector(".slider").classList.add("translator1");
            document.querySelector(".slider").classList.remove("translator-back1");
            break;
        case "4":
            document.querySelector(".slider1").classList.add("translator-back");
            document.querySelector(".slider1").classList.remove("translator");
            break;
        case "3":
            document.querySelector(".slider1").classList.add("translator");
            document.querySelector(".slider1").classList.remove("translator-back");
            break;
    }

}