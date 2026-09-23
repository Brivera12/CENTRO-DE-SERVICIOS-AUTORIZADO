const numeros = document.querySelectorAll(".numero");

const observar = new IntersectionObserver((entradas, observer) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      const contador = entrada.target;
      const objetivo = +contador.dataset.target;
      let actual = 0;

      const actualizar = () => {
        const incremento = Math.ceil(objetivo / 100);

        actual += incremento;

        if (actual < objetivo) {
          contador.textContent = actual;
          requestAnimationFrame(actualizar);
        } else {
          contador.textContent = objetivo;
        }
      };

      actualizar();
      observer.unobserve(contador);
    }
  });
}, { threshold: 0.5 });

numeros.forEach(numero => observar.observe(numero));