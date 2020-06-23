// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }
// }
//this function stores our state
const storeState = () => {
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateChanger = storeState();

//this is a function factory. we can easily create more specific functions that alter a plant's soil,water and light to varying degrees.
  
const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || 0) + value
    });
  };
};

//we creat two functions using our function factory. we could easily create many more.

// const feed = changeState("soil");
const blueFood = changeState("soil")(5);
const filteredWater = changeState("water")(5);
const addSun = changeState("light")(5);
//feed(5)(plant)
$(document).ready(function () {
  
  //this function has side effects because we are using jquery. Manipulating the DOM will always be a side effect.
  $("#feed").click(function () {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
  });
  $("#water").click(function () {
    const newState = stateChanger(filteredWater);
    $('#water-value').text(newState.water);
  });
  $("#light").click(function () {
    const newState = stateChanger(addSun);
    $('#light-value').text(newState.light);
  });
});







