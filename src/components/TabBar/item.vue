<template>
    <div class="tab-item" @click="onClick">
        <div :class="{ 'tab-item-icon': true, 'full-icon': !data.text }"
               v-if="data.icon"
               v-html="data.icon" />
        <div :class="{ 'tab-item-text': true, 'full-text': !data.icon }" v-if="data.text">
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

<style lang="scss">
.tab-item {
    height: 67px;
    border-top: 1px solid rgba(179, 177, 177, 0.1);
    flex: 1;
    text-align: center;
    .tab-item-icon {
        height: 45px;
        line-height: 45px;
        :hover {
            background-color: transparent;
        }
        .iconfont {
            font-size: 25px;
        }
    }
    .tab-item-text {
        height: 22px;
        font-size: 12px;
    }
    .full-icon {
        height: 67px;
        line-height: 67px;
        .iconfont {
            font-size: 30px;
        }
    }
    .full-text {
        height: 67px;
        line-height: 67px;
        font-size: 14px;
    }
    :hover {
        background-color: rgba(179, 177, 177, 0.1);
    }
}
</style>
