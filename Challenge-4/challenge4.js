/**
 * Reverses the order of characters within parentheses in a given message.
 * @param {string} message - The original message containing parentheses.
 * @returns {string} The message with characters within parentheses reversed.
 */
const message = ''
function decode(message) {
    let start = message.lastIndexOf('(')
    while (start !== -1) {
        let end = message.indexOf(')', start)
        if (end === -1) {
            break
        }
        let content = message.substring(start + 1, end).split('').reverse().join('')
        message = message.substring(0, start) + content + message.substring(end + 1)
        start = message.lastIndexOf('(')
    }
    return message
}
module.exports = decode
