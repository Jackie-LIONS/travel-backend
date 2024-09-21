<template>
    <div><span class="title">用户管理</span><span class="title-info">用户列表</span></div>
    <a-button status="success">
        <template #icon>
            <icon-bookmark />
        </template>
        <template #default>增加</template>
    </a-button>
    <a-table :columns="columns" :data="data" @page-change="pageChange" @page-size-change="pageSizeChange" :pagination="{
        pageSize: 6,
        // current: searchParams.current,
        showTotal: true,
        total: total,
        showPageSize: true,
    }">
        <template #optional="{ record }">
            <a-button size="small" type="primary" status="success" @click="showInfo">详情</a-button>
            <a-button size="small" type="primary"
                @click="$modal.info({ title: 'Name', content: record.name })">修改</a-button>
            <a-button size="small" type="primary" status="danger">启用/禁用</a-button>
            <a-button size="small" type="primary" status="warning" @click="showPermission">分配权限</a-button>
        </template>
    </a-table>
    <user-role-dialog :info="userRoleInfo"></user-role-dialog>
    <user-edit-role-dialog :info="userEditRoleInfo"></user-edit-role-dialog>
</template>

<script setup>
import userRoleDialog from './components/userRoleDialog.vue';
import userEditRoleDialog from './components/userEditRoleDialog.vue';
import { reactive, ref, onMounted } from 'vue';
import {
    IconBookmark
} from "@arco-design/web-vue/es/icon";
import api from '@/api/index.js';

const columns = reactive([
    {
        title: '序号',
        dataIndex: 'aid',
        align: 'center'
    },
    {
        title: '用户名',
        dataIndex: 'username',
        align: 'center'
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        align: 'center'
    },
    {
        title: '联系电话',
        dataIndex: 'phoneNum',
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'status',
        align: 'center'
    },
    {
        title: 'Optional',
        slotName: 'optional',
        align: 'center'
    }
]);
const data = reactive([{
    aid: '1',
    username: 'lion',
    email: '2373489842@qq.com',
    phoneNum: '13926728410',
    status: '启动',
}]);

// 分页器数据
let total = ref(1);
const searchParams = reactive({
    current: 1,
    pageSize: 4,
});
const pageChange = async (page) => {
    searchParams.current = page;
};
const getCategorys = async () => {
    await api.getAdminAll({
        page: 1,
        size: 8
    }).then(res => {
        if (res.code === 200) {
            total.value = res.data.total,
                Object.assign(data, res.data.records);
        }
    })
}
const pageSizeChange = async (page) => {
    searchParams.pageSize = page
}

// 查看详情---后续要接接口获取数据
const userRoleInfo = reactive({
    show: false,
    data: [
        {
            "rid": null,
            "roleName": "超级管理员",
            "roleDesc": "管理所有数据",
            "permissions": [
                {
                    "pid": null,
                    "permissionName": "查询权限",
                    "permissionDesc": null
                },
                {
                    "pid": null,
                    "permissionName": "查询角色",
                    "permissionDesc": null
                },
                {
                    "pid": null,
                    "permissionName": "查询管理员",
                    "permissionDesc": null
                }
            ]
        }
    ]
})

// 更改权限---后续要接接口获取数据
const userEditRoleInfo = reactive({
    show: false,
    data: [
        {
            "rid": 1,
            "roleName": "超级管理员",
            "roleDesc": "管理所有数据",
            "permissions": null
        },
        {
            "rid": 2,
            "roleName": "商品管理员",
            "roleDesc": "管理商品",
            "permissions": null
        }
    ],
    select: [2]
})
const showInfo = function() {
    userRoleInfo.show = true;
}

const showPermission = function() {
    userEditRoleInfo.show = true;
}
onMounted(() => {
    getCategorys();
})
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

.arco-table-tr {
    background-color: red !important;
}
</style>
