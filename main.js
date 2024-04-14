const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// console.log(animation1);

 
/* Callback Hell Method Below

function animateElement(element, animation) {
  return new Promise((resolve, reject) => {
    const animationPromise = element.animate(animation.effect, animation.timing);
    animationPromise.onfinish = resolve;
    animationPromise.onerror = reject;
  });
}

animateElement(alice1, { effect: aliceTumbling, timing: aliceTiming })
  .then(() => {
    return animateElement(alice2, { effect: aliceTumbling, timing: aliceTiming });
  })
  .then(() => {
    return animateElement(alice3, { effect: aliceTumbling, timing: aliceTiming });
  })
  .catch(error => {
    console.error("Animation failed:", error);
  }); 
  */


  /* Promise Chain Method

const animateElement = (element, animation) => {
  return new Promise((resolve, reject) => {
    const animationPromise = element.animate(animation.effect, animation.timing);
    animationPromise.onfinish = resolve;
    animationPromise.onerror = reject;
  });
};

animateElement(alice1, { effect: aliceTumbling, timing: aliceTiming })
  .then(() => animateElement(alice2, { effect: aliceTumbling, timing: aliceTiming }))
  .then(() => animateElement(alice3, { effect: aliceTumbling, timing: aliceTiming }))
  .catch(error => console.error("Animation failed:", error));
  */


  /* Await and Async Method

  const animateElement = (element, animation) => {
    return new Promise((resolve, reject) => {
      const animationPromise = element.animate(animation.effect, animation.timing);
      animationPromise.onfinish = resolve;
      animationPromise.onerror = reject;
    });
  };
  
  const animateAllElements = async () => {
    try {
      await animateElement(alice1, { effect: aliceTumbling, timing: aliceTiming });
      await animateElement(alice2, { effect: aliceTumbling, timing: aliceTiming });
      await animateElement(alice3, { effect: aliceTumbling, timing: aliceTiming });
    } catch (error) {
      console.error("Animation failed:", error);
    }
  };
  
  animateAllElements();
  */