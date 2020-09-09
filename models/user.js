const {Schema, model}=require('mongoose');
const UserSchema=new Schema(
    {
        name : {
            type: String,
            required: true
        }, 
        email : {
            type: String,
            required: true,
            match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        }, 
        role :{
            type: String,
            default: 'user',
            enmu: ['user','admin', 'superadmin']
        },
        username:{
            type: String,
            required: true
        }, 
        password: {
            type: String,
            required: true
        }
    }, {timestamps:true}
)

module.exports=model('Users', UserSchema);