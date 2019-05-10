const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: user => {
        console.log('tokwn ',user);
        //1. Dont use password and other sensitive fields
        //2. Use fields that are useful in other parts of the
        // app/collections/models
        const u = {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
        };
        //return token = jwt.sign(u, process.env.JWT_SECRET, {
        return token = jwt.sign(u, 'oliwiris', {
            expiresIn: 60 * 60 * 24 // expires in 24 hours
        });
    },
    verifyToken: token => {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    reject(err);
                }
                // return user using the id from w/in JWToken
                resolve(user);
            });
        });
    },
    getCleanUser: user => {
        const { password, age, createdAt, updatedAt, __v, ...exposedData } = user;
        return exposedData;
    }
};