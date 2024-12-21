import EventEmitter from "events";

class Post extends EventEmitter {
    constructor(author, text) {
        super();
        this.author = author;
        this.text = text;
        this.likesQty = 0;
        this.on("likePost", (username) => {
            console.log(`${username} likes your post`);
        });
    }

    like(username) {
        this.likesQty += 1;
        this.emit("likePost", username);
    }
}

const myPost = new Post("monk", "my post");

// console.log(myPost.author);
// console.log(myPost.text);
// console.log(myPost.likesQty);
myPost.like("alice");
setTimeout(() => myPost.like("bob"), 2000);
setTimeout(() => myPost.like("alex"), 3000);
// console.log(myPost.likesQty);
