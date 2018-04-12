<template>
    <div class="home">
        <div class="photo" v-for="photo in photos" :key="photo.id">
            <div class="photo-uploader">
                <div class="username">
                    <div class="avatar">
                        <img src="../assets/avatar.jpeg">
                    </div>
                    <div>
                        {{photo.uploader.userName}}
                    </div>
                </div>
                <div class="follow">
                    <button><i class="iconfont icon-zengjia">  关注</i></button>
                </div>
            </div>
            <div class="photo-area">
                <img :src="photo.url">
            </div>
            <div class="photo-name">
                <div class="name">
                    {{photo.name}}
                </div>
                <div class="control">
                    <i class="iconfont icon-xihuan">
                        <span>{{photo.like}}</span>
                    </i>
                    <i class="iconfont icon-xiaoxi">
                        <span>{{photo.comment}}</span>
                    </i>
                    <i class="iconfont icon-shoucang"></i>
                    <i class="iconfont icon-fenxiang"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getRecentPhotos } from '../lib/service';

export default {
    name: 'Home',
    data() {
        return {
            photos: [],
        };
    },
    mounted() {
        getRecentPhotos().then((response) => {
            this.photos = response.data;
        });
    },
};
</script>

<style lang="scss" scoped>
.photo {
    background-color: white;
    margin-top: 10px;
    .photo-area {
        // height: 200px;
        // position: relative;
        // overflow: hidden;
        // img {
        //     width: 100%;
        //     position: absolute;
        //     top: 50%;
        //     transform: translateY(-50%);
        // }
        img {
            width: 100%;
        }
    }
    .photo-name, .photo-uploader {
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        padding: 0px 10px;
        display: flex;
    }
    .photo-uploader, .photo-name  {
        .username, .follow, .name, .control{
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
        .follow, .control{
            display: flex;
            justify-content: flex-end;
        }
        .follow {
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
        .control {
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
}
.home :nth-child(1) {
    margin-top: 0px;
}
</style>
