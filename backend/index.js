const cors = require("cors");
const express = require("express")
const mongoose = require("mongoose");

const taskRoutes = require("../backend/routes/task.routes");

const app = express();
const PORT = 8082;
const DB_URI = "mongodb+srv://active8mysoul:He3mzbu8dVZ54r3J@cluster0.nle5e.mongodb.net/task-manager?retryWrites=true&w=majority&appName=Cluster0"


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log("DB connected"))
.catch((error)=> console.log("Error in connecting DB", error))

app.use(cors());
app.use(express.json());


app.use("/tasks", taskRoutes);

app.listen(PORT, ()=> {
    console.log(`Backend listening on port ${PORT}!`)
})