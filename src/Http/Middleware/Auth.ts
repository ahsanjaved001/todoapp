class Authentication {
    static async authenticate(req, res, next){
        if (req.session.userID)
            next();
        else
            res.status(401).json({
                message: 'User is not logged in'
            });
    }
}

export default Authentication;