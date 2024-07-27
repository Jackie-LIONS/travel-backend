<template>
    <a-layout style="height: 100%;">
        <a-layout-header style="height: 9%">
            <Header></Header>
        </a-layout-header>
        <a-layout style="height: 70%">
            <a-layout-sider width="auto">
                <SiderNav />
            </a-layout-sider>
            <a-layout-content>
                <div class="content">
                    <RouterView />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script setup>
import { RouterView } from 'vue-router'
import SiderNav from '@/components/SiderNav.vue'
import Header from './Header.vue'
</script>
<style scoped>
.arco-layout-content {
    background-color: #1c2238;
}
.content {
    height: 90%;
    margin: 10px;
    padding: 15px;
    border-radius: 10px;
    background-color: #2a314e;
}
</style>