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

const ContentSchema = new Schema({
    title : String ,
    link : String ,
    tag : [{ type : mongoose.Types.ObjectId , ref : 'Tag'}] ,
    userId : { type : mongoose.Types.ObjectId , ref : 'User' , require : true} ,
    
})

const LinkSchema = new Schema({
    hash : String,
    userId : { type : mongoose.Types.ObjectId , ref:'User' , require : true , unique : true}
})

export const  ContentModel = mongoose.model("Content" , ContentSchema)