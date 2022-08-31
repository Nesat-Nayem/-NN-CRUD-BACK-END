import mongoose from "mongoose";
// done 
const Connection = async () => {
  const URL = `mongodb://nayemnesat:Lion2324@ac-v6hdw2i-shard-00-00.wqpn5pd.mongodb.net:27017,ac-v6hdw2i-shard-00-01.wqpn5pd.mongodb.net:27017,ac-v6hdw2i-shard-00-02.wqpn5pd.mongodb.net:27017/?ssl=true&replicaSet=atlas-3w4cbo-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
