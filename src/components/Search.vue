<template>
    <div v-for="(ingredient, index) in ingredients" :key="index">
        <ingredientInput :v-model="ingredients[index]"/>
    </div>
    <div class="buttonContainer">
        <button @click="addIngredient">Add Ingredient</button>
        <button @click="searchRecipes">Search</button>
    </div>
    <ResultsView :resultInfo="resultInfo" v-if="showResults" />  
</template>
<script>
import ingredientInput from './ingredientInput.vue';    
import ResultsView from '../views/ResultsView.vue';
import axios from 'axios';

export default {
    components: {
        ingredientInput,
        ResultsView
    },
    data() {
        return {
            showResults: false,
            resultInfo: [],
            ingredients: []
        };
    },
    methods: {
        addIngredient() {
            this.ingredients.push('');
        },
        async searchRecipes() {
            //send request for search with ingredients (axios)
            const options = {
                method: 'GET',
                url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
                params: {
                    ingredients: this.ingredients.toString(),
                    number: '5',
                    ignorePantry: 'false',
                    ranking: '1'
                },
                headers: {
                    'X-RapidAPI-Key': '',//import.meta.env.SPOON_API_KEY,
                    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                console.log("key: ",import.meta.env.SPOON_API_KEY)
                console.log("data: ",response.data);
            } catch (error) {
                console.error(error);
            }
            //parse result and save relevant information in resultInfo
            //send data to results page and show it
            this.showResults = true;    
        }
    }
};
</script>
<style>
.buttonContainer{
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin-top: 10px;
}
button{
    font-size: 24pt;
     background-color: #228b22;
     border: none;
     width: auto;
     height: 50px;
     margin: 10px;
     border-radius: 10%;
     box-shadow: rgba(0,0,0,0.8) 0 0 10px;
}
</style>
