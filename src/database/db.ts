import mongoose, {Schema} from "mongoose" ;

let connected = false;

export const connectDB = async () => {
    if (connected) return;
    await mongoose.connect(process.env.DATABASE_URL!);
    connected = true;
}

const UserSchema = new Schema({
    username : {type : String , unique: true } ,
    password : String
})

export const UserModel = mongoose.model("User" , UserSchema) ;