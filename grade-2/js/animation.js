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

// $(".slide-1").on("click", function () {
//   $(".slide-row").removeClass("to-slide-2");
//   $(".slide-row").removeClass("to-slide-3");
//   $(".slide-row").addClass("to-slide-1");
// });

// $(".slide-2").on("click", function () {
//   $(".slide-row").removeClass("to-slide-1");
//   $(".slide-row").removeClass("to-slide-3");
//   $(".slide-row").addClass("to-slide-2");
// });

// $(".slide-3").on("click", function () {
//   $(".slide-row").removeClass("to-slide-1");
//   $(".slide-row").removeClass("to-slide-2");
//   $(".slide-row").addClass("to-slide-3");
// });

// $(".prev").on("click", function () {
//   const atSlide2 = $(".slide-row").hasClass("to-slide-2");
//   const atSlide3 = $(".slide-row").hasClass("to-slide-3");

//   if (atSlide2) {
//     $(".slide-row").removeClass("to-slide-2");
//     $(".slide-row").addClass("to-slide-1");
//   } else if (atSlide3) {
//     $(".slide-row").removeClass("to-slide-3");
//     $(".slide-row").addClass("to-slide-2");
//   }
// });

// $(".next").on("click", function () {
//   const atSlide1 = $(".slide-row").hasClass("to-slide-1");
//   const atSlide2 = $(".slide-row").hasClass("to-slide-2");

//   if (atSlide1) {
//     $(".slide-row").removeClass("to-slide-1");
//     $(".slide-row").addClass("to-slide-2");
//   } else if (atSlide2) {
//     $(".slide-row").removeClass("to-slide-2");
//     $(".slide-row").addClass("to-slide-3");
//   }
// });

const MAX = $(".slide-row .slide-col").length;
let slideNum = 1;

$(".btn-point button").on("click", function (e) {
  const val = e.target.innerText;
  const dest = -100 * (val - 1) + "vw";
  slideNum = val;
  $(".slide-row").css("transform", `translate(${dest})`);
});

$(".prev").on("click", function () {
  if (slideNum > 1) {
    const dest = -100 * (slideNum - 2) + "vw";
    slideNum--;
    $(".slide-row").css("transform", `translate(${dest})`);
  }
});

$(".next").on("click", function () {
  if (slideNum < MAX) {
    const dest = -100 * slideNum + "vw";
    slideNum++;
    $(".slide-row").css("transform", `translate(${dest})`);
  }
});
