
//this function stores our state
const storeState = (initialState) => {
  let currentState = initialState;
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = { ...newState };
    return newState;
  };
};

const stateChanger = storeState({name:"",soil: 0,water:0,light:0});
const stateChanger2 = storeState({name:"",soil: 0,water:0,light:0});




//this is a function factory. we can easily create more specific functions that alter a plant's soil,water and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] ) + value
    });
  };
};

const changeStateString = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || value ) 
    });
  };
};

//we creat two functions using our function factory. we could easily create many more.


const blueFood = changeState("soil")(5);
const filteredWater = changeState("water")(5);
const addSun = changeState("light")(5);

//feed(5)(plant)
$(document).ready(function () {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    let name = $("input#plant").val();
    const addPlant = changeStateString("name")(name);
    const newState = stateChanger(addPlant);
    $('#plant-value').text(newState.name);
    console.log(newState);
  });
  //this function has side effects because we are using jquery. Manipulating the DOM will always be a side effect.
  $("#feed").click(function () {
    const newState = stateChanger(blueFood);
    $('#soil-value').text(newState.soil);
    console.log(newState);
  });
  $("#water").click(function () {
    const newState = stateChanger(filteredWater);
    $('#water-value').text(newState.water);
    console.log(newState);
  });
  $("#light").click(function () {
    const newState = stateChanger(addSun);
    $('#light-value').text(newState.light);
    console.log(newState);
  });
  $("#reset").click(function () {
    const newPlant = { name: "", soil: 0, water: 0, light: 0 };
    const newState = newPlant;
    $('#newP-name').text(newState.name);
    $('#newP-water').text(newState.water);
    $('#newP-soil').text(newState.soil);
    $('#newP-light').text(newState.light);
    console.log(newState);
  });
  $("form#form2").submit(function(event) {
    event.preventDefault();
    let name = $("input#newPlant").val();
    const newPName = changeStateString("name")(name);
    const newState = stateChanger2(newPName);
    $('#newP-name').text(newState.name);
    console.log(newState);
  });
  $("#nFeed").click(function () {
    const newState = stateChanger2(blueFood);
    $('#newP-soil').text(newState.soil);
    console.log(newState);
  });
  $("#nWater").click(function () {
    const newState = stateChanger2(filteredWater);
    $('#newP-water').text(newState.water);
    console.log(newState);
  });
  $("#nLight").click(function () {
    const newState = stateChanger2(addSun);
    $('#newP-light').text(newState.light);
    console.log(newState);
  });
});







//function sort(inputNumbers) {

// $(document).ready(function() {
//   $("form").submit(function(event) {
//     event.preventDefault();
//     var inputNumbers = $("#count").val();
//     var result = sort(inputNumbers);
//    console.log(result);
//       $(".jumbotron").show();
//       $("#result").text(result);

    
//   });
// });
