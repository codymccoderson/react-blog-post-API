const db = require('./conn.js');


class Posts {
    constructor(id, title, content, author_id) {

        this.id = id;
        this.title = title;
        this.content = content;
        this.author_id = author_id;

    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM posts;`);
            return response; 
        } catch(error) {
          return error.message;
        }
    }

    static async getPostById(p_id) {
        try {
            const response = await db.one(`SELECT * FROM posts where id = ${p_id}`);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}

module.exports = Posts;
