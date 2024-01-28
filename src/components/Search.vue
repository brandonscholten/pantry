<template>
    <div v-for="index in count" :key="index">
        <ingredientInput/>
    </div>
    <div class="buttonContainer">
        <button @click="addIngredient">Add Ingredient</button>
        <button @click="searchRecipes">Search</button>
    </div>
    <ResultsView v-if="showResults" />
</template>
<script>
import ingredientInput from './ingredientInput.vue';    
import ResultsView from '../views/ResultsView.vue';

export default {
    components: {
        ingredientInput,
        ResultsView
    },
    data() {
        return {
            count: 1,
            showResults: false,
            resultInfo: []
        };
    },
    methods: {
        addIngredient() {
            this.count += 1;
        },
        searchRecipes() {
            //send request for search with ingredients
            const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ignorePantry=true&ranking=1';
            const options = {
                method: 'GET',
                headers: {
                    ''
                }
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
