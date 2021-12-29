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
