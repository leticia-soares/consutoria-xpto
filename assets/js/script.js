function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

$(document).ready(function () {
  var money = $('#opcoes').val();
  var campos = $('.text-orcamento');
  if (money === '1') {
    $.each(campos, function(index, item){
      var campo = $(item);
      var valor = campo.html().replace('R$ ', '').replace('.', '').replace(',', '.');
      var novoValor = valor * 4.81
      console.log(novoValor.toFixed(2));
    });
  }
});

