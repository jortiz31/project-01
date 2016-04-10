/* hard-coded data! */
var sampleShoes = [];
sampleShoes.push({
             shoeStyle: 'AJ 1',
             brand: 'NIKE',
             releaseDate: '1985, September 15',
             colorWay: [ 'Black', 'Red' ]
           });
sampleShoes.push({
            shoeStyle: 'AJ 13',
            brand: 'NIKE',
            releaseDate: '1997, September 15',
            colorWay: [ 'Black', 'Red', 'White/True' ]
});



$(document).ready(function() {
  console.log('app.js loaded!');
});



function renderShoe(shoe) {
  console.log('rendering shoe:', shoe);

}
