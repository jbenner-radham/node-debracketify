'use strict';

/**
 * Remove encompassing square brackets from a string.
 *
 * @param {String} value
 * @returns {String}
 */
module.exports = function debracketify(value = '') {
    if (typeof value !== 'string') {
        return value;
    }

    if (!value.startsWith('[') || !value.endsWith(']')) {
        return value;
    }

    return value.slice(1, -1);
};
