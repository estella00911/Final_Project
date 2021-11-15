# Final_Project
## Outline
* API document(#apiDoc)
* Path Form(#pathForm)
    * Users(#users)
    * FAQs(#faqs)
* Demo(#demo)
    * User Login(#userLogin)
    * FAQ 查詢(#faqQuery)
* 進度(#process)
* 第三方 Library(#thirdLibrary)
* API document 輸出紀錄(#apiary)
* 專案(#project)
<h2 id="apiDoc">API document</h2>

[API 文件規格書](https://estella00911.github.io/Final_Project/)

<h2 id="pathForm">Path Form</h2>

<h3 id="users">API document</h3>

| HTTP method | CRUD   | URLs              | actions                   |
| ----------- | ------ | ----------------- | ------------------------- | 
| `POST`      | Create | `/api/users/register`      | To create/register user   |
| `GET`       | Read   | `/api/users`      | To get all users          |
| `GET`       | Read   | `/api/users/{id}` | To get particular user    |
| `PUT`       | Update | `/api/users/{id}` | To update particular user |
| `DELETE`    | Delete | `/api/users/{id}` | To delete particular user | 
| `POST`    | READ | `/api/users/login` | To login |

<h2 id="faqs">FAQs</h2>

| HTTP method | CRUD   | URLs              | actions                   |
| ----------- | ------ | ----------------- | ------------------------- | 
| `POST`      | Create | `/api/admin/faq`      | To create new FAQ   |
| `GET`       | Read   | `/api/admin/faq`      | To get all FAQs         |
| `GET`       | Read   | `/api/admin/faq/{id}` | To get particular FAQ    |
| `PUT`       | Update | `/api/admin/faq/{id}` | To update particular FAQ |
| `DELETE`    | Delete | `/api/admin/faq/{id}` | To delete particular FAQ | 
| `POST`    | READ | `/api/users/login` | To login |

<h2 id="demo">Demo</h2>

<h3 id="userLogin">User Login</h3>
- Request
```
request({
  method: 'POST',
  url: 'http://localhost:5002/api/users/login',
  headers: {
    'Content-Type': 'application/json'
  },
  body: "{  \"email\": \"123@gmail.com\",  \"password\": \"123\"}"
}, function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
```
- Response
```
{
    "success": 1,
    "message": "成功登入",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE4LCJjcmVhdGVkQXQiOiIyMDIxLTExLTE1VDA3OjQ1OjMxLjAwMFoiLCJpYXQiOjE2MzY5NjU4OTcsImV4cCI6MTYzNzA1MjI5N30.I77vzC5U003s0qW2qm88-jAsWCYSrx8oZ5tcTKkR-tc",
    "data": {
        "id": 18
    }
}
```
<h3 id="faqQuery">FAQ 查詢問題</h3>

- Request
```
request('http://localhost:5002/api/admin/faq', function (error, response, body) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', JSON.stringify(response.headers));
  console.log('Response:', body);
});
```
- Response
```
{
    "success": 1,
    "data": [
        {
            "id": 1,
            "question": "如何查詢目前訂單的處理情況？",
            "answer": "點選「查詢訂單」，點選訂單編號，就可以查詢訂單記錄、明細及出貨狀態。",
            "createdAt": "2021-11-15T08:48:37.000Z",
            "updatedAt": "2021-11-15T08:48:37.000Z"
        },
        {
            "id": 2,
            "question": "如何修改使用者資料？",
            "answer": "點選「會員資訊」，點選「編輯」。",
            "createdAt": "2021-11-15T08:49:12.000Z",
            "updatedAt": "2021-11-15T08:49:12.000Z"
        }
    ]
}
```

<h2 id="process">進度</h2>
- 開發中
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

<h2 id="thirdLibrary">第三方的 Library</h2>
- bcrypt
將密碼加密後再存進 MySQL

- cors
解決跨來源資源共用

- dotenv
設置環境變數

- jsonwebtoken
使用 JWT 驗證來實作登入機制

- MySQL

- Sequelize
使用 ORM 來操作資料庫

<h2 id="apiary">API document 輸出紀錄</h2>

將 `.apib` 輸出成 `HTML`
1. 從 apiary 網站下載 `API Blueprint`，然後檔名為 `xxxx.apib`
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


<h2 id='project>專案</h2>
```
git clone https://github.com/estella00911/Final_Project.git
```

### 建立 .env

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