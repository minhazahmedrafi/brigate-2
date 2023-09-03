AOS.init();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
    },
  });
});

function myFun() {
  let f1 = document.getElementById("f1");
  let f2 = document.getElementById("f2");
  let ind = document.getElementById("indicator");
  f1.style.transform = "translateX(-350px)";
  f2.style.transform = "translateX(-290px)";
  ind.style.marginLeft = "68%";
}

function myFun2() {
  let f1 = document.getElementById("f1");
  let f2 = document.getElementById("f2");
  let ind = document.getElementById("indicator");
  f1.style.transform = "translateX(20px)";
  f2.style.transform = "translateX(290px)";
  ind.style.marginLeft = "10.5%";
}
