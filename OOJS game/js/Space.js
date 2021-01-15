class Space {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null; // since board is empty of tokens when game begins
        // eventually when token is dropped this value will set to token object
        // the space contains
    }
}