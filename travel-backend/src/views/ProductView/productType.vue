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
    <a-table :columns="columns" :data="data" @page-change="pageChange" :pagination="{
      pageSize: searchParams.pageSize,
      current: searchParams.current,
      total: searchParams.total,
    }">
        <template #optional="{ record }">
            <a-button size="small" type="primary" @click="showInfo(record)">修改</a-button>
            <a-button size="small" type="primary" status="danger">删除</a-button>
        </template>
    </a-table>
    <change-info-modal :visible="visible" :modalData="modalData" @closeModal="closeModal"></change-info-modal>
</template>

<script setup>
import { reactive, ref } from "vue";
import { IconBookmark } from "@arco-design/web-vue/es/icon";
import changeInfoModal from "./component/changeInfoModal.vue";

const visible = ref(false);
// 表格列选项配置
const columns = reactive([
    {
        title: "序号",
        dataIndex: "key",
        align: "center",
    },
    {
        title: "产品类型",
        dataIndex: "roleName",
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
        key: "1",
        roleName: "全球自由行",
    },
    {
        key: "2",
        roleName: "出境游",
    },
    {
        key: "3",
        roleName: "国内游",
    },
    {
        key: "4",
        roleName: "抱团定制",
    },
    {
        key: "5",
        roleName: "机票",
    },
    {
        key: "6",
        roleName: "门票",
    },
]);
// 分页器数据
const searchParams = reactive({
    current: 1,
    pageSize: 4,
    total: 6,
});

// 弹框数据
let modalData = reactive({});

const pageChange = async (page) => {
    searchParams.current = page;
};

const showInfo = function (record) {
    modalData = reactive(record);
    visible.value = true;
};

const closeModal = function () {
    visible.value = false;
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
