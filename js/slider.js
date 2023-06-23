const sliderBtnRef = document.querySelector(".slider-container");
const forwardBtnRef = document.querySelector(
  'button[data-slide-action="forward"'
);
const backBtnRef = document.querySelector('button[data-slide-action="back"');
const heroSectionRef = document.querySelector(".hero-section");
const heroWrapperRef = document.querySelector(".hero-wrapper");
const sliderNavigatorRef = document.querySelector(".slider-navigator");

const sliderLines = [
  document.querySelector("#slider-line-wrapper1"),
  document.querySelector("#slider-line-wrapper2"),
  document.querySelector("#slider-line-wrapper3"),
];

const NUMBER_OF_SLIDERS = 3;
let currentSliderNumber = 1;

sliderBtnRef.addEventListener("click", onSliderBtnClick);
sliderNavigatorRef.addEventListener("change", onSliderNavChange);

function onSliderBtnClick(event) {
  const currentEl = event.target;

  if (
    currentEl.nodeName !== "BUTTON" ||
    ![...currentEl.classList].includes("slider-active")
  ) {
    return;
  }

  switch (currentEl.dataset.slideAction) {
    case "forward":
      changeImg(currentSliderNumber + 1);
      break;
    case "back":
      changeImg(currentSliderNumber - 1);
      break;
  }

  btnActivationAndDeactivation();
  updateSliderNavigator(sliderLines[currentSliderNumber - 1]);
}

function onSliderNavChange(event) {
  const currentEl = event.target;

  if (currentEl.nodeName !== "INPUT") {
    return;
  }

  changeImg(Number(currentEl.value));
  btnActivationAndDeactivation();
}

function changeImg(newSliderNumber) {
  heroSectionRef.classList.replace(
    `slider${currentSliderNumber}`,
    `slider${newSliderNumber}`
  );

  heroWrapperRef.classList.replace(
    `slider${currentSliderNumber}`,
    `slider${newSliderNumber}`
  );

  currentSliderNumber = newSliderNumber;
}

function btnActivationAndDeactivation() {
  if (currentSliderNumber === 1) {
    makeInactive(backBtnRef);
    makeActive(forwardBtnRef);
  } else if (currentSliderNumber < NUMBER_OF_SLIDERS) {
    makeActive(backBtnRef);
    makeActive(forwardBtnRef);
  } else {
    makeActive(backBtnRef);
    makeInactive(forwardBtnRef);
  }
}

function makeInactive(btn) {
  btn.classList.remove("slider-active");
  btn.parentNode.classList.remove("slider-active");
}

function makeActive(btn) {
  btn.classList.add("slider-active");
  btn.parentNode.classList.add("slider-active");
}

function updateSliderNavigator(sliderLine) {
  sliderLine.checked = true;
}
