fetch("app.json").then(function(response){
    return response.json();
})
.then(function(data){
    
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    let img3 = document.querySelector(".img3");
    let img4 = document.querySelector(".img4");
    let img5 = document.querySelector(".img5");
    let img6 = document.querySelector(".img6");
    let img7 = document.querySelector(".img7");
    let img8 = document.querySelector(".img8");
    let img9 = document.querySelector(".img9");
    let img10 = document.querySelector(".img10");
    let img11 = document.querySelector(".img11");
    let img12 = document.querySelector(".img12");
    let img13 = document.querySelector(".img13");
    let img14 = document.querySelector(".img14");
    let img15 = document.querySelector(".img15");
    let img16 = document.querySelector(".img16");
    let img17 = document.querySelector(".img17");
    let img18 = document.querySelector(".img18");
    let img19 = document.querySelector(".img19");
    let img20 = document.querySelector(".img20");
    let img21= document.querySelector(".img21");
    let img22 = document.querySelector(".img22");
    let img23 = document.querySelector(".img23");
    let img24 = document.querySelector(".img24");
    let img25 = document.querySelector(".img25");

    

    for(let i of data){
        
        img1.src= i.det1.img
        img2.src= i.det2.img
        img3.src= i.det3.img
        img4.src= i.det4.img
        img5.src= i.det5.img
        img6.src= i.det6.img
        img7.src= i.det7.img
        img8.src= i.det8.img
        img9.src= i.det9.img
        img10.src= i.det10.img
        img11.src= i.det11.img
        img12.src= i.det12.img
        img13.src= i.det13.img
        img14.src= i.det14.img
        img15.src= i.det15.img
        img16.src= i.det16.img
        img17.src= i.det17.img
        img18.src= i.det18.img
        img19.src= i.det19.img
        img20.src= i.det20.img
        img21.src= i.det21.img
        img22.src= i.det22.img
        img23.src= i.det23.img
        img24.src= i.det24.img
        img25.src= i.det25.img
        
        

    }

    
})