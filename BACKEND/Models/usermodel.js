import mongoose from 'mongoose'; // Erase if already required
import bcrypt from 'bcrypt';

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
});
userSchema.pre("save", async function (next) {
    const salt =await  bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password, salt)

});
userSchema.methods.ispasswordmatched = async function(enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);

};

//Export the model
const User = mongoose.model('User', userSchema);
export default User;