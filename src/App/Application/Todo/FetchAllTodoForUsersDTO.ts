class FetchAllTodosForUsers {
    public userID: string;
    public page: number;
    public size: number;
    constructor(req){
        this.userID = req.session.userID;
        this.page = req.query.page ? parseInt(req.query.page) : req.query.page;
        this.size = req.query.size ? parseInt(req.query.size) : req.query.size;
    }
}

export default FetchAllTodosForUsers;