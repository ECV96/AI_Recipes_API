import express from "express"
import bodyParser from "body-parser"

import {router as v1RecipeRoutes} from "./v1/routes/recipeRoutes.js"

const app = express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use("/api/v1/recipes", v1RecipeRoutes)

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`)
})