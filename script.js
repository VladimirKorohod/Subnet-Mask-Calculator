function num() {
  let mask = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N${i}`;
    const numValue = document.getElementById(elementId).value;
    mask += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask);
  return mask;
}
function num1() {
  let mask1 = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N1${i}`;
    const numValue = document.getElementById(elementId).value;
    mask1 += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask1);
  return mask1;
}
function num2() {
  let mask2 = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N2${i}`;
    const numValue = document.getElementById(elementId).value;
    mask2 += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask2);
  return mask2;
}
function calc() {
  const mask = num();
  let mask1;
  let mask2;
  if (mask == 255) {
    mask1 = num1();
  } else if (mask >= 1 && mask <= 254 && num1() > 0) {
    mask1 = 0;
    alert(
      "Error: Num 2 can't be calculated; Make inputs in Num 1 equal to '1'",
    );
  } else {
    mask1 = 0;
  }
  if (mask1 == 255) {
    mask2 = num2();
  } else if (mask1 >= 1 && mask1 <= 254 && num2() > 0) {
    mask2 = 0;
    alert("Error: Num 3 can't be calculated; Make inputs in Num 2 equal 2 '1'");
  } else {
    mask2 = 0;
  }
  const maskUlt = mask + "." + mask1 + "." + mask2 + ".0";
  const res = document.getElementById("line1");
  res.innerHTML = maskUlt;
  console.log(maskUlt);
  return maskUlt;
}

function num3() {
  let mask3 = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N3${i}`;
    const numValue = document.getElementById(elementId).value;
    mask3 += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask3);
  return mask3;
}
function num4() {
  let mask4 = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N4${i}`;
    const numValue = document.getElementById(elementId).value;
    mask4 += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask4);
  return mask4;
}
function num5() {
  let mask5 = 0;
  let multiplier = 128;
  for (let i = 1; i <= 8; i++) {
    const elementId = `N5${i}`;
    const numValue = document.getElementById(elementId).value;
    mask5 += numValue * multiplier;
    multiplier /= 2;
  }
  console.log(mask5);
  return mask5;
}
function calc1() {
  const mask3 = num3();
  const mask4 = num4();
  const mask5 = num5();

  const maskUlt2 = mask3 + "." + mask4 + "." + mask5 + ".0";
  const res = document.getElementById("line2");
  res.innerHTML = maskUlt2;
  console.log(maskUlt2);
  return maskUlt2;
}

function calc2() {
  const BC1 = num3();
  const BC2 = num4();
  const BC3 = 255 - num2();

  const BCu = BC1 + "." + BC2 + "." + BC3 + ".255";
  const res = document.getElementById("line3");
  res.innerHTML = BCu;
  console.log(BCu);
}
