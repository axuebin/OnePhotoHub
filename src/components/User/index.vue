<template>
    <div class="me">
        <div class="banner">banner</div>
        <div class="avatar">
            <img src="../../assets/avatar.jpeg">
        </div>
        <div class="info">
            <div class="username">{{this.username}}</div>
            <div class="details">
                <a>粉丝 {{this.followers}}</a>
                <span>·</span>
                <a>关注 {{this.following}}</a>
            </div>
        </div>
        <div class="photo">
            <img v-for="item in photos" :src="item.url" :key="item.id">
        </div>
    </div>
</template>

<script>
import { getUserPhotos } from '../../lib/service';

export default {
    name: 'User',
    data() {
        return {
            followers: 99999,
            following: 99999,
            photos: [],
        };
    },
    props: {
        username: String,
    },
    mounted() {
        getUserPhotos({ username: 'axuebin' }).then((response) => {
            this.photos = response.data;
        });
    },
};
</script>

<style lang="scss" scoped>
.me {
    position: relative;
}
.banner {
    height: 200px;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    background-color: black;
    color: white;
}
.info {
    height:150px;
    background-color: white;
    .username {
        position: relative;
        top: 40px;
        font-size: 16px;
        text-align: center;
    }
    .details {
        position: relative;
        top: 50px;
        font-size: 12px;
        text-align: center;
    }
}
.avatar {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    position: absolute;
    top: 170px;
    left: 50%;
    transform: translateX(-50%);
    border: 2px solid white;
    img {
        width: 100%;border-radius:50%;
    }
}
.photo {
    img {
        height: 200px;
    }
}
</style>
