displaydata()
 let products=JSON.parse(localStorage.getItem("products")) || []
  function displaydata(){

    let products=JSON.parse(localStorage.getItem("products")) || []

     products.forEach(function (el,index){

         let div=document.createElement("div")

         let image=document.createElement("img")
         image.src=el.image
         let type=document.createElement("h3")
         type.innerText=`Type : ${el.type}`
         let desc=document.createElement("p")
         desc.innerText=`Discription :${el.desc}`
         let price=document.createElement("p")
         price.innerText=`Price :${el.price}`
         let btn=document.createElement("button")
         btn.setAttribute("id","remove_product")
         btn.innerText="Remove product"
         btn.style.cursor="pointer"
         btn.addEventListener("click",function(){

            Removeproduct(el,index)
         })

          div.append(image,type,desc,price,btn)
          document.querySelector("#all_products").append(div)

     })
    }

    function Removeproduct(el,index){

          products.splice(index,1)
          localStorage.setItem("products",JSON.stringify(products))
          window.location.reload()
    }