<template>
    <a-modal v-model:visible="info.show" :footer="false">
        <template #title>
            角色与权限
        </template>
        <el-table :data="info.data" row-key="id" size="small" :border="false">
            <el-table-column type="expand">
                <template #default="scope">
                    <el-table :data="scope.row.permissions" :border="false"
                        :style="{ marginLeft: '50px', width: '400px' }">
                        <el-table-column label="权限名" prop="permissionName" />
                        <el-table-column label="权限资源路径" prop="url" />
                    </el-table>
                </template>
            </el-table-column>
            <el-table-column label="角色名" prop="roleName" />
            <el-table-column label="角色描述" prop="roleDesc" />
        </el-table>
    </a-modal>
</template>
<script setup>
import { defineProps, reactive } from 'vue';
const props = defineProps({
    info: {
        type: Object
    }
})
</script>
