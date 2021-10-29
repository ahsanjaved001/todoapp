class PaginationOptions {
    public currentPage: number;
    public perpage: number;

    constructor(currentPage: number = 1, perpage: number = 10){
        this.currentPage = currentPage;
        this.perpage = perpage;
    }

    limit() {
        return this.perpage;
    }

    offset() {
        return (this.currentPage -1) * this.limit();
    }
}

export default PaginationOptions;