import mongoose from 'mongoose';

// username and possword : NesatCrudApplication

const Connection = async (username, password) => {
    // const URL = `mongodb://NesatCrudApplication:NesatCrudApplication@crud-app-shard-00-00.fyf2n.mongodb.net:27017,crud-app-shard-00-01.fyf2n.mongodb.net:27017,crud-app-shard-00-02.fyf2n.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-rz0rvg-shard-0&authSource=admin&retryWrites=true&w=majority`

    // const URL = `mongodb+srv://NesatCrudApplication:NesatCrudApplication@cluster0.hty68.mongodb.net/?retryWrites=true&w=majority`

    // const URL = `mongodb://NesatCrudApplication:NesatCrudApplication@cluster0-shard-00-00.hty68.mongodb.net:27017,cluster0-shard-00-01.hty68.mongodb.net:27017,cluster0-shard-00-02.hty68.mongodb.net:27017/?ssl=true&replicaSet=atlas-4dwbs6-shard-0&authSource=admin&retryWrites=true&w=majority`

    const URL = `mongodb://nayemnesat:Lion2324@ac-v6hdw2i-shard-00-00.wqpn5pd.mongodb.net:27017,ac-v6hdw2i-shard-00-01.wqpn5pd.mongodb.net:27017,ac-v6hdw2i-shard-00-02.wqpn5pd.mongodb.net:27017/?ssl=true&replicaSet=atlas-3w4cbo-shard-0&authSource=admin&retryWrites=true&w=majority`

    // mongodb+srv://<username>:<password>@cluster0.hty68.mongodb.net/?retryWrites=true&w=majority

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;