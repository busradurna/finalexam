mouseTakipci();
var uyari;
uyariKontrol();
uyar();
var arkaplanim = 0;
setArkaplan();

function uyariKontrol(){
    if(localStorage.getItem("uyari")){
       uyari =  localStorage.getItem(uyari)
    }
    else{
        uyari = true
    }
}


function uyar(){
    if(uyari){
        alert("Sayfalar arasında geçiş yapmak için 1-4 arası sayı tuşlarını kullanabilirsiniz.")
        localStorage.setItem("uyari",false);
    }
}

function setArkaplan(){
    if(localStorage.getItem("arkaplan")){
        arkaplanim =  Number(localStorage.getItem("arkaplan"))
     }
     document.body.style.backgroundImage = "url(arkaplan" + ((arkaplanim%2) + 1) + ".jpg";
 }

function arkaplan(){
    arkaplanim += 1;
    document.body.style.backgroundImage = "url(arkaplan" + ((arkaplanim%2) + 1) + ".jpg";
    localStorage.setItem("arkaplan",arkaplanim);
}

function mouseTakipci(){
    var div = document.createElement("div");
    div.classList.add("mouse-takip");
    div.innerHTML = "BD";
    document.body.append(div);
}

document.addEventListener("mousemove", (e) => {
    document.getElementsByClassName("mouse-takip")[0].style.top = e.clientY + "px";
    document.getElementsByClassName("mouse-takip")[0].style.left = e.clientX + "px";
})

document.addEventListener("keydown",(e) => {
    switch (e.key) {
        case "1":
            window.location.href = "./index.html";
            break;
        case "2":
            window.location.href = "./hakkimda.html";
            break;
        case "3":
            window.location.href = "./works.html";
            break;
        case "4":
            window.location.href = "./iletisim.html";
            break;
    
        default:
            break;
    }
})
