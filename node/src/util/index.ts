
export const getCookieExpires = (day = 2) => {
    const d = new Date();
    d.setTime(d.getTime() + day * 24 * 60 * 60)
    return d.toUTCString()
}