$(".show-menu").on("click", function () {
  $(".menu").css("transform", "translate(0px)");
});

$(".menu").on("click", function () {
  $(".menu").css("transform", "translate(-180px)");
});

$(".show-modal").on("click", function () {
  $(".modal").css("transform", "translateY(0%)");
});

$(".modal-close").on("click", function () {
  $(".modal").css("transform", "translateY(-100%)");
});

const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

$(".modal-form").on("submit", function (e) {
  const emailValue = $(".modal-form .email").val();
  const isEmailEmpty = emailValue === "";
  const emailValid = emailRegex.test(emailValue);
  if (isEmailEmpty) {
    e.preventDefault();
    $(".emailWarning").html("Email is empty!");
    $(".emailWarning").css("display", "block");
  } else if (!emailValid) {
    e.preventDefault();
    $(".emailWarning").html("Something wrong with your email form.");
    $(".emailWarning").css("display", "block");
  }
});

const pwRegex = /[A-Z]/;

$(".modal-form").on("submit", function (e) {
  const pwValue = $(".modal-form .password").val();
  const pwValid = pwRegex.test(pwValue);
  if (!pwValid) {
    e.preventDefault();
    $(".pwWarning").css("display", "block");
  }
});
