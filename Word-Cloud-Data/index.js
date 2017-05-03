const wordCloud = (str) => {
    const resultMap = new Map()
    const wordArray = str.split(' ')

    wordArray.forEach((word) => {
    	resultMap.set(checkForPunc(word.toLowerCase()), 1)
    })

    return resultMap
}

const checkForPunc = (word) => {
	if (!word.charAt(word.length - 1).match(/[a-z]/i)) {
        let checkedWord = word.slice(0, word.length - 1)
        return checkedWord
        }
    return word
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(wordCloud("After beating the eggs, Dana read the next step:"));
// "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."
// "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."
// "The bill came to five dollars."
