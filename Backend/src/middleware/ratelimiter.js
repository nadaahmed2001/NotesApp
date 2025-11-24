import ratelimit from "../config/upstash.js";

const ratelimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit(req.ip);//can ratelimit using user.id or ip adress for example
        if (!success) {
            return res.status(429).json({
                message: " Too many requests, please try again later"
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error");
        next(error);
    }
};

export default ratelimiter;