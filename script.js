function showImage() {
    let img = document.getElementById("myImage");
    let text = document.getElementById("text");

    img.style.display = "block";  // Го правиме видлив сликата
    text.style.display = "block"; // Го правиме видлив текстот
    
    setTimeout(() => {
        img.classList.add("show");  // Додаваме ефект за сликата
    }, 10);
}