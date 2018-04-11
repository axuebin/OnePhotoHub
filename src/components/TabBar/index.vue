<template>
    <div class="tab-bar">
        <tab-item v-for="item in tabData" :data="item" :key="item.key"/>
    </div>
</template>

<script>
import Item from './item';

export default {
    name: 'TabBar',
    components: {
        'tab-item': Item,
    },
    data() {
        return {
            tabData: [{
                key: 'home',
                icon: '',
                text: '首页',
                url: '/',
            }, {
                key: 'search',
                icon: '',
                text: '搜索',
                url: 'search',
            }, {
                key: 'upload',
                icon: '',
                text: '发布',
                url: '/',
            }, {
                key: 'notice',
                icon: '',
                text: '通知',
                url: 'notice',
            }, {
                key: 'me',
                icon: '',
                text: '我的',
                url: 'me',
            }],
        };
    },
};
</script>

<style scoped>
.tab-bar {
    display: flex;
}
</style>
