import recipeService from '../services/recipeService.js'

const createNewRecipe = (req, res) => {

    const {body} = req
    console.log(body)

    const createdRecipe = recipeService.createNewRecipe()
    res.send("Create a new recipe")
}

export default {
    createNewRecipe
}