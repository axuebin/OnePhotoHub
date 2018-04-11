<template>
    <div class="tab-item" @click="onClick">
        <div :class="{ 'tab-item-icon': true, 'full': !data.text }" v-if="data.icon">
            {{ data.icon }}
        </div>
        <div :class="{ 'tab-item-text': true, 'full': !data.icon }" v-if="data.text">
            {{ data.text }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Item',
    data() {
        return {
        };
    },
    props: {
        data: Object,
    },
    methods: {
        onClick() {
            global.router.push(this.data.url);
        },
    },
};
</script>

<style lang="scss" scoped>
.tab-item {
    height: 67px;
    flex: 1;
    text-align: center;
    .tab-item-icon {
        height: 45px;
        line-height: 45px;
    }
    .tab-item-text {
        height: 22px;
        font-size: 14px;
    }
    .full {
        height: 67px;
        line-height: 67px;
    }
    :hover {
        background-color: rgba(179, 177, 177, 0.1)
    }
}
</style>
