const transform = require('camaro')
const templates = require('./templates')

function detectFeedType(xml) {
    if (xml.indexOf('<rss') !== -1) return 'rss'
    if (xml.indexOf('<feed') !== -1) return 'atom'
    throw new Error('unknown feed type')
}

function parse(xml) {
    const type = detectFeedType(xml)
    return transform(xml, templates[type])
}

module.exports = { parse }
