
'use strict'

const drugs = require('../dataset/data');

module.exports.data = drugs;

module.exports.getAttribute = function (key, attribute) {
	const drug = drugs[key];
	if (drug)
		return drug[attribute];
	throw new Error(`Drug ${key} does not exist in the database`);
}