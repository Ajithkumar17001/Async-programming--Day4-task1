const apiURL = "https://randomfox.ca/floof/"

const imageArea=document.getElementById("fox-image");

const loadfoximage = ({ image })=>{
const imgElement = document.createElement("img");

imgElement.src = image;
imageArea.appendChild(imgElement);
}

const getrandom = async () => {
    const response = await fetch (apiURL);
    const data = await response.json();
    imageArea.innerHTML = "";
    loadfoximage(data);};

    getrandom();