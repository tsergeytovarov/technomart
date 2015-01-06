var linkWriteUs = document.querySelector(".lost-btn");
      var sendWriteUs = document.querySelector(".send-btn");
      var popUpWriteUs = document.querySelector(".write-us");
      var cancelWriteUs = document.querySelector(".cancel-btn");
      var nameWriteUs = document.querySelector(".your-name");
      var emailWriteUs = document.querySelector(".your-email");
      var mailTextWriteUs = document.querySelector(".e-mail");
      var nameInStorage = localStorage.getItem("name");
      var emailInStorage = localStorage.getItem("email");

      var tabs = document.querySelectorAll(".tabs li");
      var firstTab = tabs.item(0);
      var secondTab = tabs.item(1);
      var thirdTab = tabs.item(2);

      var tabSlides = document.querySelectorAll(".tab-first, .tab-second, .tab-third");
      var firstSlide = tabSlides.item(0);
      var secondSlide = tabSlides.item(1);
      var thirdSlide = tabSlides.item(2);

      linkWriteUs.addEventListener("click", function(event) {
        event.preventDefault();
        popUpWriteUs.classList.add("write-us-show");
        if (nameInStorage && emailInStorage) {
            nameWriteUs.value = nameInStorage;
            emailWriteUs.value = emailInStorage;
            mailTextWriteUs.value = "";
            mailTextWriteUs.focus();
        } else {
            nameWriteUs.focus();
        }
      });

      cancelWriteUs.addEventListener("click", function(event) {
          event.preventDefault();
          popUpWriteUs.classList.remove("write-us-show");
          popUpWriteUs.classList.remove("write-us-error");
      });

      sendWriteUs.addEventListener("click", function(event) {
          if (!nameWriteUs.value || !emailWriteUs.value || !mailTextWriteUs.value) {
              event.preventDefault();
              popUpWriteUs.classList.add("write-us-error");
          } else {
              localStorage.setItem("name", nameWriteUs.value);
              localStorage.setItem("email", emailWriteUs.value);
          }
      });

      window.addEventListener("keydown", function(event) {
          if (event.keyCode == 27 && popUpWriteUs.classList.contains("write-us-show")) {
              popUpWriteUs.classList.remove("write-us-show");
              popUpWriteUs.classList.remove("write-us-error");
          }
      });

/*Проверяет активна ли первая вкладка в слайдере с табами. Если нет то делает ее и первый слайд активными,
а так же узнает какая вкладка активна и деактивирует ее и слайд, который к ней привязан.
Знаю что ужасно реализовано, но зато работает =)*/

        firstTab.addEventListener("click", function(event) {
          event.preventDefault();
          if (!firstTab.classList.contains("active-tab")) {
            firstTab.classList.add("active-tab");
            firstSlide.classList.add("active-tab-slide");
            if (secondTab.classList.contains("active-tab")) {
              secondTab.classList.remove("active-tab");
              secondSlide.classList.remove("active-tab-slide");
            } else {
              thirdTab.classList.remove("active-tab");
              thirdSlide.classList.remove("active-tab-slide");
            }
          }
        });

        secondTab.addEventListener("click", function(event) {
          event.preventDefault();
          if (!secondTab.classList.contains("active-tab")) {
            secondTab.classList.add("active-tab");
            secondSlide.classList.add("active-tab-slide");
            if (firstTab.classList.contains("active-tab")) {
              firstTab.classList.remove("active-tab");
              firstSlide.classList.remove("active-tab-slide");
            } else {
              thirdTab.classList.remove("active-tab");
              thirdSlide.classList.remove("active-tab-slide");
            }
          }
        });

        thirdTab.addEventListener("click", function(event) {
          event.preventDefault();
          if (!thirdTab.classList.contains("active-tab")) {
            thirdTab.classList.add("active-tab");
            thirdSlide.classList.add("active-tab-slide");
            if (secondTab.classList.contains("active-tab")) {
              secondTab.classList.remove("active-tab");
              secondSlide.classList.remove("active-tab-slide");
            } else {
              firstTab.classList.remove("active-tab");
              firstSlide.classList.remove("active-tab-slide");
            }
          }
        });


var linkItemAdded = document.querySelectorAll(".buy");
var cancelItemAdded = document.querySelector(".continue-btn")
var popUpItemAdded = document.querySelector(".item-added");




for (var i = 0; i < linkItemAdded.length; i++) {
    linkItemAdded[i].addEventListener("click", function(event) {
        event.preventDefault();
        popUpItemAdded.classList.add("item-added-show");
    });
}


cancelItemAdded.addEventListener("click", function(event) {
    event.preventDefault();
    popUpItemAdded.classList.remove("item-added-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27 && popUpItemAdded.classList.contains("item-added-show")) {
    popUpItemAdded.classList.remove("item-added-show");
  }
});