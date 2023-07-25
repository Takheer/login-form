# login-form

Форма для логина без возомжности регистрации и смены пароля.
Логиниться нужно по почте admin@example.com и паролю password

Авторизация работает через Firebase.
Чтобы запустить сборку локально, нужно создать файл `services/firebaseConfig.ts` и добавить в него 
```ts
export const firebaseConfig = {
    apiKey: '...',
    authDomain: '...',
    projectId: '...',
    storageBucket: '...',
    messagingSenderId: '...',
    appId: '...',
};
```

Если понадобится — могу выслать)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

