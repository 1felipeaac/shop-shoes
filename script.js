const produtos = document.querySelectorAll(".produto");
const checked_produtos = document.querySelectorAll(".checkmark");
const img_selecionada = document.querySelectorAll(".img_produto");
const img_ampliada = document.getElementById("produto-ampliado");

const main = document.querySelector("main");
const src_img_ampliada = img_ampliada.src;


main.addEventListener("mouseleave", function (){
    img_ampliada.setAttribute("src", src_img_ampliada);
})

for (let index_produtos = 0; index_produtos < produtos.length; index_produtos++) {

    const exemplar = produtos[index_produtos];
    const exmplar_selecionado = img_selecionada[index_produtos].src;
    const exemplar_checked = checked_produtos[index_produtos];

    exemplar.addEventListener("click", select_produto);

    main.addEventListener("mouseleave", function(){
        exemplar_checked.style.visibility = "hidden";
    })
    
    function select_produto(){
        img_ampliada.setAttribute("src", exmplar_selecionado);
        visibility_span();
    };

    function visibility_span(){
        exemplar_checked.style.visibility = "visible"
    }

};


