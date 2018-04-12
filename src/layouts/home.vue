<template>
    <div class="home">
        <div class="photo" v-for="photo in photos" :key="photo.id">
            <uploader-bar :data="photo"/>
            <div class="photo-area">
                <img :src="photo.url">
            </div>
            <photo-bar :data="photo"/>
        </div>
    </div>
</template>

<script>
import UploaderBar from '../components/Home/Photo/UploaderBar/index';
import PhotoBar from '../components/Home/Photo/PhotoBar/index';
import { getRecentPhotos } from '../lib/service';

export default {
    name: 'Home',
    data() {
        return {
            photos: [],
        };
    },
    components: {
        'uploader-bar': UploaderBar,
        'photo-bar': PhotoBar,
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
}
.home :nth-child(1) {
    margin-top: 0px;
}
</style>
