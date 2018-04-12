<template>
    <div class="tab-bar">
        <tab-item v-for="item in data" :data="item" :key="item.key"/>
    </div>
</template>

<script>
import Item from './item';

export default {
    name: 'TabBar',
    components: {
        'tab-item': Item,
    },
    props: {
        data: Array,
    },
};
</script>

<style scoped>
.tab-bar {
    display: flex;
}
</style>
