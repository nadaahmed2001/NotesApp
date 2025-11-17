import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import dotenv from 'dotenv';

dotenv.config();


//Create a ratelimiter that allows 10 requests per 20 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s") // no more that 100 requests per minute
})

export default ratelimit;