let imgBox = document.getElementById("imgbox");
let qrtext = document.getElementById("textbox");
let qrImage = document.getElementById("qrImage");


function genarateQR(){

    if(qrtext.value > 0 || qrtext.value < 1000 ){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

    imgBox.classList.add("show-img");
    }
    else{
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }

}