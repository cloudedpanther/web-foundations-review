var 사람 = {
  name: "손흥민",
  sayHi: function () {
    console.log(`안녕 나는 ${this.name}`);
  },
};

// 사람.sayHi(); //안녕 나는 손흥민

var 자료 = {
  data: [1, 2, 3, 4, 5],
};

자료.전부더하기 = function () {
  let sum = 0;
  this.data.forEach((e) => (sum += e));
  console.log(sum);
};

// 자료.전부더하기();

document.getElementById("btn").addEventListener("click", function () {
  setTimeout(() => console.log(this.innerHTML), 1000);
});

const pants = 20;
const socks = 100;

const analyzer = (arr, e1, e2) => {
  console.log(arr[1] + e1 + arr[0] + e2);
};

// analyzer`pants${pants} socks${socks}`;

const pants2 = 0;
const socks2 = 100;

const analyzer2 = (arr, e1, e2) => {
  if (e1 === 0) {
    console.log("We don't sell any pants");
  } else if (e2 === 0) {
    console.log("We don't sell any socks");
  } else {
    console.log(arr[0] + e1 + arr[1] + e2);
  }
};

// analyzer2`pants${pants2} socks${socks2}`;

const o1 = { a: 1, b: 2 };
// console.log({ ...o1 });
const arr1 = [1, 2, 3];
// console.log(...arr1);

var person = {
  인사: function () {
    console.log(this.name + "안녕");
  },
};

var person2 = {
  name: "손흥민",
};

// person.인사.apply(person2);

// console.log(otcha);
let otcha = "koh";
function hi() {
  var otcha = "kim";
  console.log("here is inside of a function");
  console.log(otcha);
}
// hi();
// console.log(otcha);

function countChar(str) {
  const obj = {};

  [...str].sort().forEach(function (e) {
    if (obj[e] > 0) obj[e]++;
    else obj[e] = 1;
  });

  console.log(obj);
}

countChar("aacbbb");
