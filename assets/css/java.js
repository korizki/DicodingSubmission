//ganti gambar naruto
let narutoImage = document.querySelector("#naruto");
narutoImage.setAttribute("src","assets/images/naruto2.jpg");
narutoImage.addEventListener('click',function(event){
    narutoImage.setAttribute("src","assets/images/naruto1.jpg");
})
let narutoButton = document.querySelector("#naruto2");
narutoButton.addEventListener('click',function(event){
    narutoImage.setAttribute("src","assets/images/naruto2.png");
})
//ganti gambar sasuke
let sasukeImage = document.querySelector("#sasuke");
sasukeImage.setAttribute("src","assets/images/sasuke2.jpg");
sasukeImage.addEventListener('click',function (event){
    sasukeImage.setAttribute("src","assets/images/sasuke1.jpg");
})
let sasukeButton = document.querySelector("#sasuke2");
sasukeButton.addEventListener('click',function(event){
    sasukeImage.setAttribute("src","assets/images/sasuke2.png");
})