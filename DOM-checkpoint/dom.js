var favs=Array.from(document.querySelectorAll(".fa-heart"))
var delet=Array.from(document.querySelectorAll(".fa-trash-can"))
var plus=Array.from(document.querySelectorAll(".fa-cart-plus"))
var min=Array.from(document.querySelectorAll(".fa-minus"))
var cards=Array.from(document.querySelectorAll(".card"))


var dollar=document.querySelector(".fa-magnifying-glass-dollar")
for(let fav of favs){
    fav.addEventListener("click",function(){
        if(fav.style.color!="red"){
            fav.style.color="red"
        }
        else{
            fav.style.color="black"
        }
    })
}
for(let i in delet){
    delet[i].addEventListener("click",function(){
        cards[i].remove()
    })
}
var t=0
for (let p of plus){
    p.addEventListener("click",function(){
        p.nextElementSibling.innerHTML++;
        t++;
    })
}
for (let x of min){
    x.addEventListener("click",function(){
        if(x.previousElementSibling.innerHTML>0){
            x.previousElementSibling.innerHTML--}
    })
}
function total(){
    let prix=Array.from(document.querySelectorAll(".prix"))
    let qte=Array.from(document.querySelectorAll(".qte"))
    let t=0
    for(let i in qte){
        t+=qte[i]*prix[i].innerHTML
    }
    document.getElementsByClassName("sum").innerHTML=t
}





