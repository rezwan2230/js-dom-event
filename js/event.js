
// option two
function makepurple() {
    document.body.style.backgroundColor = 'purple'
}
function hudaiKalaBana() {
    document.body.style.backgroundColor = 'black'
}


// option three
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

const orange = document.getElementById('org')
orange.onclick = makeOrange;
function makeOrange() {
    document.body.style.backgroundColor = 'orange'
}


// option Four
const makeAqua = document.getElementById('make-Aqua')
makeAqua.onclick = function wantToAqua() { document.body.style.backgroundColor = 'aqua' }


// option Five
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', function makePink() {
    document.body.style.background = 'pink'
})


// option Five
document.getElementById('make-goldenrod').addEventListener('click', function(){document.body.style.backgroundColor = 'goldenrod'})
      