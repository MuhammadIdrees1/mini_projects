let qr_btn = document.querySelector('#qr_btn');
let qr_img = document.querySelector('#qr_img');

qr_btn.addEventListener("click",()=>{
    let input = document.querySelector("#input").value
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${input}`
    qr_img.src = url;
})