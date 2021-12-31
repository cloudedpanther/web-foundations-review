const array = ["BMW", 520];
const obj = { brand: "BMW", model: 520 };
const data = [{ brand: "BMW" }, { model: 520 }];

// $(".item-name").html(array[0]);
// $(".item-desc").html(array[1]);

// $(".item-name").html(obj.brand);
// $(".item-desc").html(obj.model);

$(".item-name").html(data[0].brand);
$(".item-desc").html(data[1].model);

$(".item-select select").on("change", function () {
  if ($(".item-select select").val() === "Shirts") {
    $(".size-select select").html("");
    const option = `
    <option>--------</option>
    <option>95</option>
    <option>100</option>
    <option>105</option>`;
    $(".size-select select").append(option);
  } else if ($(".item-select select").val() === "Pants") {
    $(".size-select select").html("");
    const option = `
    <option>--------</option>
    <option>28</option>
    <option>30</option>
    <option>32</option>`;
    $(".size-select select").append(option);
  } else {
    $(".size-select select").html("");
    const option = `
    <option>--------</option>`;
    $(".size-select select").append(option);
  }
});
