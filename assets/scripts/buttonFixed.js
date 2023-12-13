document.addEventListener("DOMContentLoaded", function () {
    let botao = document.getElementById("buttonRede");
    let sectionPortfolio = document.getElementById("sobre")

    window.addEventListener("scroll", function () {

        let portfolioTopo = sectionPortfolio.offsetTop;
        console.log("Roladinha");


        if (window.scrollY > portfolioTopo ) {
            botao.style.display = "none"
        } else {
            botao.style.display = "flex"
            
        }
    })

    
})

