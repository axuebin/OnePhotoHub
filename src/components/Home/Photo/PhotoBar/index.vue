<template>
    <div class="photo-name">
        <div class="name">
            {{data.name}}
        </div>
        <div class="control">
            <i :class="['iconfont',
                        {'icon-xihuan': !data.isLiked},
                        {'icon-xihuan1': data.isLiked}]"
                @click="this.handleLikeClick">
                <span>{{data.like}}</span>
            </i>
            <i class="iconfont icon-xiaoxi">
                <span>{{data.comment}}</span>
            </i>
            <i :class="['iconfont',
                        {'icon-shoucang': !data.isCollected},
                        {'icon-shoucang1': data.isCollected}]"
                @click="this.handleCollectClick"></i>
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
    methods: {
        handleLikeClick() {
            this.data.isLiked = !this.data.isLiked;
            if (this.data.isLiked) {
                this.data.like = this.data.like + 1;
            } else {
                this.data.like = this.data.like - 1;
            }
        },
        handleCollectClick() {
            this.data.isCollected = !this.data.isCollected;
        },
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
                color: black !important;
                padding-left: 5px;
                font-size: 12px;
            }
        }
        .icon-xihuan1 {
            color: #ff4c4c;
        }
        .icon-shoucang1 {
            color: #ff9900;
        }
    }
}
</style>
