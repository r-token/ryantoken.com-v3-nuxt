'use strict'

exports.handler = async function(event, context) {
	const nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"]
	const verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"]
	const adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"]
	const adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"]
	const prepositions = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"]
	
	function generateRandomNumber() {
		return Math.floor(Math.random() * 10)
	}
	
	function generateSentence() {
		const rand1 = generateRandomNumber()
		const rand2 = generateRandomNumber()
		const rand3 = generateRandomNumber()
		const rand4 = generateRandomNumber()
		const rand5 = generateRandomNumber()
		const rand6 = generateRandomNumber()
		
		console.log('rand1:', rand1)
		
		const sentence = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + prepositions[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + "."
		
		return sentence
	}
	
	const randomSentence = generateSentence()
	
	return {
		statusCode: 200,
		body: { message: randomSentence }
	}
}