
const drugs = require('../dataset/data');

module.exports.data = drugs;

module.exports.checkAttribute = function (drug, attribute) {
	if (drugs[drug])
		return drugs[drug].attribute;
	throw new Error(`Drug ${drug} does not exist in the database`);
}