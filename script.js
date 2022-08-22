const form = document.querySelector("#generate__form");
const qrcode = document.querySelector("#qrcode");
const screenWidth = window.innerWidth;
const selectInput = document.querySelector("#size");
const saveBtn = document.querySelector("#saveimage");


if(screenWidth < 600){
    selectInput.remove();
}





const onSubmitGenerate = (e)=>{
    e.preventDefault();
    qrcode.innerHTML = "";
    const url = document.querySelector("#qrUrl").value;
    const size = document.querySelector("#size");
    generateQRCode(url,(screenWidth > 600) ? size.value: 200);
    qrcode.style.display="flex";

    setTimeout(()=>{
        const qrImgUrl = document.querySelector("#qrcode img").getAttribute('src');
        saveBtn.href = qrImgUrl;
        saveBtn.style.display = "flex";
        
        
    },1)
   
}

const generateQRCode = (url,size=200)=>{
    console.log(size);
    let qrcode = new QRCode("qrcode",{
        text:url,
        width:size,
        height:size
    });
   
}

form.addEventListener("submit",onSubmitGenerate);


