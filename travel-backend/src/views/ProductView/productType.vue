<template>
    <div>
        <span class="title">产品类型管理</span>
        <span class="title-info">全部产品类型</span>
    </div>
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
            <a-button size="small" type="primary" @click="showInfo(record)">修改</a-button>
            <a-button size="small" type="primary" status="danger" @click="confirmDelete(record)">删除</a-button>
        </template>
    </a-table>
    <change-info-modal :visible="visible" :modalData="modalData" @closeModal="closeModal"></change-info-modal>
    <a-modal v-model:visible="deleteVisible" @ok="handleDeleteOk" @cancel="handleDeleteCancel">
        <template #title>确认删除</template>
        <div>确定要删除这个产品类型吗？</div>
    </a-modal>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { IconBookmark } from "@arco-design/web-vue/es/icon";
import changeInfoModal from "./component/changeInfoModal.vue";
import api from '@/api/index.js';
import { Message } from '@arco-design/web-vue';

let total = ref(1);
const visible = ref(false);
// 表格列选项配置
const columns = reactive([
    {
        title: "序号",
        dataIndex: "cid",
        align: "center",
    },
    {
        title: "产品类型",
        dataIndex: "cname",
        align: "center",
    },
    {
        title: "Optional",
        slotName: "optional",
        align: "center",
    },
]);
// 表格数据
const data = reactive([
    {
        cid: "1",
        cname: "全球自由行",
    },
]);
// 分页器数据
const searchParams = reactive({
    current: 1,
    pageSize: 4,
});
const getCategorys = async () => {
    await api.getCategory({
        page: 1,
        size: 8
    }).then(res => {
        if (res.code === 200) {
            console.log(res);
            total.value = res.data.total,
            Object.assign(data, res.data.records);
        }
    })
}
onMounted(() => {
    getCategorys();
})
const pageChange = async (page) => {
    searchParams.current = page;
};

const pageSizeChange = async (page) => {
    searchParams.pageSize = page
}

// 弹框数据
let modalData = reactive({});

const showInfo = function (record) {
    modalData = reactive(record);
    visible.value = true;
};
const closeModal = function () {
    visible.value = false;
};

// 删除

const deleteVisible = ref(false);  // 控制删除确认弹窗的显示
let deleteRecord = null;  // 存储待删除的记录
// 确认删除
const confirmDelete = function (record) {
    deleteRecord = record;
    deleteVisible.value = true;
};
const handleDeleteOk = async () => {
    if (deleteRecord) {
        await api.postDeleteCategory(
            deleteRecord.cid
        ).then(res => {
            if (res.code === 200) {
                Message.info(res.message + "删除成功!");
                getCategorys();  // 重新获取分类列表
            } else {
                Message.error(res.message);
            }
        }).catch(error => {
            Message.error('删除失败');
            console.error(error);
        });
    }
    deleteVisible.value = false;
};
const handleDeleteCancel = () => {
    deleteVisible.value = false;
};
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
