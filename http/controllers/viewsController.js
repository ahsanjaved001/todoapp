
exports.getLoginForm = (req, res, next) => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });
};

exports.getSignupForm = (req, res, next) => {
    res.status(200).render('signup', {
        title: 'Log into your account'
    });
};