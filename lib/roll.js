export function roll(sides, die, times_rolled) {
	let results = [];
	for (let i = 0; i < times_rolled; i++) {
		let sum = 0;
		for (let j = 0; j < die; j++) {
			sum += Math.floor(Math.random() * (sides-1+1) + 1);
		}
		results.push(sum);
	}
	return {"sides": sides, "die": die, "rolls": times_rolled, "results": results};
}
