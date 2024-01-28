<template>
        <p style="padding: 10px">Results</p>
        <!-- TODO: pass props to result from each result -->
        <div v-for="(result, index) in results" :key="index">
            <Result :title="'Borscht'" :imageUrl="'https://natashaskitchen.com/wp-content/uploads/2018/10/Borscht-Recipe-2.jpg'" :usedIngredients="'-beats -chives -sour cream'"/>
        </div>
</template>
<script>
    import Result from "../components/Result.vue"

    export default {
        props: {
            resultInfo: {
                type: Array,
                default: () => [{ title: "test", imageUrl: "test", usedIngredients: ["one", "two"] },{ title: "test", imageUrl: "test", usedIngredients: ["two", "one"] }],
            }
        },
        components: {
            Result
        },
        data() {
            return {
                //results: this.resultInfo,
                results: 3,
            }
        },
        watch: {
            resultInfo(newResultInfo) {
                console.log(newResultInfo)
                this.results = newResultInfo;
            },
        },
        computed: {
        computedResults() {
            return this.resultInfo.length > 0 ? this.resultInfo : [{ title: "test", imageUrl: "test", usedIngredients: ["one", "two"] },{ title: "test", imageUrl: "test", usedIngredients: ["two", "one"] }];
        },
    },
    }

</script>
<style>
    p{
        color: ivory;
        font-size: 42px;
        font-weight: 750;
    }
</style>