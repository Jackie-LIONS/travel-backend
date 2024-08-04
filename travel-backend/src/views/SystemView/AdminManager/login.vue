<template>
    <div class="container">
        <div class="box">
            <h3>旅游系统后台</h3>
            <a-form @keypress.enter="onSubmit()" hide-required-asterisk :model="modelForm" ref="form" :rules="rules">
                <a-form-item label="用户名" label-width="60px" prop="username" style="width: 300px;">
                    <a-input type="text" v-model="modelForm.username" />
                </a-form-item>
                <a-form-item label="密码" label-width="60px" prop="password" style="width: 300px;"
                    class="custom-form-item">
                    <a-input-password v-model:visibility="visibility" v-model="modelForm.password"
                        :defaultVisibility="false" allow-clear style="width: 100%;" />
                </a-form-item>
                <a-form-item label-width="60px" style="width: 300px;">
                    <a-button type="primary" style="width: 100%" @click="onSubmit()">登录</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from 'vue-router'
import api from '@/api/index.js'
import { Message } from '@arco-design/web-vue';

const visibility = ref(true);
const form = ref(null);
const router = useRouter()
const modelForm = reactive({ username: "", password: "" });
const rules = reactive({
    username: [{ required: true, message: '用户名不能为空' }],
    password: [{ required: true, message: '密码不能为空' }],
});
const onSubmit = () => {
    form.value.validate((valid) => {
        if (!valid) {
            const form = new FormData()
            form.append('username', modelForm.username)
            form.append('password', modelForm.password)
            api.postLogin(form).then(res => {
                if (res.code === 200) {
                    router.push('/')
                } else {
                    Message.error(res.message)
                }
            })
        }
    });
};
</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    background: url(../AdminManager/images/08.png);
    color: #fff;
    text-align: center;
}

.box {
    width: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    border-radius: 15px;
    padding: 20px;

    :deep(.el-form-item__label) {
        color: #fff;
    }

}
</style>