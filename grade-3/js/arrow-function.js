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

// countChar("aacbbb");

function Student(name, age) {
  (this.name = name),
    (this.age = age),
    (this.sayHi = function () {
      console.log(`Hi, I'm ${this.name}.`);
    });
}

// Student.prototype.gender = "male";

const student1 = new Student("John", "17");

Student.prototype.gender = "male";

const cat1 = { name: "kitty" };
const cat2 = {};

cat2.__proto__ = cat1;

// console.log(cat2.name);

class parent {
  constructor(name, age) {
    (this.name = name),
      (this.age = age),
      (this.sayHi = function () {
        console.log("hi");
      });
  }
  sayHello() {
    console.log(this.name + "입니다.");
  }
}

const child = new parent("kim", 20);
// console.log(child.name); // kim
// console.log(child); // parent { name: 'kim', age: 20, sayHi: ƒ }

class children extends parent {
  constructor(name, age) {
    super(name, age);
    this.height = 180;
  }
}

const child1 = new children("pak", 18);
// console.log(child1); // { name: 'pak', age: 18, height: 180, sayHi: ƒ }

class puppy {
  constructor(type, color) {
    this.type = String(type);
    this.color = String(color);
  }
}

class kitten extends puppy {
  constructor(type, color, age) {
    super(type, color);
    this.age = Number(age);
  }
}

puppy.prototype.getOlder = function () {
  if (this instanceof kitten) this.age++;
};

class Unit {
  constructor() {
    this.atk = 5;
    this.hp = 100;
  }
  get battlePoint() {
    return this.atk + this.hp;
  }
  set heal(amount) {
    this.hp += amount;
  }
}

const data = {
  odd: [],
  even: [],
  setNumbers(...num) {
    num.forEach((e) => {
      if (e === Math.floor(e)) {
        if (e % 2 === 0) this.even.push(e);
        else this.odd.push(e);
      }
    });
  },
  get getNumbers() {
    const arr = [...this.odd, ...this.even].sort((a, b) => a - b);
    arr.forEach((e) => console.log(e));
  },
};

let 신체정보 = {
  body: {
    height: 190,
    weight: 70,
  },
  size: ["상의 Large", "바지 30인치"],
};

const {
  body: { height, weight },
  size: [upperSize, lowerSize],
} = 신체정보;

const loadImg = new Promise((resolve, reject) => {
  document.getElementById("testImg").addEventListener("load", () => {
    resolve();
  });
  document.getElementById("testImg").addEventListener("error", () => {
    reject();
  });
});

loadImg
  .then(function () {
    console.log("성공!");
  })
  .catch(function () {
    console.log("실패!");
  });

const showHello = new Promise((resolve, reject) => {
  $.ajax({
    url: "https://codingapple1.github.io/hello.txt",
    method: "GET",
  }).done((result) => {
    resolve(result);
  });
});

// showHello
//   .then(function (result) {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       $.ajax({
//         url: "https://codingapple1.github.io/hello2.txt",
//         method: "GET",
//       }).done((result) => {
//         resolve(result);
//       });
//     });
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// const plusGo = new Promise(function (resolve, reject) {
//   const sum = 9 + 3;
//   // resolve(sum);
//   reject();
// });

// plusGo
//   .then(function (res) {
//     console.log(res);
//   })
//   .catch(function () {
//     console.log("rejected!!!");
//   });

// const plusGo = async () => {
//   const sum = 9 + 3;
//   return sum;
// };

// plusGo().then(function (res) {
//   console.log(res);
// });

const plusGo = async () => {
  // const getSum = new Promise(function (resolve, reject) {
  //   const sum = 9 + 3;
  //   resolve(sum);
  // });
  // getSum.then(function(res) {
  //   console.log(res); // sum
  // })
  const getSum = async () => {
    const sum = 9 + 3;
    return sum;
  };
  const result = await getSum();
  console.log(result);
};

// plusGo();

const btnClickHandler = async () => {
  const btn = document.querySelector("#newBtn");

  const isBtnClicked = new Promise((resolve, reject) => {
    btn.addEventListener("click", () => {
      resolve("성공했어요!");
    });
  });

  const result = await isBtnClicked;
  console.log(result);
};

// btnClickHandler();

// const cutePromise = new Promise(function (resolve, reject) {
//   if (1) {
//     setTimeout(function () {
//       console.log("Hi");
//       resolve();
//     }, 1000);
//   } else {
//     reject();
//   }
// });

// cutePromise
//   .then(function () {
//     console.log("finished");
//   })
//   .catch(function () {
//     console.log("error detected");
//   });

async function tada() {
  return new Promise(function (resolve, reject) {
    console.log("YO");
  });
}

// 아래 promise 객체와 async 함수는 동일한 역할을 한다.

const fetchUser_ = new Promise((resolve, reject) => {
  // fetching...
  resolve("user");
});

async function fetchUser() {
  // fetching...
  return "user";
}

const delay = (ms) => {
  // promise는 생성되는 순간 작동하게 된다.
  // 이렇게 함수의 리턴값으로 사용하게 되면 생성되는 순간을 보다 쉽게 정할 수 있다.
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// 아래 두 함수는 같은 역할을 한다.

const getCheese_ = () => {
  return delay(1000).then(() => "🧀");
};

const getCheese = async () => {
  await delay(1000); // await은 async함수 안에서만 사용할 수 있다.
  return "🧀";
};
