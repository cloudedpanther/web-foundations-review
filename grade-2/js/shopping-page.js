$.ajax({
  url: "../resources1/store.json",
  type: "GET",
}).done(function (data) {
  const arr = data.products;
  paintCards(arr);

  $(".search").on("input", function (e) {
    const keyword = e.target.value;
    const filtered = arr.filter(function (e) {
      return (
        e.product_name.indexOf(keyword) !== -1 ||
        e.brand_name.indexOf(keyword) !== -1
      );
    });
    paintCards(filtered);

    const pName = document.querySelectorAll(".product-name");
    const bName = document.querySelectorAll(".brand-name");
    pName.forEach(function (e) {
      const pLetter = e.querySelectorAll("span");
      pLetter.forEach(function (el) {
        if (keyword.indexOf(el.innerText) !== -1) {
          el.classList.add("highlight");
        }
      });
    });
    bName.forEach(function (e) {
      const bLetter = e.querySelectorAll("span");
      bLetter.forEach(function (el) {
        if (keyword.indexOf(el.innerText) !== -1) {
          el.classList.add("highlight");
        }
      });
    });
  });
});

function paintCards(arr) {
  $(".items-row").html("");
  for (let i = 0; i < arr.length; i++) {
    const card = `
          <div class="col">
              <div class="card h-100">
                  <img src="../resources1/${
                    arr[i].photo
                  }" class="card-img-top" alt="..." />
                  <div class="card-body">
                      <h5 class="card-title product-name">${cover(
                        arr[i].product_name
                      )}</h5>
                      <p class="card-text brand-name">
                          ${cover(arr[i].brand_name)}
                      </p>
                  </div>
                  <div class="card-footer">
                      <small class="text-muted">${arr[i].price}</small>
                  </div>
              </div>
          </div>
          `;
    $(".items-row").append(card);
  }
}

function cover(text) {
  const arr = text.split("");
  let covered = "";
  arr.forEach(function (e) {
    covered += `<span>${e}</span>`;
  });
  return covered;
}
