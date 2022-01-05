const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){{
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText

        addcart(productPrice,productImg,productName)
    }})
})
function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length; i++) {
        var productT =document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
            alert("San pham da co trong gio hang")
            return
        }
    }
    var trcontent = '<tr><td style="display:flex; align-items:center"><img style="width:70px" src="'+productImg+'" alt=""><span class="title">'+ productName +'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>d</sup></p></td><td><input style = "width:30px; outline:none; "type="number" value="1" min="0"></td><td style="cursor: pointer;"><soan class="cart-delete">Delete</soan></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")

    cartTable.append(addtr)

    carttotal()
    deleteCart()
    
}

// totalprice------------------------------------------------------//

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for (var i=0; i<cartItem.length; i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA = inputValue*productPrice
        // totalB= total.toLocaleString('de-DE')
        totalC = totalC + totalA
        totalD = totalC.toLocaleString('de-DE')
        inputchange ()
    }
    var cartTotalA = document.querySelector(".price-total span") 
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    cartPrice.innerHTML = totalC.toLocaleString('de-DE')
}
// -----------------delete----------------------------
function deleteCart (){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0; i<cartItem.length; i++) {     
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click", function(event){
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            carttotal()
        })
        
    }
}
//------------------------------------------------
function inputchange () {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal ()
        })
      
    }
}
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    console.log(cartshow)
    document.querySelector(".cart").style.right = "-100%"
}) 
 
