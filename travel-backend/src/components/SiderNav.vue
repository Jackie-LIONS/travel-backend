<template>
    <a-menu :style="{ width: '200px', height: '100%'}" theme="dark" :default-selected-keys="active" show-collapse-button breakpoint="xl">
        <a-menu-item :key="'/'" @click="navigate('/')">
            <icon-apps />
            <span>首页</span>
        </a-menu-item>
        <a-sub-menu :key="1">
            <template #icon>
                <icon-bug></icon-bug>
            </template>
            <template #title>系统管理</template>
            <a-menu-item :key="1-1" @click="navigate('/admin')">
                <span>用户管理</span>
            </a-menu-item>
            <a-menu-item :key="1-2" @click="navigate('/role')">
                <span>角色管理</span>
            </a-menu-item>
            <a-menu-item :key="1-3" @click="navigate('/permission')">
                <span>权限管理</span>
            </a-menu-item>
        </a-sub-menu>
        <a-sub-menu :key="2">
            <template #icon>
                <icon-bulb></icon-bulb>
            </template>
            <template #title>旅游产品管理</template>
            <a-menu-item :key="2-1" @click="navigate('/product')">
                <span>产品管理</span>
            </a-menu-item>
            <a-menu-item :key="2-2" @click="navigate('/productType')">
                <span>产品类型管理</span>
            </a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
    IconMenuFold,
    IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb,
} from "@arco-design/web-vue/es/icon";

const router = useRouter();
const collapsed = ref(false);
const toggleCollapse = () => {
    collapsed.value = !collapsed.value;
};
const active = ref(["/"]);

const navigate = (path) => {
    router.push(path);
};
</script>

<style scoped>
.arco-menu {
    --primary-6: 62, 220, 213; 
    --color-menu-dark-bg: 22, 27, 46;
    --primary-7: 124, 250, 244;
    background-color: rgb(28, 34, 56);
    background-image: url("./images/background-picture4.png");
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;
}
.arco-menu-selected, .arco-menu-selected .arco-icon {
    color: #3edcd4 !important;
}
</style>
