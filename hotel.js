let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides1.length) {slideIndex1 = 1}
  slides1[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 1500); // Change image every 1.5 seconds
}

let slideIndex2 = 1;
showSlides2();

function showSlides2() {
  let i;
  let slides2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {slideIndex2 = 1}
  slides2[slideIndex2-1].style.display = "block";
  setTimeout(showSlides2, 1500); // Change image every 1.5 seconds
}

let slideIndex3 = 2;
showSlides3();

function showSlides3() {
  let i;
  let slides3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  slideIndex3++;
  if (slideIndex3 > slides3.length) {slideIndex3 = 1}
  slides3[slideIndex3-1].style.display = "block";
  setTimeout(showSlides3, 1500); // Change image every 1.5 seconds
}

let slideIndex4 = 3;
showSlides4();

function showSlides4() {
  let i;
  let slides4 = document.getElementsByClassName("mySlides4");
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  slideIndex4++;
  if (slideIndex4 > slides4.length) {slideIndex4 = 1}
  slides4[slideIndex4-1].style.display = "block";
  setTimeout(showSlides4, 1500); // Change image every 1.5 seconds
}

let slideIndex5 = 4;
showSlides5();

function showSlides5() {
  let i;
  let slides5 = document.getElementsByClassName("mySlides5");
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  slideIndex5++;
  if (slideIndex5 > slides5.length) {slideIndex5 = 1}
  slides5[slideIndex5-1].style.display = "block";
  setTimeout(showSlides5, 1500); // Change image every 1.5 seconds
}