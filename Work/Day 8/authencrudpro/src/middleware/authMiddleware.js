

import User from '../models/userModel.js'
import jwt from 'jsonwebtoken';


export async function JwtAuthCheck(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(403).json({ message: 'Unauthorized: No token provided' });
    }

    const token  = authHeader.split(' ')[1];

    try {
        const jwtDocoaded = jwt.decode(token, process.env.JWT_SECRET);
        const userData = jwtDocoaded.data;
        req.user = await User.findOne({email: userData.email});
        next();
    } catch(e) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}