<template>
    <a-modal :visible="visible" @ok="handleOk" @cancel="handleCancel">
        <template #title>
            Title
        </template>
        <div>{{ modalData }}</div>
    </a-modal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
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
    
};
const handleCancel = () => {
    emit('closeModal');
}
</script>

<style>
</style>