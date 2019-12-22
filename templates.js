const rss = {
    title: 'rss/channel/title',
    link: 'rss/channel/link|rss/channel/atom:link',
    description: 'rss/channel/description',
    language: 'rss/channel/language',
    updated: 'rss/channel/lastBuildDate',
    published: 'rss/channel/pubDate',
    items: ['//item', {
        title: 'title',
        link: 'link',
        description: 'description',
        published: 'pubDate',
        id: 'guid',
        categories: ['category', '.']
    }]
}

const atom = {
    title: 'feed/title',
    updated: 'feed/updated',
    link: 'feed/link/@href',
    items: ['//entry', {
        id: 'id',
        title: 'title',
        published: 'published',
        description: 'summary',
        link: 'link',
        categories: ['category', '@term']
    }]
}

module.exports = { rss, atom }
