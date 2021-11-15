# Final_Project
## [API document](https://estella00911.github.io/Final_Project/)
#### Users
| HTTP method | CRUD   | URLs              | actions                   |
| ----------- | ------ | ----------------- | ------------------------- | 
| `POST`      | Create | `/api/admin/faq`      | To create new FAQ   |
| `GET`       | Read   | `/api/admin/faq`      | To get all FAQs         |
| `GET`       | Read   | `/api/admin/faq/{id}` | To get particular FAQ    |
| `PUT`       | Update | `/api/admin/faq/{id}` | To update particular FAQ |
| `DELETE`    | Delete | `/api/admin/faq/{id}` | To delete particular FAQ | 
| `POST`    | READ | `/api/users/login` | To login |

#### FAQs
| HTTP method | CRUD   | URLs              | actions                   |
| ----------- | ------ | ----------------- | ------------------------- | 
| `POST`      | Create | `/api/users/register`      | To create/register user   |
| `GET`       | Read   | `/api/users`      | To get all users          |
| `GET`       | Read   | `/api/users/{id}` | To get particular user    |
| `PUT`       | Update | `/api/users/{id}` | To update particular user |
| `DELETE`    | Delete | `/api/users/{id}` | To delete particular user | 
| `POST`    | READ | `/api/users/login` | To login |

### 將 apib 輸出成 HTML
1. 下載 API Blueprint on apiary 網站，然後檔名為 `xxxx.apib`
2. 重新命名 xxxx.apib 為 `myfile.md`
3. 在專案上下載 aglio
```
$ npm install -g aglio
```

4. Start aglio server
```
$ aglio -i myfile.md -s
```

5. 打開 `localhost:3000` 並下載 HTML 檔案，存成 `index.html`。
6. 在專案根目錄上建立新分支 `gh-pages`。
7. 將 `xxx.apib`、`myfile.md`、`index.html` 放入新分支 `gh-pages`，並 push 至 `gh-pages` 分支。
8. 設定 github pages 的分支為 `gh-pages`。
9. 點擊 [github pages 連結](https://estella00911.github.io/Final_Project/)

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
    - 4. [現關閉] 部署至 AWS EC2，並放置自己的網域 `estella00911.tw`

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