<template>
    <div class="photo-uploader">
        <div class="username">
            <div class="avatar">
                <img src="../../../../assets/avatar.jpeg">
            </div>
            <div>
                {{data.uploader.userName}}
            </div>
        </div>
        <div class="follow">
            <button><i class="iconfont icon-zengjia">  关注</i></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UploaderBar',
    props: {
        data: Object,
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
            background-color: rgba(179, 177, 177, 0.1);
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
            border-color: #0099e5;
            color: #0099e5;
            background-color: white;
            height: 30px;
            border-radius: 3px;
            i {
                font-size: 12px;
                margin: 0px 10px;
            }
        }
    }
}
</style>
