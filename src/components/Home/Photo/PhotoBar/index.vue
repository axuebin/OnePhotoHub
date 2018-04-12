<template>
    <div class="photo-name">
        <div class="name">
            {{data.name}}
        </div>
        <div class="control">
            <i class="iconfont icon-xihuan">
                <span>{{data.like}}</span>
            </i>
            <i class="iconfont icon-xiaoxi">
                <span>{{data.comment}}</span>
            </i>
            <i class="iconfont icon-shoucang"></i>
            <i class="iconfont icon-fenxiang"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PhotoBar',
    props: {
        data: Object,
    },
};
</script>

<style lang="scss">
.photo-name {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    padding: 0px 10px;
    display: flex;
}
.photo-name  {
    .name, .control{
        flex: 1;
    }
    .control {
        display: flex;
        justify-content: flex-end;
        i {
            margin-left: 10px;
            font-size: 20px;
            display: flex;
            align-items: center;
            span {
                padding-left: 5px;
                font-size: 12px;
            }
        }
    }
}
</style>
