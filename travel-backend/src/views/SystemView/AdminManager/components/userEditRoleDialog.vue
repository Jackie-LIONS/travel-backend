<template>
    <a-modal v-model:visible="info.show">
        <template #title>
            修改角色
        </template>
        <el-table ref="multipleTable" :data="info.data" :row-key="getRowKey" @selection-change="onSelectionChange">
            <el-table-column type="selection" :reserve-selection="true" />
            <el-table-column label="角色名" prop="roleName" />
            <el-table-column label="角色描述" prop="roleDesc" />
        </el-table>
    </a-modal>
</template>
<script setup>
import { defineProps, reactive, ref, onMounted, nextTick } from 'vue';
const props = defineProps({
    info: {
        type: Object
    }
})

const multipleTable = ref(null);
let rids = [];
const onSelectionChange = (keys) => {
    rids = []
    keys.map(item => {
        rids.push(item.rid)
    })
}

const getRowKey = (row) => {
    console.log(row.rid, row, 'row');
    return row.rid;
}
onMounted(() => {
    nextTick(() => {
        (props.info.select || []).map(idItem => {
            rids.push(idItem);
            multipleTable.value.toggleRowSelection(props.info.data.find(item => item.rid == idItem), true);
        })
    });
});
</script>
