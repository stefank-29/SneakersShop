const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.validateRegister = async (req, res, next) => {
    req.checkBody('username', 'You must enter a name').notEmpty();
    req.checkBody('email', 'Email is not valid!').isEmail();
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false,
    });
    req.check(
        'password',
        'Password should be combination of at least one uppercase, one lower case, one digit and min 8, max 20 characters long'
    ).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*-]{8,}$/, 'i');
    req.checkBody('password-confirm', 'Your password do not match!').equals(req.body.password);
    const errors = req.validationErrors();
    if (errors) {
        res.send({ errors, error: true }); // saljem greske
        return;
    }
    let user = await User.findOne({ username: req.body.username });
    if (user) {
        res.send({ error: 'User with that username already exists' });
        return;
    }

    user = await User.findOne({ email: req.body.email });
    if (user) {
        res.send({ errors: ['That email address is already in use'], error: true });

        return;
    }

    next();
};

exports.register = async (req, res, next) => {
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
    });
    const register = promisify(User.register, User);
    await register(user, req.body.password);
    next();
};