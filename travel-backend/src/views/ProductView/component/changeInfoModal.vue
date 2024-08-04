<template>
    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
            修改产品类型
        </template>

        <div>
            <a-form :model="modalData" :style="{ width: '600px' }">
                <a-form-item label="序号:">
                    {{ modalData.cid }}
                </a-form-item>
                <a-form-item label="产品类型:">
                    <a-input v-model="modalData.cname" placeholder="请输入产品类型" />
                </a-form-item>
            </a-form>
        </div>
    </a-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import api from '@/api/index.js';
import { Message } from '@arco-design/web-vue';

const props = defineProps({
    visible: {
        type: Boolean,
    },
    modalData: {
        type: Object
    }
});
const emit = defineEmits(['closeModal']);
const handleOk = () => {
    api.postUpdateCategory({
        cid: props.modalData.cid,
        cname: props.modalData.cname
    }).then(res => {
        if(res.code === 200){
             emit('closeModal');
             Message.info(res.message)
        }else{
            Message.info(res.message)
        }
    })
};
const handleCancel = () => {
    emit('closeModal');
}
</script>

<style></style>