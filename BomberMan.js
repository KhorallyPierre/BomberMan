
// get the image and put into a variable (HELLOBernard)
const morty = document.querySelector('#morty')
// create a variable to keep track of the y axis
let vertical = 0
// create a variable to keep track of the x axis
let horizontal = 0

// create a function that moves the image (don't forget the e[is short for event] object)

function makeMortyMove(e){
  if (e.keyCode === 39){
    horizontal += 17
    morty.style.marginLeft = `${horizontal}px`
  } else if (e.keyCode === 37){
    horizontal -= 17
    morty.style.marginLeft = `${horizontal}px`
  } else if (e.keyCode === 40){
    vertical += 17
    morty.style.marginTop = `${vertical}px`
  } else if (e.keyCode === 38){
    vertical -= 17
    morty.style.marginTop = `${vertical}px`
  }
}

window.addEventListener('keydown', makeMortyMove)

// create a conditional that checks to see which arrow key the user hit
    // if the key the user pressed is 39 aka right then...
        // add 8 to horizontal variable
        // and update the marginLeft of image
    // else if key the user pressed is 37 aka left then...
        // subtract 8 from horizontal
        // horizontal = horizontal - 8
        // and update the marginLeft of image
    // else if key the user pressed is 40 aka down then...
        // subtract 8 from vertical
        // and update the marginTop of image
    // else if key the user pressed is 38 aka up then...
        // add 8 to vertical
        // and update the marginTop of image
// Put an event listener on the window object and listen for a keydown
// When keydown is heard run function
