//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.//
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
var magicians = ['Hania', 'Ajmal', 'Kashif', 'Yousuf'];
show_magicians(magicians);
