const Benchmark = require('benchmark')
const feedFurious = require('.')
const rssParser = require('rss-parser')

const suite = new Benchmark.Suite()

const rss =
    `
<?xml version="1.0"?>
<rss version="2.0">
   <channel>
      <title>Liftoff News</title>
      <link>http://liftoff.msfc.nasa.gov/</link>
      <description>Liftoff to Space Exploration.</description>
      <language>en-us</language>
      <pubDate>Tue, 10 Jun 2003 04:00:00 GMT</pubDate>
      <lastBuildDate>Tue, 10 Jun 2003 09:41:01 GMT</lastBuildDate>
      <docs>http://blogs.law.harvard.edu/tech/rss</docs>
      <generator>Weblog Editor 2.0</generator>
      <managingEditor>editor@example.com</managingEditor>
      <webMaster>webmaster@example.com</webMaster>` +
    `<item>
         <title>Star City</title>
         <link>http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp</link>
         <description>How do Americans get ready to work with Russians aboard the International Space Station? They take a crash course in culture, language and protocol at Russia's &lt;a href="http://howe.iki.rssi.ru/GCTC/gctc_e.htm"&gt;Star City&lt;/a&gt;.</description>
         <pubDate>Tue, 03 Jun 2003 09:39:21 GMT</pubDate>
         <guid>http://liftoff.msfc.nasa.gov/2003/06/03.html#item573</guid>
      </item>`.repeat(100) +
    `</channel>
</rss>`

const ITERATIONS = 2000
async function addBench(name, fn, async = false) {
    const start = process.hrtime()
    let diff = null
    if (async) {
        let all = []
        for (let i = 0; i < ITERATIONS; i++) {
            all.push(fn())
        }
        await Promise.all(all)
    } else {
        for (let i = 0; i < ITERATIONS; i++) {
            fn()
        }
    }
    diff = process.hrtime(start)
    console.log(
        `${name} finishes ${ITERATIONS} iterations in ${(diff[0] * 1e9 + diff[1]) / 1e6} milliseconds`
    )
}

async function bench() {
    const async = true
    const sync = false
    const parser = new rssParser()

    await addBench('feed-furious', () => feedFurious.parse(rss), async)
    await addBench('rss-parser', () => parser.parseString(rss), sync)
}

bench()
