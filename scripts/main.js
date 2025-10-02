// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const currentlyOpen = document.querySelector('.accordion-content.open');

//     if (currentlyOpen && currentlyOpen !== header.nextElementSibling) {
//       currentlyOpen.style.maxHeight = null;
//       currentlyOpen.classList.remove('open');
//     }

//     const content = header.nextElementSibling;

//     if (content.classList.contains('open')) {
//       content.style.maxHeight = null;
//       content.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       content.classList.add('open');
//     }
//   });
// });
// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//     const item = header.closest('.accordion-item');
//     const content = header.nextElementSibling;
//     const currentlyOpenItem = document.querySelector('.accordion-item.open');

//     if (currentlyOpenItem && currentlyOpenItem !== item) {
//       currentlyOpenItem.querySelector('.accordion-content').style.maxHeight = null;
//       currentlyOpenItem.classList.remove('open');
//     }

//     if (item.classList.contains('open')) {
//       content.style.maxHeight = null;
//       item.classList.remove('open');
//     } else {
//       content.style.maxHeight = content.scrollHeight + 'px';
//       item.classList.add('open');
//     }
//   });
// });
document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open");
    const closeBtn = document.querySelector(".modal_btn_clouse");
    const modalWind = document.querySelector(".modal_wind");
    const modalBac = document.querySelector(".modal_bac");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


  document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open3");
    const closeBtn = document.querySelector(".modal_btn_clouse3");
    const modalWind = document.querySelector(".modal_wind3");
    const modalBac = document.querySelector(".modal_bac3");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });



   document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})


  // Ждём, пока DOM полностью загрузится
  document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open2");
    const closeBtn = document.querySelector(".modal_btn_clouse2");
    const modalWind = document.querySelector(".modal_wind2");
    const modalBac = document.querySelector(".modal_bac2");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


   document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open1");
    const closeBtn = document.querySelector(".modal_btn_clouse1");
    const modalWind = document.querySelector(".modal_wind1");
    const modalBac = document.querySelector(".modal_bac1");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });


     document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.querySelector(".modal_btn_open5");
    const closeBtn = document.querySelector(".modal_btn_clouse5");
    const modalWind = document.querySelector(".modal_wind5");
    const modalBac = document.querySelector(".modal_bac5");

    if (openBtn && closeBtn && modalWind && modalBac) {
      // Открытие
      openBtn.addEventListener("click", () => {
        modalWind.classList.add("open");
        modalBac.classList.add("open");
      });

      // Закрытие
      closeBtn.addEventListener("click", () => {
        modalWind.classList.remove("open");
        modalBac.classList.remove("open");
      });
    }
  });