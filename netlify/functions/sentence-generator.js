'use strict'

exports.handler = async function(event, context) {
	const nouns = ["bird", "woman", "man", "gator", "duck", "teacher", "dinosaur", "professor", "hamster", "dog", "dragon", "tiger", "track star"]
	const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed", "burned", "ducked", "punched"]
	const adjectives = ["handsome", "lazy", "professional", "lovely", "sad", "rough", "soft", "hot", "fascinating", "slimy", "mature", "young", "platitudinous"]
	const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately", "smoothly", "aggressively", "lazily"]
	const prepositions = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards", "against", "under", "off"]
	
	function generateRandomNumber() {
		return Math.floor(Math.random() * 13)
	}
	
	function generateSentence() {
		const rand1 = generateRandomNumber()
		const rand2 = generateRandomNumber()
		const rand3 = generateRandomNumber()
		const rand4 = generateRandomNumber()
		const rand5 = generateRandomNumber()
		
		const sentence = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + prepositions[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + "."
		
		return sentence
	}
	
	const randomSentence = generateSentence()
	
	return {
		statusCode: 200,
		body: JSON.stringify({ message: randomSentence })
	}
}