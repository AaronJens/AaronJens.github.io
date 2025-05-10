const likedMovies = [];
const dislikedMovies = [];

const likeButtons = [];
const dislikeButtons = [];
    
const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};

const loadMovies = () => {
    const movieList = document.getElementById("movielist");

    movies.forEach((movie, index) => {
        const movieDiv = createElement("div", "movie");
        const title = createElement("p", "title", movie.title);
        const description = createElement("p", "description", movie.description);
        const image = createElement("img", "image");
        image.setAttribute("src", movie.imageUrl);
        image.setAttribute("alt", movie.title);

        const likeButton = createIconButton(
            "fas fa-thumbs-up",
            "unset likebutton",
            () => like(movie.title)
        );
        likeButtons.push(likeButton);

        const dislikeButton = createIconButton(
            "fas fa-thumbs-down",
            "unset dislikebutton",
            () => dislike(movie.title)
        );
        dislikeButtons.push(dislikeButton);

        const buttons = createElement("div", "buttons");
        buttons.appendChild(likeButton);
        buttons.appendChild(dislikeButton);

        movieDiv.appendChild(title);
        movieDiv.appendChild(image);
        movieDiv.appendChild(description);
        movieDiv.appendChild(buttons);

        movieList.appendChild(movieDiv);
    });

    updateSidebar();
    updateCounters();
};

const like = (title) => {
    const alreadyLiked = likedMovies.includes(title);

    if (alreadyLiked) {
        likedMovies.splice(likedMovies.indexOf(title), 1);
        removeFromLikedList(title);
    } else {
        likedMovies.push(title);
        addToLikedList(title);
        const index = dislikedMovies.indexOf(title);
        if (index !== -1) dislikedMovies.splice(index, 1);
    }

    updateButtons();
    updateSidebar();
    updateCounters();
};

const dislike = (title) => {
    const alreadyDisliked = dislikedMovies.includes(title);

    if (alreadyDisliked) {
        dislikedMovies.splice(dislikedMovies.indexOf(title), 1);
    } else {
        dislikedMovies.push(title);
        const index = likedMovies.indexOf(title);
        if (index !== -1) {
            likedMovies.splice(index, 1);
            removeFromLikedList(title);
        }
    }

    updateButtons();
    updateSidebar();
    updateCounters();
};

const updateButtons = () => {
    likeButtons.forEach(btn => {
        const title = btn.closest(".movie").querySelector(".title").textContent;
        btn.className = likedMovies.includes(title) ? "likebutton active" : "unset likebutton";
    });
    dislikeButtons.forEach(btn => {
        const title = btn.closest(".movie").querySelector(".title").textContent;
        btn.className = dislikedMovies.includes(title) ? "dislikebutton active" : "unset dislikebutton";
    });
};

const addToLikedList = (title) => {
    const list = document.getElementById("likebarmovies");

    const li = createElement("li", "", title);
    li.setAttribute("data-title", title);

    const trash = createElement("i", "fas fa-trash");
    trash.addEventListener("click", () => {
        const index = likedMovies.indexOf(title);
        if (index !== -1) likedMovies.splice(index, 1);
        li.remove();
        updateButtons();
        updateSidebar();
        updateCounters();
    });

    li.appendChild(trash);
    list.appendChild(li);
};

const removeFromLikedList = (title) => {
    const list = document.getElementById("likebarmovies");
    const li = list.querySelector(`[data-title="${title}"]`);
    if (li) li.remove();
};

const updateSidebar = () => {
    const sidebar = document.getElementById("likebar");
    if (likedMovies.length > 0) {
        sidebar.removeAttribute("style");
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
};

const updateCounters = () => {
    document.getElementById("like").textContent = likedMovies.length;
    document.getElementById("dislike").textContent = dislikedMovies.length;
};

window.addEventListener("load", loadMovies);
