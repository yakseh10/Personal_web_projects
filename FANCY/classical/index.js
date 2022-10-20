// object functions
// ************************************//

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function(){
//         console.log('yakseh 10');
//     }
// };
// circle.draw();

// Factory function
//******************************//
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}
const circle = createCircle(1);
circle.draw();
// constructor function//
// ************************//

function Circle(radius){
    this.radius= radius;
    this.draw= function(){
        console.log('draw');
    }
}
const another = new Circle(1);
// constuctor property
another.constructor;
// functions are objects
let person = function(){
    name = yaya; 
    age= 21;
    rase = black;
    
}