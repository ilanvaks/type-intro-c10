import cors from "cors"
import express, {Request, Response} from "express"

const app = express()

const PORT = 3000

app.use(express.json())
app.use(cors())

app.get("/",(req: Request,res: Response) => {
  res.send("welcome to typescript")
})

app.listen(PORT, () => {
  console.log("listening on port 3000")
})