import express from "express"
import dotenv from "dotenv" 
import connectDB from "./database/db.js";
import userRoute from "./route/user.route.js"
import cors from "cors"

dotenv.config();

const app = express();

//defalut middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))

const PORT = process.env.PORT || 3000

app.use("/api/v1/user", userRoute)


app.listen(PORT, () => {
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});
