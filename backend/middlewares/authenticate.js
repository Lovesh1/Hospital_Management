import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config();
export const SECRET = process.env.SECRET_CODE;

export const authenticateJwt = (req, res, next) => {
    let { token } = req.headers;
    if (token) {
        jwt.verify(token, SECRET, (err, data) => {
            if (err) {
                return res.sendStatus(403)
            }
            req.headers["name"] = data.name
            req.headers["_id"] = data._id
            next()
        });
    } else {
        res.json({ message: "Please provide the auth" });
    }
};