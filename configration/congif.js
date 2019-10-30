
module.exports = () => {
    if (process.env.NODE_ENV === "production") {
        return { db: process.env.MONGO_KEY,
                server:"",
                secretKey:process.env.SECRET_KEY }
    } else {
        return ({
            db: "mongodb://127.0.0.1:27017/BookShelf",
            server:"http://localhost:4000",
            secretKey:"TopSecret"
        })
    }
}
