class PostBubble {
    constructor(href, title, date, excerpt) {
        this.href = href;
        this.title = title;
        this.date = date;
        this.excerpt = excerpt;
        this.component = document.createElement('div');
        this.component.className = 'post-thumbnail';
        this.populate();
    }

    populate() {
        const link = document.createElement('a'); 
        link.href = this.href;
        this.component.appendChild(link); 

        const postTitle = document.createElement('h2'); 
        const postDate = document.createElement('p');
        const postExcerpt = document.createElement('p');

        postTitle.textContent = this.title;
        postDate.textContent = this.date;
        postExcerpt.textContent = this.excerpt;

        link.append(postTitle, postDate, postExcerpt);
    }
}

function addPost(href, title, date) {
    const projects = document.querySelector('.project-list');
    var bubble = new PostBubble(href, title, date);
    projects.append(bubble.component); 
}