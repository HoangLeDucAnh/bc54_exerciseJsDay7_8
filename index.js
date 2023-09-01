let arr = [];
let arr1 = [];
function makeArr() {
  let num = document.querySelector("#num").value * 1;
  arr.push(num);
  let text = arr.join(", ");
  document.querySelector("#renderArr").innerText = text;
}
function makeArr1() {
  let num = document.querySelector("#num1").value * 1;
  arr1.push(num);
  let text = arr1.join(", ");
  document.querySelector("#renderArr1").innerText = text;
}
function findInteger(array) {
  let count = 0;
  array.forEach((num) => {
    if (Number.isInteger(num)) {
      count++;
    }
  });
  document.querySelector(
    "#slInteger"
  ).innerHTML = `Có ${count} số nguyên trong mảng`;
}
function countAmDuong(arr) {
  let countDuong = 0;
  let countAm = 0;
  arr.forEach((num) => {
    if (num > 0) {
      countDuong++;
    } else {
      countAm++;
    }
  });
  if (countAm > countDuong) {
    document.querySelector(
      "#ssAmDuong"
    ).innerHTML = `SL số âm lớn hơn sl số dương`;
  } else if (countAm === countDuong) {
    document.querySelector(
      "#ssAmDuong"
    ).innerHTML = `SL số dương bằng sl số âm`;
  } else {
    document.querySelector(
      "#ssAmDuong"
    ).innerHTML = `SL số dương lớn hơn sl số âm`;
  }
}

function calTong(arr) {
  let tongDuong = 0;
  arr.forEach((num) => {
    if (num > 0) {
      tongDuong += num;
    }
  });
  document.querySelector(
    "#tongDuong"
  ).innerHTML = `Tổng các số dương: ${tongDuong}`;
}

function findMin(arr) {
  let min = arr[0];
  arr.forEach((num) => {
    if (min > num) {
      min = num;
    }
  });
  document.querySelector("#minNum").innerHTML = `Số nhỏ nhất: ${min}`;
}

function findMinDuong(arr) {
  let minDuong = arr[0];
  arr.forEach((num) => {
    if (num > 0) {
      if (minDuong > num) {
        minDuong = num;
      }
    }
  });
  document.querySelector(
    "#minNumDuong"
  ).innerHTML = `Số dương nhỏ nhất: ${minDuong}`;
}

function countDuong(arr) {
  let countDuong = 0;
  arr.forEach((num) => {
    if (num > 0) {
      countDuong++;
    }
  });
  document.querySelector("#slDuong").innerHTML = `Có ${countDuong} số dương`;
}

function findChanCuoi(arr) {
  let filterChan = arr.filter((num) => {
    if (num % 2 === 0) {
      return num;
    }
  });
  let soChanCuoi =
    filterChan.length === 0 ? -1 : filterChan[filterChan.length - 1];
  document.querySelector(
    "#chanCuoi"
  ).innerHTML = `Số ${soChanCuoi} là số chẵn cuối cùng`;
}

function swap(array) {
  let oldArr = array.join(", ");
  let n = array.length;
  let swap1 = document.querySelector("#swap1").value * 1;
  let swap2 = document.querySelector("#swap2").value * 1;
  if (swap1 > n - 1 || swap2 > n - 1) {
    alert("Mời nhập lại vị trí cần đổi chỗ");
    return 0;
  }
  if (n > 2) {
    let temp = array[swap1];
    array[swap1] = array[swap2];
    array[swap2] = temp;
  }
  let newArr = array.join(", ");
  document.querySelector(
    "#renderAfterSwap"
  ).innerHTML = `Mảng trước khi swap ${oldArr}<br>
  Mảng sau khi swap ${newArr}`;
}

function arrangeUp(array) {
  let n = array.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  let result = array.join(", ");
  document.querySelector(
    "#arrangeUp"
  ).innerHTML = `Mảng theo thứ tự tăng dần ${result} `;
}

function timSoNguyenTo(array) {
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  for (const num of array) {
    if (isPrime(num)) {
      return num;
    }
  }
  return -1;
}

function inPrimeNum(array) {
  document.querySelector("#primeNum").innerHTML = `Số ${timSoNguyenTo(
    array
  )} là số nguyên tố đầu tiên`;
}
