class Movie {
    constructor(data){
        this._duration = data.duration
        this._picture = data.picture
        this._released_in = data.released_in
        this._synopsis = data.synopsis
        this._title = data.title
    }

    get releasedIn(){
        return this._released_in;
    }

    get picture(){
        return `/assets/${this._picture}`;
    }

    get thumbnail(){
        return `/assets/thumbnails/${this._picture}`;
    }

    get duration(){
        return this._duration;
    }

    get synopsis(){
        return this._synopsis;
    }

    get title(){
        return this._title;
    }
}
