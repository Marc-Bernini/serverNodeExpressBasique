const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const routes = require("./routes/index")
// const cubes = require("./routes/cubes")
// const login = require("./routes/login")

const app = express()
const port = 4242

app.use(morgan("dev"))
app.use(morgan(":method :url :status :res[content-length] - :response-time "))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/cubes", routes.cubes)
app.use("/auth", routes.auth)

app.get("/", (req, res) => {
  res.status(200).send("je suis dans /")
})

app.listen(port, console.log(`http://localhost:${port}`))
