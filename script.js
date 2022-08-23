const form = document.querySelector("#generate__form");
const qrcode = document.querySelector("#qrcode");

const screenWidth = window.innerWidth;

const selectInput = document.querySelector("#size");
const saveBtn = document.querySelector("#saveimage");
const spinner = document.querySelector("#spinner");

const genBtn = document.querySelector("#submitBtn");

//to remove pixel input for mobile devices
if(screenWidth < 600){
    selectInput.remove();
}


//show spinner
const showSpinner = ()=>{
    spinner.style.display = "block";
}

//hide spinner
const hideSpinner = ()=>{
    spinner.style.display = "none";
}


//run this function on form submit
const onSubmitGenerate = (e)=>{

    //prevent form from submitting
    e.preventDefault();

    /*disable submit button until qrcode generate to avoid user 
    from clicking multiple times 
    and generating multiple qrcode on one go*/
    genBtn.disabled = true;

    //remove the qrcode if any generated before
    qrcode.innerHTML = "";

    //url and size needed to generate qrcode using qrcodejs library
    const url = document.querySelector("#qrUrl").value;
    const size = document.querySelector("#size");
    
    //show spinner while generating
    showSpinner();
    
    //used setTimeout to add generating effect, it take .5 sec
    setTimeout(()=>{
        //hide spinner after .5 sec
        hideSpinner();

        /*if screewidth is mobile size then will pass size value as 
        200 otherwise size selected by user*/
        generateQRCode(url,(screenWidth > 600) ? size.value: 200);

        //by default qrcode element is hidden will show it only generating qrcode
        qrcode.style.display="flex";

        //after generating qrcode we gonna again enable the generate btn
        genBtn.disabled = false;

        /*qrcodejs will take some millisec to generate 
        if we don't use setTimeout we cant get qrcode img url*/

        //for save img btn
        setTimeout(()=>{
            const qrImgUrl = document.querySelector("#qrcode img").src;
            saveBtn.href = qrImgUrl;
            saveBtn.style.display = "flex";
        },50)


    },500)


    
   
}


//creating obj for qrcodejs and specifying url and size
const generateQRCode = (url,size=200)=>{
    let qrcode = new QRCode("qrcode",{
        text:url,
        width:size,
        height:size
    });
   
}

//listen to form for submit
form.addEventListener("submit",onSubmitGenerate);


