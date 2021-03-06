//#1: Making a service object involves making an object that we'll export

//#2: Putting methods on this object that store our transactions 
//1st method for getting all articles => getAllBookmarks (service objects method for READ part of CRUD)
const BookmarksService = {
    getAllBookmarks(knex) {
        return knex.select('*').from('bookmarks')
    },
    //creating a method & having it return a promise => ADDING Bookmarks
    insertBookmark(knex, newBookmark) {
        //return Promise.resolve({})
     return knex
         .insert(newBookmark)
         .into('bookmarks')
         .returning('*')
         .then(rows => {
             return rows[0]
         })
    },
    // GETTING A Bookmark BY ID 
    getById(knex, id) {
        return knex('bookmarks').select('*').where('id', id).first();
    },
    //DELETING A Bookmark
    deleteBookmark(knex, id) {
     return knex('bookmarks')
          .where({ id })
          .delete()
     },
     //UPDATING A Bookmark
     
     updateBookmark(knex, id, newBookmarkFields) {
         return knex('bookmarks')
             .where({ id })
             .update(newBookmarkFields)
     }
 }
 module.exports = BookmarksService