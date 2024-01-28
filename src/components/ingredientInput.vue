<template>
    <div class="recipeContainer" v-if="visible">
        <input class="recipeInput" type="text" placeholder="ingredient">
        <button class="delete" @click="close">
            <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
</template>
<script>

export default {
    props: ['value'], 
    data() {
        return {
            visible: true,
            ingredient: this.value
        }
    },
    watch: {
        ingredient(newVal) {
            this.$emit('input', newVal);
        },
        value(newVal) {
            this.ingredient = newVal;
        }
    },
    methods: {
        close() {
            //TODO remove whatever value is in the textbox
            this.visible = false;
        }
    }
}
</script>
<style>
 .recipeContainer{
     display: flex;
     align-content: space-between;
     align-items: center;
 }
 .recipeInput{
    border-radius: 15px;
    box-shadow: rgba(0,0,0,0.8) 0 0 10px;
    font-size: 24pt;
    height: 50px;
    width: 70%;
    border: none;
    display: flex;
    margin: 10px;
 }
 .delete{
     background-color: #069c6c;
     border: none;
     width: 50px;
     height: 50px;
     border-radius: 50%;
     margin-left: 20px;
     box-shadow: rgba(0,0,0,0.8) 0 0 10px;
 }
</style>
