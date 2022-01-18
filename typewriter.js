const sentence = "hello there from lighthouse labs";

const animation = function (sentence) {
	let splits = sentence.split("");
	let index = 0;
	for (const char of splits) {
		setTimeout(() => process.stdout.write(char), 50 * index);
		index++;
	}
};

animation(sentence);
