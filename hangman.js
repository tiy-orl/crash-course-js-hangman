var startButton = document.querySelector("#new-game")
var word
var wordSpace = document.querySelector("#current-word")
var count

startButton.addEventListener("click", function(){
  // get the first word in words to show up
  // in the figure element

  word = "trapper"

  var blanks = ""
  for (i = 0; i < word.length; i++ ) {
    blanks = blanks + "_"
  }
  wordSpace.innerText = blanks
  count = 0
})

var guessButton = document.querySelector("#guess")

var guesses = []

guessButton.addEventListener("click", function(){
  var input = document.querySelector("#letter")
  var guessedLetter = input.value
  guesses.push(guessedLetter)
  var blanks = ""
  for (i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      blanks = blanks + word[i]
    } else {
      blanks = blanks + "_"
    }
  }
  if (!word.includes(guessedLetter)){
    count++
  }
  wordSpace.innerText = blanks

  var guessesSpace = document.querySelector("#guesses")
  guessesSpace.innerText = guesses

  document.querySelector("#missed").innerText = count
})
