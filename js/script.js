const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const QrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img");
// Eventos


// GERAR QRCODE
function generateQrCode() {
    const QrCodeInputValue = QrCodeInput.value;
    
    if(!QrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrCodeInputValue}`

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";

    });  
}


qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

QrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    }
});


// Limpar área do QR code
QrCodeInput.addEventListener("keyup", () => {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
});