<template>
    <div v-for="index in count" :key="index">
        <ingredientInput/>
    </div>
    <div class="buttonContainer">
        <button @click="addIngredient">Add Ingredient</button>
        <button @click="searchRecipes">Search</button>
    </div>
</template>
<script>
import ingredientInput from './ingredientInput.vue';    

export default {
    components: {
        ingredientInput,
    },
    data() {
        return {
            count: 1
        };
    },
    methods: {
        addIngredient() {
            this.count += 1;
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
     width: 300px;
     height: 50px;
     margin: 10px;
     border-radius: 10%;
     box-shadow: rgba(0,0,0,0.8) 0 0 10px;
}
</style>
