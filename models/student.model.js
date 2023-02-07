const mongoose=require('mongoose')

var studentSchema= new mongoose.Schema({

    fulName:{
        type:String,
        required :'This filed is required'
    },
    email:{
        type:String,
        requires:'This field is requires'
    },
    mobile:{
        type:Number,
        requires:'This field is requires'
    },
    city:{
        type:String,
        requires:'This field is requires'
    }
})

mongoose.model('Student',studentSchema)