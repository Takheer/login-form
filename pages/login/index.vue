<template>
    <div class='container mt-3'>
        <div class="mb-3">
            <label for="email" class="form-label">
                Логин
            </label>
            <input
                id="email"
                v-model='email'
                type="email"
                class="form-control"
                placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for='password' class="form-label">
                Пароль
            </label>
            <div class='input-group'>
                <input
                    id='password'
                    v-model='password'
                    :type='showPassword ? "text" : "password"'
                    class='form-control'
                    aria-describedby="button-addon2">
                <button id="button-addon2" @click='showPassword = !showPassword' class="btn btn-outline-secondary" type="button">
                    <img :src='require(`~/assets/icons/${showPassword ? "hide" : "show"}.png`)'/>
                </button>
            </div>
        </div>
        <div class="mb-3">
            <label for='repeatPassword' class="form-label">
                Повторите пароль
            </label>
            <input id='repeatPassword' v-model='repeatPassword' :type='showPassword ? "text" : "password"' class='form-control'>
        </div>
        <button @click='logIn' type="button" class="btn btn-primary mb-3">
            Войти
        </button>
        <p v-if='errorMessage'>{{ errorMessage }}</p>
    </div>
</template>

<script>

import { login } from '~/services/auth'

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            repeatPassword: '',
            showPassword: false,
            errorMessage: '',
        }
    },
    methods: {
        async logIn() {
            if (this.password !== this.repeatPassword) {
                this.errorMessage = 'Пароли не свопадают';
                return;
            }

            try {
                const user = await login(this.email, this.password);
                this.errorMessage = '';
                localStorage.setItem('userToken', user.accessToken);
                await this.$router.push('/');
            } catch (e) {
                this.errorMessage = e.message
            }
        },
    },
}
</script>

<style lang='scss'>
</style>
