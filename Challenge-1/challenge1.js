/**
 * Find the first repeated gift in a gift list.
 * @param {Array} gifts - The gift list..
 * @returns {(number|string)} The first repeated gift, or -1 if there are no repeated gifts.
 */
function findFirstRepeated(gifts){
    const newGifts = new Set()
    for(let gift of gifts){
    if (newGifts.has(gift)){ 
        return gift 
    }
    newGifts.add(gift)
}
return  -1 

}

findFirstRepeated(gifts)

module.exports = findFirstRepeated

