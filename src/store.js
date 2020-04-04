const { v4: uuid4 } = require('uuid')
uuid4();

const bookmarks = [
    {
        id: uuid4(),
        title: 'Google',
        url: 'http://www.google.com',
        description: 'Best search engine on the planet',
        rating: '5'
    },
    {
        id: uuid4(),
        title: 'Yelp',
        url: 'http://www.yelp.com',
        description: 'Reviews to inform potential consumers'
    }
]

module.exports = { bookmarks }