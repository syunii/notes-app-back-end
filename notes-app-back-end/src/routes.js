// Muhammad Ramdani Nugraha
// 3220009
// uts cloud computing

const { addBookHandler, getBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBookByIdHandler } = require("./handler")

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooksHandler,   
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBookByIdHandler,   
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookByIdHandler,   
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookByIdHandler,   
    },
]

module.exports = routes