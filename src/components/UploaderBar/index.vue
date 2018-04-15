<template>
    <div class="photo-uploader">
        <div class="username">
            <div class="avatar">
                <img src="../../assets/avatar.jpeg">
            </div>
            <div>
                {{data.uploader.userName}}
            </div>
        </div>
        <div class="follow">
            <button class="followed"
                v-if="data.uploader.isFollowed"
                @click="this.handleFollowClick">
                <i class="iconfont icon-biaodankongjiandanxuan">  已关注</i>
            </button>
            <button class="unfollow" v-else @click="this.handleFollowClick">
                <i class="iconfont icon-zengjia">  关注</i>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UploaderBar',
    props: {
        data: Object,
    },
    methods: {
        handleFollowClick() {
            this.data.uploader.isFollowed = !this.data.uploader.isFollowed;
        },
    },
};
</script>

<style lang="scss">
.photo-uploader {
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    padding: 0px 10px;
    display: flex;
    .username, .follow {
        flex: 1;
    }
    .username {
        display: flex;
        align-items: center;
        .avatar{
            width: 40px;
            height: 40px;
            background-color: rgba(179, 177, 177, 0.102);
            margin-right: 10px;
            img {
                width: 100%;
            }
        }
    }
    .username div{
        display: inline-block;
    }
    .follow {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button {
            width: 80px;
            height: 30px;
            border-color: #0099e5;
            color: #0099e5;
            background-color: white;
            border-radius: 3px;
            i {
                font-size: 12px;
                margin: 0px 10px;
            }
            &.followed {
                border-color: rgba(0, 0, 0, 0.5);
                color: rgba(0, 0, 0, 0.5);
                background-color: white;
            }
            &.unfollow {
                border-color: #0099e5;
                color: #0099e5;
                background-color: white;
            }
        }
    }
}
</style>
