<template>
    <div class="recipeCard">
        <div class="col">
            <div class="row">
                <p class="recipeName">{{title}}</p>
                <img class="recipeImage" :src="imageUrl"/>
            </div>
            <div class="col">
                <p class="ingredientsLabel">Ingredients you have</p>
                <p class="ingredientsText"> {{usedIngredients}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        imageUrl: String,
        usedIngredients: String //TODO: make this into a list
    }
}
</script>
<style>
    .recipeCard{
        display: flex;
        background-color: ivory;
        border-radius: 5%;
        box-shadow: rgba(0,0,0,0.8) 0 0 10px;
        height: 100%;
        width: auto;
        padding: 10px;
        margin-bottom: 15px;
    }
    .recipeName{
        font-size: 15pt;
        color: black;
        margin: 10px;
    }
    .ingredientsLabel{
        color: black;
        font-size: 15pt;
    }
    .ingredientsText{
        color: gray;
        font-weight: 300;
        font-size: 12pt;
    }
    .recipeImage{
        height: 100px;
        width: 100px;
        border: groove;
    }
    .col{
        display: flex;
        flex-direction: column  ;
    }
    .row{
        display: flex;
        flex-direction: left;
        align-items: center;
    }
</style>