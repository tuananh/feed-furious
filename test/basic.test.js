const { parse } = require('../')
const fs = require('fs')
const test = require('tape')

test('test simple atom feed', async (t) => {
    const xml = '<feed><title><![CDATA[Hello]]> <![CDATA[World]]></title><entry>' +
    '<link>http://example.com/1</link>' +
    '<content><![CDATA[Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius mattis convallis. ' +
    'Praesent a massa arcu. Duis nunc erat, tincidunt nec ligula et, lacinia ultricies neque. Morbi at ' +
    'dolor sem. Sed luctus, nunc non ornare viverra, elit leo convallis ex, in lobortis velit turpis vitae ' +
    'dui. Praesent aliquam diam sed erat sodales ullamcorper.]]>' +
    '<![CDATA[Pellentesque pulvinar massa et efficitur porta. ' +
    'Aenean volutpat finibus consectetur. Integer aliquet rutrum dui, ut cursus dui suscipit eu. Nullam eu ' +
    'erat sit amet elit ultrices rhoncus. Aenean sed felis massa. Donec rutrum vehicula leo vitae dapibus. ' +
    'Donec eget placerat lacus.]]></content>' +
    '</entry></feed>'

    const result = await parse(xml)
    t.equal(result.title, 'HelloWorld', 'title should be HelloWorld')
    t.equal(result.items[0].link, 'http://example.com/1', 'link should be http://example.com/1')

    t.end()
})

test('test more complicated atom feed', async (t) => {
    const xml = fs.readFileSync(__dirname + '/fixture/atom.xml', 'utf-8')
    const result = await parse(xml)

    t.equal(result.title, 'dive into mark', 'title should be dive into mark')
    t.equal(result.link, 'http://example.org/', 'link should be http://example.org/')

    t.end()
})

test('test more complicated rss feed', async (t) => {
    const xml = fs.readFileSync(__dirname + '/fixture/rss.xml', 'utf-8')
    const result = await parse(xml)

    t.equal(result.title, 'Liftoff News', 'title should be Liftoff News')
    t.equal(result.link, 'http://liftoff.msfc.nasa.gov/', 'link should be http://liftoff.msfc.nasa.gov/')

    t.end()
})
