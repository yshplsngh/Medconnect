import mongoose from "mongoose";

const DBConnection = async () =>{
    const MONGO_URI = "mongodb+srv://yashpal9rx:D560075WIN9S9rxatlas@medcluster.ljy6lwq.mongodb.net/meddata?retryWrites=true&w=majority";
    try {
        await mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
    }
}

export default DBConnection;