<template>
    <header class="header" :style="{ 'color': color, 'background-color': bgColor }">
        <i class="iconfont icon-fanhuijiantou left" @click="handleLeftClick"/>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        color: String,
        bgColor: String,
    },
    methods: {
        handleLeftClick() {
            window.router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 50px;
    line-height: 50px;
    padding: 0px 20px;
    .left {
        font-size: 24px;
    }
}

</style>
