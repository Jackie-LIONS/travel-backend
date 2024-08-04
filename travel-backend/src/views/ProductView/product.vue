<template>
    <div>
        <div class="message" v-for="item in productList" :key="item.name">
            <img class="msgLeft" :src="getImageUrl(item.pimage)" alt="">
            <div class="msgRight">
                <h2 class="title">
                    <span :class="item.status == 1 ? 'title-success' : 'title-error'">{{ item.status == 1 ? '启用' : '禁用'
                        }}</span> |
                    {{ item.category.cname }} | ￥{{ item.price }}
                </h2>
                <div :title="item.productName">产品名称：{{ item.productName }}</div>
                <div>热线电话：{{ item.hotline }}</div>
                <div class="option-button">
                    <a-button type="primary" size="small" status="danger">启用/禁用</a-button>
                    <a-button type="primary" size="small">修改</a-button>
                </div>
            </div>
        </div>
        <a-pagination class="pages" :total="pageNum.total" :page-size="pageNum.size" :current="pageNum.page"
            :page-item-style="{ color: '#c9cdd4' }" @change="pageChange" />
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import api from '@/api/index.js'

const productList = reactive([])
const pageNum = reactive({
    page: 1,
    size: 3,
    total: 10
})

const productPages = async () => {
    await api.getProductPages({
        page: pageNum.page,
        size: pageNum.size
    }).then(res => {
        if (res.code === 200) {
            console.log(res, "product");
            productList.splice(0, productList.length, ...res.data.records);
            pageNum.total = res.data.total;
        }
    })
}

const pageChange = async (page) => {
    console.log(page, "page");
    pageNum.page = page;
    await productPages();  // 调用productPages方法来获取新页码的数据
}

onMounted(() => {
    productPages();
})
// 展示后端图片
const prefix = '/api';
const getImageUrl = (path) => {
    return `${prefix}${path}`;
}
</script>

<style scoped>
.message {
    width: 91%;
    height: 135px;
    margin: 10px auto;
    background-color: #daf9f7ee;
    border-radius: 20px;
    box-shadow: 0 20px 30px 0 rgb(2 2 48 / 6%);
    display: flex;
    /* margin-top: 30px; */
    border: 1px solid #e0e0e0;
}

.msgLeft {
    width: 150px;
    height: 70%;
    /* border-radius: 67%; */
    background-color: #f4f4fe;
    margin: 3% 5px 0 30px;
    font-size: 25px;
    line-height: 120px;
    color: #0d0d75;
}

.msgRight {
    font-size: 16px;
    margin-left: 20px;
    letter-spacing: 1px;
    width: 690px;
}

.msgRight h2 {
    margin-top: 10px;
    text-align: left;
    font-size: 21px;
    color: #001a4d;
    margin-bottom: 10px;
}

.msgRight .title-success {
    color: #009a29;
}

.msgRight .title-error {
    color: #cb272d;
}

.msgRight div {
    float: left;
    width: 100%;
    margin-top: 6px;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    cursor: pointer;
}

.msgRight .option-button {
    display: flex;
    flex-direction: row-reverse;
}

.msgRight .option-button .arco-btn {
    margin-left: 15px;
}

.pages {
    margin-right: 35px;
    float: right;
}
</style>