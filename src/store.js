const uuid = require('uuid/v4')

const bookmarks = [
    {
        id: uuid(),
        title: 'Google',
        url: 'http://www.google.com',
        description: 'Best search engine on the planet',
        rating: '5'
    },
    {
        id: uuid(),
        title: 'Yelp',
        url: 'http://www.yelp.com',
        description: 'Reviews to inform potential consumers'
    }
]

module.exports = { bookmarks }