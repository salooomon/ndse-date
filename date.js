
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const date = new Date();
const month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
const argv = yargs(hideBin(process.argv))

	.option("$0", {
		type: "string",
		description: "get date",
		// demandOption: true,
		default: () => {
			console.log(date);
			return date
		} 
	})

	.option("year", {
		alias: "y",
		type: "string",
		description: "get year",
		// demandOption: true,
		default: () => {
			console.log(date.getFullYear());
			return date.getFullYear()
		} 
	})

	.option("month", {
		alias: "m",
		type: "string",
		description: "get month",
		// demandOption: true,
		default: () => {
			console.log(date.getMonth() + 1);
			return date.getMonth() + 1
		} 
	})

	.option("date", {
		alias: "d",
		type: "string",
		description: "get date",
		demandOption: true,
		default: () => {
			console.log(`${date.getDay()} ${month[date.getMonth()]}`);
			return `${date.getDay()} ${month[date.getMonth()]}`
		} 
	})

	.argv
	console.log(argv)


