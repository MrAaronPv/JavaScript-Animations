document.getElementById('btn__enviar').addEventListener("click", function() {
    const animationContainer = document.getElementById("animationContent");

    const animacionHTML = `
     <dotlottie-player
            src="https://lottie.host/dff77043-b0cf-43db-9ac3-9bb2da5a3f4c/hI3mtlWBCz.lottie"
            background="transparent" 
            speed="1" 
            style="width: 300px; height: 300px" 
            loop 
            autoplay>
        </dotlottie-player>
    `;

    animationContainer.innerHTML = animacionHTML;

    setTimeout(() => {
        animationContainer.innerHTML = "";
    }, 5000)
})