const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
})
// creating the event schema 
const EventSchema = new Schema({
    title: string,
    description: string,
    starttime: string,
    endtime: String,
    date: string,
    userid: ObjectId
})
const Event = mongoose.model("Event", EventSchema);
const User = mongoose.model("User", UserSchema);
const Eventmodel = {
   title : title,
   description: description,
   starttime: starttime,
   endtime: endtime,
   date: date,
   userid : userid
}
const Usermodel = {
    username: username,
    password: password,
    email: email
}
const meetingSchema = new Schema({
    title : string,
    meetingId: { type: String, unique:true},
    password: {type : string , required:true , unique: true},
    hostid: {
        type: ObjectId,
        ref: "User"
    },
    participants: ({
        type: ObjectId,
        ref: "User"
    }),
    createdAt : {
        type: Date,
        default: Date.now
    }

})
const Meeting = mongoose.model("Meeting", meetingSchema);
const Meetingmodel = {
    title: title, 
    meetingId: meetingId,
    password: password,
    hostid: hostid,
    participants: participants

}
module.exports = {
    Usermodel,
    Eventmodel,
    Meetingmodel
}