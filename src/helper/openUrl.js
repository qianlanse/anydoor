const { exec } = require('child_process')

module.exports = url => {
    switch (process.platform) {
        case 'darwin':
            exec(`open ${url}`)
            break
        default:
            break
    }
}