<template>
    <div id="app">
        <div class="main">
            <router-view/>
        </div>
        <footer class="footer">
            <tab-bar/>
        </footer>
    </div>
</template>

<script>
import TabBar from './components/TabBar/index';

export default {
    name: 'App',
    components: {
        'tab-bar': TabBar,
    },
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 667px;
}
.main .footer {
    position: absolute;
    left: 0;
    right: 0;
}
.main {
    height: 600px;
    bottom: 67px;
    overflow: auto;
    background-color: rgba(179, 177, 177, 0.1)
}
.footer {
    height: 67px;
    bottom: 0;
}
</style>
