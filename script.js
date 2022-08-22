const form = document.querySelector("#generate__form");
const qrcode = document.querySelector("#qrcode");

const screenWidth = window.innerWidth;

const selectInput = document.querySelector("#size");
const saveBtn = document.querySelector("#saveimage");
const spinner = document.querySelector("#spinner");

const genBtn = document.querySelector("#submitBtn");

if(screenWidth < 600){
    selectInput.remove();
}


const showSpinner = ()=>{
    spinner.style.display = "block";
}

const hideSpinner = ()=>{
    spinner.style.display = "none";
}


const onSubmitGenerate = (e)=>{
    e.preventDefault();
    genBtn.disabled = true;

    qrcode.innerHTML = "";
    const url = document.querySelector("#qrUrl").value;
    const size = document.querySelector("#size");
        showSpinner();
    
    setTimeout(()=>{
        hideSpinner();
        generateQRCode(url,(screenWidth > 600) ? size.value: 200);
        qrcode.style.display="flex";
        genBtn.disabled = false;

    },500)


    setTimeout(()=>{
        const qrImgUrl = document.querySelector("#qrcode img").getAttribute('src');
        saveBtn.href = qrImgUrl;
        saveBtn.style.display = "flex";
        
        
    },600)
   
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


