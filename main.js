let num = document.querySelectorAll(".rating .nums span");
let nums = Array.from(num);
let rating = document.querySelector('.rating');
let thank = document.querySelector('.thank');
let submit = document.querySelector('.rating #submit');
let selected = document.querySelector('.thank .selected span');

nums.forEach(ele => {
  ele.addEventListener('click', (e) => {
    nums.forEach(ele => {
      ele.classList.remove('change');
    });
    e.currentTarget.classList.add('change')
    selected.innerHTML = ele.dataset.let;

  });
  submit.onclick = function (e) {
    e.preventDefault();
    submit.classList.remove('active');
    submit.classList.add('active');
    nums.forEach(el => {
      if (el.classList.contains('change') == true) {
        thank.style.zIndex = '5';
      } else if (el.classList.contains('change') == false) {
        console.log(el)
      }
    })
  }
})


