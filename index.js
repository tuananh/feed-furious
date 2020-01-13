const { transform } = require('camaro')
const templates = require('./templates')

async function detectFeedType(xml) {
    const sample = await transform(xml, {
        rss: 'rss/channel/title',
        atom: 'feed/title'
    })

    if (sample.rss) return 'rss'
    if (sample.atom) return 'atom'
    throw new Error('unknown feed type')
}

async function parse(xml) {
    const type = await detectFeedType(xml)
    const result = await transform(xml, templates[type])
    return result
}

module.exports = { parse }
