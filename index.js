const imagecontsiner=document.querySelector(".imgcontainer")
const btn=document.querySelector(".btn");
btn.addEventListener("click",function(){
     imgnum=10;
    update();
})
function update(){
    for(let i=0;i<imgnum;i++){
    const newimg=document.createElement("img")
    newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*3000)}`;
    imagecontsiner.appendChild(newimg);}
}