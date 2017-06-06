const transform = require('camaro')
const templates = require('./templates')

function detectFeedType(xml) {
    const sample = transform(xml, {
        rss: 'rss/channel/title',
        atom: 'feed/title'
    })

    if (sample.rss) return 'rss'
    if (sample.atom) return 'atom'
    throw new Error('unknown feed type')
}

function parse(xml) {
    const type = detectFeedType(xml)
    return transform(xml, templates[type])
}

module.exports = { parse }
