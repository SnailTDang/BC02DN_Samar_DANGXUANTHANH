// $(document).ready(function () {
//     $('.plan-item').hover(function () {
//         $('.plan-item').removeClass("plan-active");
//         $(this).addClass("plan-active");
//     });
//     $('.features-item').hover(function () {
//         $('.features-item').removeClass("features-active");
//         $(this).addClass("features-active");
//         $('.text-active, .heading-active, .icon-active').removeClass("hover-active");
//         $(this).find('.text-active, .heading-active, .icon-active').addClass('hover-active')
//     });
// });

const planItems = document.querySelectorAll(".plan-item");
const featureItems = document.querySelectorAll(".features-item");

planItems.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    for (let planItem of planItems) {
      planItem.classList.remove("plan-active");
    }
    this.classList.add("plan-active");
  });
});

featureItems.forEach((el) => {
  el.addEventListener("mouseenter", function () {
    for (let featureItem of featureItems) {
      featureItem.classList.remove("features-active");
      for (let itemChild of featureItem.querySelectorAll(".child-active")) {
        itemChild.classList.remove("hover-active");
      }
    }
    el.classList.add("features-active");
    for (let itemChild of el.querySelectorAll(".child-active")) {
      itemChild.classList.add("hover-active");
    }
  });
});
