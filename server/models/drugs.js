/*!
 * ./server/models/drugs.js
 *
 * Declares the model that wraps the JSON dataset of medicines
 * Date: August 20th, 2017
 */

'use strict'

const drugs = require('../dataset/data');

module.exports.data = drugs;

// function to return any given attribute for specified key
module.exports.getAttribute = function (key, attribute) {
    const drug = drugs[key];
    if (drug)
        return drug[attribute];
    throw new Error(`Drug ${key} does not exist in the database`);
}