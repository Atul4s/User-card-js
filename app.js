 let arr = [
   { 
    picture:'https://raw.githubusercontent.com/Atul4s/User-card-js/refs/heads/main/aa.jpg',
    FullName:'Nelson Terry',
    role:'Web developer',
    post:'40',
    follows:'62',
    Following:'78',
    price:'18$/hr',
    stra:'Stranger',
    followplus:'+ Follow',
   
   },
   { 
    picture:'https://images.unsplash.com/photo-1597082037129-2114faa4db61?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    FullName:'Theo Russell',
    role:'Android developer ',
    post:'70',
    follows:'100',
    Following:'48',
    price:'15$/hr',
    stra:'Stranger',
    followplus:'+ Follow',
    
   },   { 
    picture:'https://images.unsplash.com/photo-1590196488005-cba02a23a809?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    FullName:'Henry Taylor',
    role:'php developer',
    post:'55',
    follows:'68',
    Following:'71',
    price:'28$/hr',
    stra:'Stranger',
    followplus:'+ Follow',
   
   }

]

let main = document.querySelector(".main")


function frFunction(){
 
    let sum = '';

arr.forEach(function(elem,idx){
    
    sum = sum + `<div class="user_card">
<div class="profile-pic">
<img src="${elem.picture}" alt="">
</div>

<div class="work-info">
    <div class="staranger"  style="background-color: ${elem.stra === 'Friend' ? '#2ecc71' : '#e74c3c'}">
        <h2 >${elem.stra}</h2>
    </div>
    <div class="hr">
        <h2>${elem.price}</h2>
    </div>
</div>

<div class="name">
 <h1>${elem.FullName}</h1>
</div>
<div class="role">
 <p>${elem.role}</p>
</div>
<div class="icons">
    <i class="fa-brands fa-square-facebook"></i>
    <i class="fa-solid fa-envelope"></i>
    <i class="fa-brands fa-square-x-twitter"></i>
    <i class="fa-brands fa-linkedin"></i>
</div>

<button class="follow-button" id=${idx} style="background-color: ${elem.stra === 'Friend' ? '#3f98f7' : '#b8d9fc'}
">${elem.followplus}</button>
<div class="info">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellendus!</p>
</div>

<div class="posting">
    <div class="post">
        <h2>${elem.post}</h2>
        <h1>Post</h1>
    </div>
    <div class="follow">
        <h2>${elem.follows}</h2>
        <h1>Follows</h1>
    </div>
    <div class="following">
        <h2>${elem.Following}</h2>
        <h1>Following</h1>
    </div>
</div>

</div>
`
})
main.innerHTML = sum

}


frFunction();




main.addEventListener('click',function(dets){


    let gold = arr[dets.target.id]

    if (gold.stra == "Stranger") {
        gold.stra = "Friend";
        gold.followplus = "Following"

      } else {
        gold.stra = "Stranger";
        gold.followplus = "+ Follow"
      }

     


frFunction();


// let sta = document.querySelector(".staranger")


// if(gold.stra === "Friend"){
//     sta.style.backgroundColor = 'green'
//     }else {
//         gold.stra = "Stranger";
//         sta.style.backgroundColor= 'red'
//       }

})

