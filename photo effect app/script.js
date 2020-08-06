const canvas = document.getElementById("canvas");
const cxt = canvas.getContext("2d");

const img = new Image();


const reader = new FileReader();

function imgUpload(e) {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () =>{
        img.src =reader.result;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            cxt.drawImage(img, 0, 0);
            
        };
    };    
}
function greyScale() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
        const shade = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07; 
        data[i] = shade;
        data[i + 1] = shade;
        data[i + 2] = shade;
    };
    cxt.putImageData(imgData, 0, 0);
    
}

function sepia() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
        const shade = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07; 
        data[i] = shade + 95;
        data[i + 1] = shade + 58;
        data[i + 2] = shade;
    }
    cxt.putImageData(imgData, 0, 0);
};

function invert() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
      //  const shade = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07; 
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    cxt.putImageData(imgData, 0, 0);
};

function rgb() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
       // const shade = data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07; 
       const green = data[i + 1];
        data[i] = data[i];
        data[i + 1] = data[i + 2];
        data[i + 2] = green;
    }
    cxt.putImageData(imgData, 0, 0);
};

function bgr() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
    
       const red = data[i];
        data[i] = data[i + 2];
        data[i + 1] = data[i + 1];
        data[i + 2] = red;
    }
    cxt.putImageData(imgData, 0, 0);
};

function gbr() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
    
       const red = data[i];
        data[i] = data[i + 1];
        data[i + 1] = data[i + 2];
        data[i + 2] = red;
    }
    cxt.putImageData(imgData, 0, 0);
};

function grb() {
    const imgData = cxt.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
    for (let i = 0; i<data.length; i +=4){
    
       const red = data[i];
        data[i] = data[i + 1];
        data[i + 1] = red;
        data[i + 2] = data[i + 2];
    }
    cxt.putImageData(imgData, 0, 0);
};

function clearButton(){
    img.src = reader.result;
}

function download(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "photo.jpg";
    link.click();
}


document.querySelectorAll("button")[0].addEventListener("click", greyScale);
document.querySelectorAll("button")[1].addEventListener("click", sepia);
document.querySelectorAll("button")[2].addEventListener("click", invert);
document.querySelectorAll("button")[3].addEventListener("click", rgb);
document.querySelectorAll("button")[4].addEventListener("click", bgr);
document.querySelectorAll("button")[5].addEventListener("click", gbr);
document.querySelectorAll("button")[6].addEventListener("click", grb);
document.querySelectorAll("button")[7].addEventListener("click", clearButton);
document.querySelectorAll("button")[8].addEventListener("click", download);


const imgLoader = document.getElementById("upload");
imgLoader.addEventListener("change", imgUpload);