/**
 * Find the gifts that can be made with the given materials.
 * @param {Array<string>} giftList - The list of gifts.
 * @param {string} materialsAvailable - The list of available materials.
 * @returns {Array<string>} The gifts that can be made with the available materials.
 */

const gifts = []
const materials = ''

function manufacture(gifts, materials) {
    const materialsSet = new Set(materials)
    const giftsCanBeMade  = new Set()
    for (let gift of gifts) {
        let canBeMade = true
        for (let letter of gift) {
            if (!materialsSet.has(letter)) {
                canBeMade = false
                break
            }
        }
        if (canBeMade) {
            giftsCanBeMade .add(gift)
        }
    }
    return Array.from(giftsCanBeMade)
}
manufacture(gifts, materials)
module.exports = manufacture