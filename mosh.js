// Factory Function 
  function factoryCircle (radius) {
    return {
      radius,
      draw: function () {
        console.log("Factory Fucntion. ");
      }
    }
  }

  const circle1 = factoryCircle(10);
  console.log(circle1);
  console.log (circle1.draw);


// Constractor Function
function ConstractorCircle (radius1) {
  this.radius1 = radius1;
  this.draw = function (text) {
    console.log('Constructor Function.')
  }
}

const circle2 = new ConstractorCircle(20) 
// console.log(circle2);
// console.log(circle2.draw);