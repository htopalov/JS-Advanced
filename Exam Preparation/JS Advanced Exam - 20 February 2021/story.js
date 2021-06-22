class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = new Map();
        this._likes = [];
    }
    get likes() {
        if (this._likes.length == 0) {

            return `${this.title} has 0 likes`;

        } else if (this._likes.length == 1) {

            return `${this._likes[0]} likes this story!`;

        } else {

            let username = this._likes[0];
            return `${username} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username == this.creator) {
            throw new Error("You can't like your own story!");
        } else if (!this._likes.includes(username)) {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }

    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            let indexOfLike = this._likes.indexOf(username);
            this._likes.splice(indexOfLike, 1);
            return `${username} disliked ${this.title}`;
        }
    }
    // comment(username, content, id) {
    //     if (id === undefined || !this._comments.has(id)) {
    //         let comment = {
    //             username: username,
    //             content: content,
    //             replies: []
    //         };
    //         this._comments.set(1 ,comment);
    //         return `${username} commented on ${this.title}`;
    //     } else if (this._comments.has(id)) {
    //         let reply = {
    //             id: id,
    //             username: username,
    //             content: content
    //         };
    //         this._comments.get(id)[replies].push(reply);
    //     }
    // }
    toString(type){
        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}`;
        if (type == 'username') {
           
        }
        return result;
    }
}

let art = new Story("My Story", "Anny");
art.comment("Sammy", "Some Content",1);
art.comment("Ivanc", "reply",1);
