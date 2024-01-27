<template>
        <p style="padding: 10px">Results</p>
        <!-- TODO: pass props to result from each result -->
        <div v-for="index in results" :key="index">
            <Result :title="'Mikhail Nesterenko'" :imageUrl="'https://www-s3-live.kent.edu/s3fs-root/s3fs-public/styles/profile_photo_internal/public/nesterenko.jpg?VersionId=JaMOR15uNw1nPtaxy.wUr0gDMS71AHxN&h=6b9bf2e9&itok=zmgeZvNa'" :usedIngredients="'Morphine, Walnuts'"/>
        </div>
</template>
<script>
    import Result from "../components/Result.vue"

    export default {
        components: {
            Result
        },
        data() {
            return {
                results: 3, //TODO: get number of results from API
            }
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