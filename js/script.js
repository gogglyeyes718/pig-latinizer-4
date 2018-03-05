
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
$( document ).ready(function() {
	$('#submit').click(function(){
		var word = $('#input').val();
		var piglatin = uppercaser(word);
		$('#display').text(piglatin);
	});
});

function uppercaser(sentence) {
    var words = sentence.split(" ");
    var uppercasedWords = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        uppercasedWords = uppercasedWords + " " + wordToPigLatin(word);
    }
    return uppercasedWords;
}

function startsWithAVowel(word) {
  var firstLetter = word[0].toLowerCase();
  if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
    return true;
  } else {
    return false;
  }
}

function wordToPigLatin(word) {
	var result;
	if (startsWithAVowel(word)) {
		result = word + "ay";
	} else {
		result = word.slice(1) + word[0] + "ay";
	}
	return result;
}



// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 




// Create the sentenceToPigLatin function that takes a sentence as a parameter

	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance

