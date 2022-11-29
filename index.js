import express from "express"
import * as dotenv from "dotenv"


dotenv.config()

const app = express()

app.use(express.json())




















app.listen(8080, () => {
    console.log("App up and running on port http://localhost:8080")

})