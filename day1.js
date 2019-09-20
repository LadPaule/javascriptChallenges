const pi = (22/7); // pie is globally declared

function calcArea(radius){
   const pi = 4; // pie is locally declared
   var area = (pi*radius*radius);
   console.log("The Area of a circle is : "+ area);
}
calcArea(10)
function area_of_a_semiCircle(r){
   var area = (pi*0.5*r*r);
   console.log("The area of the semi circle is :"+ area);
}
area_of_a_semiCircle(10)