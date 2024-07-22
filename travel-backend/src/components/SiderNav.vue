<template>
    
    <div class="slider-nav">
        <div class="logo">旅游管理系统后台</div>
        <a-button :style="{ padding: '0 12px', height: '30px', lineHeight: '30px', marginBottom: '4px',left: '211px', top: '-4px' }" type="primary"
            @click="toggleCollapse">
            <icon-menu-unfold v-if="collapsed" />
            <icon-menu-fold v-else />
        </a-button>
        <a-menu :style="{ width: '200px', borderRadius: '4px' }" theme="dark" :collapsed="collapsed"
            :default-selected-keys="active">
            <a-menu-item :key="'/'" @click="navigate('/')">
                <icon-apps />
                <span>首页</span>
            </a-menu-item>
            <a-sub-menu :key="'1'">
                <template #icon>
                    <icon-bug></icon-bug>
                </template>
                <template #title>系统管理</template>
                <a-menu-item :key="'/admin'" @click="navigate('/admin')">
                    <span>用户管理</span>
                </a-menu-item>
                <a-menu-item :key="'/role'" @click="navigate('/role')">
                    <span>角色管理</span>
                </a-menu-item>
                <a-menu-item :key="'/permission'" @click="navigate('/permission')">
                    <span>权限管理</span>
                </a-menu-item>
            </a-sub-menu>
            <a-sub-menu :key="'2'">
                <template #icon>
                    <icon-bulb></icon-bulb>
                </template>
                <template #title>旅游产品管理</template>
                <a-menu-item :key="'/products'" @click="navigate('/products')">
                    <span>产品管理</span>
                </a-menu-item>
                <a-menu-item :key="'/menu2'" @click="navigate('/menu2')">
                    Menu 2
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
    IconMenuFold,
    IconMenuUnfold,
    IconApps,
    IconBug,
    IconBulb
} from '@arco-design/web-vue/es/icon';

const router = useRouter();
const collapsed = ref(false);
const toggleCollapse = () => {
    collapsed.value = !collapsed.value;
};
const active = ref(['/']);

const navigate = (path) => {
    router.push(path);
};
</script>

<style scoped>
.slider-nav {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    /* box-sizing: border-box; */
    width: 210px;
    /* padding: 40px; */
    background-color: black;
}
.logo {
    width: 100%;
    height: 19px;
    background-color: black;
    text-align: center;
    font-size: 20px;
    color: #fff;
    line-height: 60px;

}
</style>