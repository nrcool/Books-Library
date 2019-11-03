const config = () => {
    if (process.env.NODE_ENV === "production") {
        return {server:""}
    } else {
        return {
            server:"http://localhost:4000"
        }
    }
}

export default config;