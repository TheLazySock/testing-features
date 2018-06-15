<template>
    <div>
        <h1>COUNTER</h1>
        <h2>
            {{ count }}
        </h2>
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.getters.getCounter
        }
    },
}
</script>
