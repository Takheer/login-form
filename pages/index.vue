<template>
    <div class='container'>
        <div class='row d-flex vh-100 justify-content-center align-items-center'>
            <div class='col-2'></div>
            <div class='col-8'>
                <h1>Форма входа</h1>
                <template v-if='userToken'>
                    <p>Вы авторизованы! Ваш токен:</p>
                    <pre class='overflow-scroll fs-3'>{{ userToken }}</pre>
                    <button @click='logOut' class='btn btn-outline-secondary'>Выйти</button>
                </template>
                <template v-else>
                    <p>Авторизуйтесь, чтобы посмотреть содержимое этой страницы</p>
                    <button @click='navigateToLogin' class='btn btn-outline-primary'>Войти</button>
                </template>
            </div>
            <div class='col-2'></div>
        </div>
    </div>
</template>

<script>
import { logout } from '~/services/auth'

export default {
    name: 'MainPage',
    data() {
        return {
            userToken: '',
        }
    },
    mounted() {
        this.userToken = localStorage.getItem('userToken')
    },
    methods: {
        async logOut() {
            await logout();
            localStorage.removeItem('userToken');
            this.userToken = ''
        },
        navigateToLogin() {
            this.$router.push('/login')
        }
    }
}
</script>
