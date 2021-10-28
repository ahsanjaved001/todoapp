class Pagination {
    constructor(currentPage = 1, perpage = 10){
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

module.exports = Pagination;