import redis from 'redis';
import dbConfig from '../config/db';
const { REDIS_CONF } = dbConfig

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', (err, val) => {
    console.error(err)
})

export const set = (key: string, val: any) => {
    if( typeof val === 'object') {
        val = JSON.stringify(val)
    }
    redisClient.set(key, val, redis.print)
}

export const get = key => {
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if(err) {
                reject(err)
                return
            }
            if(val === null) {
                resolve(null)
                return
            }
            try {
                resolve(JSON.parse(val))
            } catch (error) {
                resolve(val)
            }
        })
    })
    return promise
}
