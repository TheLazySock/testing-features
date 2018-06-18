<template>
    <div>
        <h1>LOGS</h1>
        <ul class="logs">
            <li v-for="log in logs" :key="log.id">{{log}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['logs'],
    name: 'Logs'
    
}
</script>

<style scoped>
ul.logs {
    list-style: circle inside;
}

.logs > li {
    display: list-item;
}
</style>
