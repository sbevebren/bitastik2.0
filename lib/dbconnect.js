import mongoose from 'mongoose'

const connection = {};
const uri = "mongodb+srv://bitastik2:HARRY@cluster0.vvnhw.mongodb.net/bitastik2?retryWrites=true&w=majority"
const dbConnect = async () => {
  if (connection.isConnected) return;
  
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;