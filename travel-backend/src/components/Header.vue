<template>
    <div class="contain">
        <span class="title">旅游管理系统后台</span>
        <div class="userInfo">
            <a-avatar direction="vertical">
                <img alt="avatar" src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
            </a-avatar>
            <span class="usr-name">{{ username }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const username = ref('Alice');

</script>

<style scoped>
.contain {
    height: 100%;
    display: flex;
    padding: 0 30px;
    align-items: center;
    justify-content: space-between;
    background-color: #161b2e;
}
.title {
    color: white;
    font-size: 1.3rem;
    font-weight: 700;
}
.usr-name {
    color: white;
    margin: 0 1rem;
    font-size: 1.2rem;
}
</style>