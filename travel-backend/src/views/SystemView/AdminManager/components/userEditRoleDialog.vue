<template>
    <a-modal v-model:visible="info.show">
        <template #title>
            修改角色
        </template>
        <el-table ref="multipleTable" :data="info.data" row-key="rid" @selection-change="onSelectionChange">
            <el-table-column type="selection" :reserve-selection="true" />
            <el-table-column label="角色名" prop="roleName" />
            <el-table-column label="角色描述" prop="roleDesc" />
        </el-table>
    </a-modal>
</template>
<script setup>
import { defineProps, reactive, ref, onMounted } from 'vue';
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

// onMounted(() => {
//     // 获取所有角色
//     (props.info.select || []).map(row => {
//         rids.push(row.id)
//         // setTimeout(function () {
//         // 默认选中该用户拥有的权限
//         multipleTable.value.toggleRowSelection(props.info.data.find(item => item.id == row.id), true);
//         // }, 0)
//     })
// })
</script>
