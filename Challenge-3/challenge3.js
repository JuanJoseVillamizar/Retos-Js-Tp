/**
 * Find the first extra or missing step between the original and modified sequences.
 * @param {string} original - The original sequence of steps.
 * @param {string} modified - The modified sequence of steps.
 * @returns {string} The first extra or missing step, or an empty string if no difference is found.
 */

function findNaughtyStep(original, modified) {
    const minLength = Math.min(original.length, modified.length)
    for (let i = 0; i < minLength; i++) {
        if (original[i] !== modified[i]) {
            return original.length > modified.length ? original[i] : modified[i]
        }
}
if (original.length > modified.length){
    return original[minLength]
}
if(original.length < modified.length){
    return modified[minLength]   
}
return ''
}
module.exports = findNaughtyStep