<template>
    <div class="photo-detail">
        <Header color='white' bgColor='black' />
        <div class="photo-detail-container">
            <photo-bar :data="photo"/>
            <div class="photo">
                <img :src="photo.url">
            </div>
            <div class="photo-content">
                <p class="photo-desc">{{photo.desc}}</p>
            </div>
            <uploader-bar :data="photo"/>
        </div>
    </div>
</template>

<script>
import Header from '../Header/index';
import UploaderBar from '../UploaderBar/index';
import PhotoBar from '../PhotoBar/index';

export default {
    name: 'PhotaoDetail',
    data() {
        return {
            photo: JSON.parse(window.sessionStorage.getItem('photo')),
        };
    },
    components: {
        Header,
        'uploader-bar': UploaderBar,
        'photo-bar': PhotoBar,
    },
};
</script>

<style lang="scss" scoped>
.photo-detail {
    height: 600px;
    overflow: hidden;
}
.photo-detail-container {
    height: 550px;
    color: white;
    background-color: black;
    overflow: auto;
    .photo-content {
        .photo-name {
            text-align: center;
            font-size: 18px;
        }
        .photo-desc {
            text-align: center;
            font-size: 14px;
        }
    }
    .photo {
        height: 400px;
        position: relative;
        .photo-uploader {
            background-color: transparent;
        }
        img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
        }
    }
}
</style>
