document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".fade-in-text");

    function fadeInText() {
        textElements.forEach((textElement, index) => {
            setTimeout(() => {
                textElement.style.opacity = 1;
            }, index * 2000); // Delay each word by 2000 milliseconds (2 seconds)
        });
    }

    fadeInText();
});
