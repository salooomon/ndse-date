const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

function getDate(argv) {
	const {year, month, date} = argv;
	const action = argv._[0];
	
	const newDate = new Date();
	const realYear = newDate.getFullYear();
	const realMonth = newDate.getMonth() + 1;
	const dayData = newDate.getDate();

	function toString(num) {
		return num < 10 ? `0${num}` : num;
	}

	switch(action) {
		case "current" :
			if(year != null || month != null || date != null) {
				if(year) {
					return realYear
				} else if(month) {
					return toString(realMonth)
				} else if(date) {
					return toString(dayData)
				}
			} else {
				return `${realYear}-${toString(realMonth)}-${toString(dayData)} ${toString(newDate.getHours())}-${toString(newDate.getMinutes())}`
			}
			break
			case "add" : 
			if(year == null && month == null && date == null) throw new Error("parameters not passed!")
			if(year) {
				return realYear + year
			} else if(month) {
				return toString(realMonth + month)
			} else if(date) {
				return toString(dayData + date)
			}
			break
			case "sub" : 
			if(year == null && month == null && date == null) throw new Error("parameters not passed!")
			if(year) {
				return realYear - year
			} else if(month) {
				return toString(realMonth - month)
			} else if(date) {
				return toString(dayData - date)
			}
			break
	}
}
const argv = yargs(hideBin(process.argv))
.command(
	"current [--year|-y] [--month|-m] [--date|-d]",
	"print current date in ISO format",
	function (yargs) {
			return yargs
					.options({
						"year": {
							alias: "y",
							describe: "Get year",
							type: "boolean",
						},
						"month": {
							alias: "m",
							describe: "Get month",
							type: "boolean",
						},
						"date": {
							alias: "d",
							describe: "Get day of the month",
							type: "boolean",
						}
					})
	},
	function (argv) {
		console.log(getDate(argv))
	},
)
.command(
	"add [--year|-y] [--month|-m] [--date|-d]",
	"add date and print",
	function (yargs) {
			return yargs
					.options({
						"year": {
							alias: "y",
							describe: "Add years",
							type: "number",
						},
						"month": {
							alias: "m",
							describe: "Add months",
							type: "number",
						},
						"date": {
							alias: "d",
							describe: "Add days",
							type: "number",
						}
					})
	},
	function (argv) {
		console.log(getDate(argv))
	},
)
.command(
	"sub [--year|-y] [--month|-m] [--date|-d]",
	"subtract date and print",
	function (yargs) {
			return yargs
					.options({
						"year": {
							alias: "y",
							describe: "Subtract years",
							type: "number",
						},
						"month": {
							alias: "m",
							describe: "Subtract months",
							type: "number",
						},
						"date": {
							alias: "d",
							describe: "Subtract days",
							type: "number",
						}
					})
	},
	function (argv) {
			console.log(getDate(argv))
	},
)
.argv
console.log(argv)

