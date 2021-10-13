exports.authentication = async (req, res, next) => {
    if (req.session.isAuth)
        next();
    else
        res.status(401).json({
            message: 'User is not logged in'
        });
}