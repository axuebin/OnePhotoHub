<template>
    <div class="home">
        <div class="photo" v-for="photo in photos" :key="photo.id">
            <div class="photo-uploader">
                {{photo.uploader.userName}}
            </div>
            <div class="photo-area">
                <img :src="photo.url">
            </div>
            <div class="photo-name">
                {{photo.name}}
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
    name: 'Home',
    data() {
        return {
            photos: [],
        };
    },
    mounted() {
        Axios.get('https://www.easy-mock.com/mock/5acdf3cc30ee7d62f6c16be9/500pxme/recentphotos')
            .then((response) => {
                this.photos = response.data;
            });
    },
};
</script>

<style lang="scss" scoped>
.photo {
    border-bottom: 1px solid white;
    .photo-area {
        height: 200px;
        position: relative;
        overflow: hidden;
        img {
            width: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .photo-name, .photo-uploader {
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        padding-left: 10px;
    }
}
</style>
