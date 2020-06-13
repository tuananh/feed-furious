const fs = require('fs')
const Benchmark = require('benchmark')
const feedFurious = require('.')
const rssParser = require('rss-parser')

const suite = new Benchmark.Suite()

const xml = fs.readFileSync('./test/fixture/rss.xml', 'utf-8')

suite
    .add('feed-furious', function () {
        feedFurious.parse(xml)
    })
    .add('rss-parser', function () {
        const parser = new rssParser()
        parser.parseString(xml)
    })
    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target))
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'))
    })
    // run async
    .run({ async: true })
