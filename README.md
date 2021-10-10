# Final_Project
## clone 專案
```
git clone https://github.com/estella00911/Final_Project.git
```
建立 .env
```
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
PORT=
SQL_PORT=
DB_DATABASE=
JWT_SECRET=
JWT_EXPIRES_IN=
SESSION_SECRET=
AWS_DB_HOST=
AWS_DB_USERNAME=
AWS_DB_PASSWORD=
AWS_DB_DATABASE=
```
```
$ npm install
$ npm start
```
## 說明
- 10/10 新增內容：
    - 1. API 線上文件 @ apiary
    - 2. users
        - 登入及註冊，回傳 `token`、`id`。
        - 加入 JWT 驗證，才可以更新密碼、刪除 user。
        - 新增 `users/me`，供登入之後可以獲取該使用者的詳細資訊。
        - 修改各 response 的 status code 
    - 3. 新增 FAQ data table
        - 功能：新增、編輯、刪除、查看單一問題、查看所有問題