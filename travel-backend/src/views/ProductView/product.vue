<template>
    <div class="message" v-for="item in productList" :key="item.name">
        <img class="msgLeft" :src="item.img" alt="">
        <div class="msgRight">
            <h2 class="title">
                <span :class="item.productStatus == 0 ? 'title-success': 'title-error'">{{ item.productStatus == 0 ? '启用' : '禁用' }}</span> | {{ item.productType }} | {{ item.price }}￥
            </h2>
            <div :title="item.productName">产品名称：{{ item.productName }}</div>
            <div>咨询电话：{{ item.phone }}</div>
            <div class="option-button">
                <a-button type="primary" size="small" status="danger">启用/禁用</a-button>
                <a-button type="primary" size="small">修改</a-button>
            </div>
        </div>
    </div>
    <a-pagination class="pages" :total="50" :page-item-style="{ color: '#c9cdd4'}"/>
</template>
<script setup>
import { reactive } from 'vue'
const productList = reactive([
    {
        img: "https://www.best-audio.net/wp-content/uploads/2021/11/45sqqH92.jpg",
        productName: "【春节】三亚 双飞3天2晚 自由行套票【含广州直飞往返机票+2晚海居铂尔曼酒店高级花园房+每日中西式自助早餐+VIP专车接送机服务】",
        price: "10001",
        phone: "123456",
        productStatus: 0,
        productType: "国内游"
    },
    {
        img: "https://q2.itc.cn/images01/20240319/670b517c3e93458c811cd34d6779219d.png",
        productName: "【双12爆款】阳朔 高铁3天2晚 自由行套餐【含广州往返高铁票+2晚汉唐·馨阁酒店+每日早餐+天籁·蝴蝶泉景区门票】",
        price: "12341",
        phone: "123456",
        productStatus: 1,
        productType: "国外游"
    },
    {
        img: "https://img0.baidu.com/it/u=1166593706,939026509&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
        productName: "【直飞芒市 云南腾冲银杏村双飞5天】和顺古镇 邦腊掌热矿温泉SPA 热海公园 瑞丽勐焕大金塔",
        price: "10001",
        phone: "123456",
        productStatus: 0,
        productType: "国内游"
    },
])
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