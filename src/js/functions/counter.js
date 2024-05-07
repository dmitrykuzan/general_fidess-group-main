export const counter = () => {

  const btns = document.querySelectorAll('.cosmetics__count-btn');

    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.cosmetics__count');
        const currentValue = +inp.value;
        let newValue;

        if(direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 1;
        }

        inp.value = newValue;
      })
    })

};
