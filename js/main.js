var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        // количество мини-фото, которые пользователь видит сразу
        slidesPerView: 6,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
          swiper: swiper,
        },
      });
     
      // создаем переменную menuBtn под кнопку меню, чтобы при нажатии открывалась менюшка
      const menuBtn = document.querySelector(".menu-button");
      // создаем переменную menu, которая будет добавлять класс is-open при нажатии на кнопку с классом menu-button
      const menu = document.querySelector(".navbar-panel");
      // создаем переменную для того, чтобы меню закрывалось
      const menuCloseBtn = document.querySelector(".close-menu");
      // добавляем классу navbar-panel класс is-open при щелчке по кнопке
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle('is-open');
      })
      // убираем класс is-open
      menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle('is-open');
      })
      