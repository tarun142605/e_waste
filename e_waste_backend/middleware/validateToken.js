import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';

const customerValidater = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCSESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(404);
                throw new Error('User is not authorized');
            }
            // req.user = decoded.user;
            next();
        });
        if (!token) {
            res.status(404);
            throw new Error('User is not authorized or token is missing');
        }
    }
});

const collectionAgentValidator = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCSESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(404);
                throw new Error('User is not authorized');
            }
            req.user = decoded.user;
            next();
        });
        if (!token) {
            res.status(404);
            throw new Error('User is not authorized or token is missing');
        }
    }
});

export { customerValidater, collectionAgentValidator };