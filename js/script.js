var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".popup-map");
var mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


var feedbackLink = document.querySelector(".feedback");
var formPopup = document.querySelector(".write-to-us");
var feedbackClose = formPopup.querySelector(".feedback-close");

var form = formPopup.querySelector("form");
var userName = formPopup.querySelector("[name=name]");
var email = formPopup.querySelector("[name=e-mail]");
var message = formPopup.querySelector("[name=message]");

var isStorageSupport = true;
var storage = "";

try {
  userNameStorage = localStorage.getItem("userName");
  emailStorage = localStorage.getItem("email")
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.add("modal-show");

  if (emailStorage) {
    userName.value = userNameStorage;
    mail.value = emailStorage;
    message.focus();
  } else {
    userName.focus();
}
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-show");
  formPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !message.value) {
    evt.preventDefault();
    console.log("Необходимо заполнить все поля");

    formPopup.classList.remove("modal-error");
    formPopup.offsetWidth = formPopup.offsetWidth;
    formPopup.classList.add("modal-error");

  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("email", email.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (formPopup.classList.contains("modal-show")) {
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove("modal-error");
  }
}
});
