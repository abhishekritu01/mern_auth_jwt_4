import mongoose from 'mongoose'

const Connection = async () => {

    mongoose.set("strictQuery", false);
    const URL = process.env.DB_URL
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database is connected')
    } catch (error) {
        console.log(error);
    }
}
export default Connection;