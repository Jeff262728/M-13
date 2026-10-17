const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navegacao');

    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', aberto);
      toggle.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });

    document.querySelectorAll('.navegacao a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('aberto');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menu');
      });
    });

    document.querySelector('.formulario').addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Mensagem pronta para envio! Este formulário é apenas demonstrativo.');
    });




  const palavras = [
    " Agência",
    " Studio",
    " Digital",
    " Creative"
  ];

  const texto = document.querySelector(".logo-dinamico");

  let palavraAtual = 0;
  let caractereAtual = 0;
  let apagando = false;

  function escreverLogo() {
    const palavra = palavras[palavraAtual];

    if (!apagando) {
      texto.textContent = palavra.substring(0, caractereAtual + 1);
      caractereAtual++;

      if (caractereAtual === palavra.length) {
        apagando = true;
        setTimeout(escreverLogo, 1800);
        return;
      }

      setTimeout(escreverLogo, 120);
    } else {
      texto.textContent = palavra.substring(0, caractereAtual - 1);
      caractereAtual--;

      if (caractereAtual === 0) {
        apagando = false;
        palavraAtual = (palavraAtual + 1) % palavras.length;
      }

      setTimeout(escreverLogo, 70);
    }
  }

  escreverLogo();