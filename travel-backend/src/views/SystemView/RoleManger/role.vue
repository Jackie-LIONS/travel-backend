<template>
    <div><span class="title">角色管理</span><span class="title-info">全部角色</span></div>
    <a-button status="success">
        <template #icon>
            <icon-bookmark />
        </template>
        <template #default>增加</template>
    </a-button>
    <a-table :columns="columns" :data="data">
        <template #optional="{ record }">
            <a-button size="small" type="primary" @click="$modal.info({ title:'Name', content:record.name })">修改</a-button>
            <a-button size="small" type="primary" status="danger">删除</a-button>
            <a-button size="small" type="primary" status="warning">分配权限</a-button>
        </template>
    </a-table>
</template>

<script setup>
import { reactive } from 'vue';
import {
    IconBookmark
} from "@arco-design/web-vue/es/icon";

const columns = reactive([
    {
        title: '序号',
        dataIndex: 'key',
        align: 'center'
    },
    {
        title: '角色名',
        dataIndex: 'roleName',
        align: 'center'
    },
    {
        title: '角色介绍',
        dataIndex: 'roleInfo',
        align: 'center'
    },
    {
        title: 'Optional',
        slotName: 'optional',
        align: 'center'
    }
]);
const data = reactive([{
    key: '1',
    roleName: '超级管理员',
    roleInfo: '管理所有数据',
}, {
    key: '2',
    roleName: '商品管理员',
    roleInfo: '管理商品',
}]);

</script>
<style scoped>
.arco-btn-secondary {
    background-color: #7eb712;
    margin: 15px 0 -15px 0;
    color: white;
}
.arco-table {
    --color-fill-1: rgb(28, 34, 56);
    --color-neutral-2: rgb(36, 41, 62);
    --gray-10: 204, 208, 217;
    --color-bg-2: transparent;
    --color-neutral-3: rgb(36, 41, 62);
    margin: 20px auto;
}
.arco-btn {
    margin-right: 10px;
}
.title {
    margin-right: 10px;
    font-size: 26px;
    font-weight: 600;
    color: #3edcd4;
}
.title-info {
    font-size: 15px;
    color: gainsboro;
}
/* .arco-table-tr {
    background-color: red !important;
} */
:deep(.arco-table-element .arco-table-tr:hover) {
    background-color: red !important;
}
.arco-table-tr-hover {
    background-color: red !important;
}

/* .arco-table-element >>> .arco-table-tr:hover {
    background-color: red !important;
    color: red !important;
} */
</style>
