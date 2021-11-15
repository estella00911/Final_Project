FORMAT: 1A
HOST: http://localhost:5002/api

# test
`const BASE_URL = https://estella00911.tw/api || http://localhost:5002`

路徑有
1. 使用者：`${BASE_URL}/api/users/`
2. FAQ：`${BASE_URL}/api/admin/faq`

## Users [/users]

| HTTP method | CRUD   | URLs              | actions                   | Sequelize    |
| ----------- | ------ | ----------------- | ------------------------- | ------------ |
| `POST`      | Create | `/api/users/register`      | To create/register user   | `.create()`  |
| `GET`       | Read   | `/api/users`      | To get all users          | `.findAll()` |
| `GET`       | Read   | `/api/users/{id}` | To get particular user    | `.findOne()` |
| `PUT`       | Update | `/api/users/{id}` | To update particular user | `.findOne(), .update()`        |
| `DELETE`    | Delete | `/api/users/{id}` | To delete particular user | `.destroy()`        |
| `POST`    | READ | `/api/users/login` | To login | `.findOne()`        |

### Register [POST /users/register]

+ Request (application/json)
    
    + Headers
    
            Location:api/users/register
    
    + Body
    
            {
                "email": "jean111@gmail.com",
                "phone": "0912345678",
                "password": "jean111"
            }
            
+ Response 200 (application/json)

    註冊成功
    
    + Body
    
            {
                "success": 1,
                "message": "成功建立新的使用者",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksImNyZWF0ZWRBdCI6IjIwMjEtMTAtMTBUMDY6Mjg6MzcuNjY0WiIsImlhdCI6MTYzMzg0NzMxNywiZXhwIjoxNjMzOTMzNzE3fQ.mgQYlCITKl3wTxwDVpNnCeiyzrtBQmeZzDJV5avLsCQ",
                "data": {
                    "id": 9
                }
            }

+ Response 409 (application/json)
    
    此信箱已被註冊過
    
    + Body
    
            {
                "success": 0,
                "message": "此信箱已被註冊過"
            }
        

+ Request (application/json)

    + Body
    
            {
                "email": "jean111@gmail.com",
                "phone": "0912345678"
                <!--缺少 password 欄位 -->
            }
            

+ Response 400 (application/json)

    缺少必填欄位

    + Body

            {
                "success": 0,
                "message": "缺少必填欄位"
            }
            
### Login [POST /users/login]

+ Request (application/json)

        {
            "email": "123@gmail.com",
            "password": "123"
        }

+ Response 200 (application/json)

    成功登入

    + Body

            {
                "success": 1,
                "message": "成功登入",
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImNyZWF0ZWRBdCI6IjIwMjEtMTAtMTBUMDE6NTA6MDAuMDAwWiIsImlhdCI6MTYzMzg0NzI2NiwiZXhwIjoxNjMzOTMzNjY2fQ.CU9PsrSYsptTepHgChMuX963JbqLqvz43z_4xpynUT0",
                "data": {
                    "id": 5
                }
            }
+ Response 401 (application/json)
    
    密碼有誤    
    
    + Body

            {
                "success": 0,
                "message": "密碼有誤"
            }
        
+ Response 409 (application/json)

    此 Email 尚未被註冊過

    + Body
    
            {
                "success": 0,
                "message": "此 Email 尚未被註冊過"
            }
        
        
+ Request (application/json)

        {
            "email": "123@gmail.com"
        }
        
+ Response 400 (application/json)

    缺少必填欄位

    + Body
    
            {
                "success": 0,
                "message": "缺少必填欄位"   
            }  


### getUsersById [GET /users/{id}]

+ Parameters

    + id: 10 (number, optional) - id
    
+ Response 200 (application/json)

    + Headers

            Authorization: Bearer Token
    
    + Body
    
            {
                "success": 1,
                "data": {
                    "id": 9,
                    "email": "124@gmail.com",
                    "phone": "0913131",
                    "password": "$2b$10$AkBUXMcbpZm/HCivbBcTf.LjXLWTEqLNNKr9GOz/Kj8SU3J8AGmQS",
                    "isAdmin": null,
                    "createdAt": "2021-10-10T06:28:37.000Z",
                    "updatedAt": "2021-10-10T06:28:37.000Z"
                }
            }

+ Response 404 (application/json)

    + Body
    
            {
                "success": 0,
                "message": "無法成功藉由 userId 找到 user"
            }
            
        
### getUsers [GET /users]

+ Response 200

    
    + Headers

            Authorization: Bearer Token
    
    + Body

            {
            "success": 1,
            "data": [
                {
                    "id": 3,
                    "email": "estella00911@gmail.com",
                    "phone": "093123123",
                    "password": "$2b$10$RaJiukMH4UQyKOId3p1Kx.HEyLunsj4nZp5gBtaBe2H54CALYNTNK",
                    "isAdmin": null,
                    "createdAt": "2021-10-07T10:57:48.000Z",
                    "updatedAt": "2021-10-07T10:58:32.000Z"
                },
                {
                    "id": 4,
                    "email": "eeee@gmail.com",
                    "phone": "09123432",
                    "password": "$2b$10$UxZxhF49nXcWKgDkAJ1QCO5U0aLW.vpBbw848QZrrJkGlQl5cNkS.",
                    "isAdmin": null,
                    "createdAt": "2021-10-09T12:24:27.000Z",
                    "updatedAt": "2021-10-09T12:24:27.000Z"
                },
                {
                    "id": 5,
                    "email": "123@gmail.com",
                    "phone": "09232",
                    "password": "$2b$10$As4HZ84HjpgNsWS4SxMqFuxMqvizA910GqRn/oyxBLPDVomTUtskK",
                    "isAdmin": null,
                    "createdAt": "2021-10-10T01:50:00.000Z",
                    "updatedAt": "2021-10-10T01:50:00.000Z"
                },
                {
                    "id": 9,
                    "email": "124@gmail.com",
                    "phone": "0913131",
                    "password": "$2b$10$AkBUXMcbpZm/HCivbBcTf.LjXLWTEqLNNKr9GOz/Kj8SU3J8AGmQS",
                    "isAdmin": null,
                    "createdAt": "2021-10-10T06:28:37.000Z",
                    "updatedAt": "2021-10-10T06:28:37.000Z"
                }
            ]
            }


+ Response 500 (application/json)

    + Headers

            Authorization: Bearer Token
    
    + Body

            {
                success: 0,
                message: err.message
            }

### updateUser [PUT /users/{id}]

+ Parameters

    + id: 10 (number, optional) - id
    
+ Request

    + Headers

            Authorization: Bearer Token
    
    + Body
    
            {
                "email": "124@gmail.com",
                "password": "1241"
            }
        
+ Response 200 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
    
            {
                "success": 1,
                "message": "成功更新使用者的密碼"
            }
            
+ Response 404 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
    
            {
                success: 0,
                message: '無法藉由 userId 找到 user'
            }

+ Response 400 (application/json)
    + Header
    
            Authorization: Bearer Token   
    
    + Body
            
            {
                success: 0,
                message: '缺少必填欄位'
            }
            
+ Response 500 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
            
            {
                success: 0,
                message: err.message
            }
            
### deleteUser [DELETE /users/{id}]

+ Parameters

    + id: 10 (number, optional) - id

        
+ Response 200 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
    
            {
                "success": 1,
                "message": "成功刪除 user"
            }
            
+ Response 404 (application/json)

    + Header
    
            Authorization: Bearer Token   
            
    + Body
    
            {
                "success": 0,
                "message": "找不到此 id 的 user，所以沒有刪除成功。"
            }

+ Response 500 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
            
            {
                success: 0,
                message: err.message
            }
            
### getUserMe [GET /users/me]

+ Request 

    + Headers
    
            Authorization: Bearer Token   
    
    + Body
    
            {
                "id": 9
            }
            
            
+ Response 200 (application/json)

        {
            "success": 1,
            "message": "成功獲得使用者的自身資訊",
            "data": {
                "id": 5,
                "email": "123@gmail.com",
                "phone": "09232",
                "password": "$2b$10$As4HZ84HjpgNsWS4SxMqFuxMqvizA910GqRn/oyxBLPDVomTUtskK",
                "isAdmin": null,
                "createdAt": "2021-10-10T01:50:00.000Z",
                "updatedAt": "2021-10-10T01:50:00.000Z"
            }
        }
        
+ Response 404 (application/json)

        {
          success: 0,
          message: '找不到此 id 的 user'
        }
        
+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }
          
          
## FAQs [/admin/faq]

| HTTP method | CRUD   | URLs              | actions                   | Sequelize    |
| ----------- | ------ | ----------------- | ------------------------- | ------------ |
| `POST`      | Create | `/api/admin/faq`      | To create new FAQ   | `.create()`  |
| `GET`       | Read   | `/api/admin/faq`      | To get all FAQs          | `.findAll()` |
| `GET`       | Read   | `/api/admin/faq/{id}` | To get particular FAQ    | `.findOne()` |
| `PUT`       | Update |`/api/admin/faq/{id}`  | To update particular FAQ | `.()`        |
| `DELETE`    | Delete | `/api/admin/faq/{id}`  | To delete particular user | `.()`        |

### Create  [POST /admin/faq]

+ Request (application/json)
    
    + Headers
    
            Authorization: Bearer Token
    
    + Body
    
            {
                "question": "question",
                "answer": "answer"  
            }
            
+ Response 200 (application/json)
    
        {
            "success": 1,
            "message": "successfully create a new FAQ question"
        }
+ Response 400 (application/json)

        {
            success: 0,
            message: '缺少必填欄位'
        }

+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }
          
### getFaq  [GET /admin/faq]
            
+ Response 200 (application/json)
    

        {
            "success": 1,
            "data": [
                {
                    "id": 1,
                    "question": "question",
                    "answer": "answer",
                    "createdAt": "2021-10-10T08:28:51.000Z",
                    "updatedAt": "2021-10-10T08:28:51.000Z"
                },
                {
                    "id": 2,
                    "question": "question1111",
                    "answer": "answer1111",
                    "createdAt": "2021-10-10T08:33:06.000Z",
                    "updatedAt": "2021-10-10T08:33:06.000Z"
                }
            ]
        }

+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }
        
### getFaqById [GET /admin/faq/{id}]

+ Parameters

    + id: 10 (number, optional) - id
    

+ Response 200 (application/json)

        {
            "success": 1,
            "data": {
                "id": 2,
                "question": "question1111",
                "answer": "answer1111",
                "createdAt": "2021-10-10T08:33:06.000Z",
                "updatedAt": "2021-10-10T08:33:06.000Z"
            }
        }

+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }

+ Response 404 (applicatoin/json)

        {
            "success": 0,
            "message": "找不到此 id 的 faq"
        }
        
+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }
        
### updateFaq [PUT /admin/faq/{id}]


+ Parameters

    + id: 10 (number, optional) - id
    
+ Request

        {
            "question": "question12222",
            "answer": "answer12222"  
        }

+ Response 200 (application/json)
    
        {
            "success": 1,
            "message": "successfully update information"
        }
        
+ Response 400 (application/json)

        {
            success: 0,
            message: '缺少必填欄位'
        }
        
+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }

### deleteFaq [DELETE /admin/faq/{id}]

+ Parameters

    + id: 10 (number, optional) - id

        
+ Response 200 (application/json)

    + Header
    
            Authorization: Bearer Token   
    
    + Body
    
            {
                "success": 1,
                "message": "成功刪除 faq"
            }
            
+ Response 404 (application/json)

        {
            "success": 0,
            "message": "找不到此 id 的 faq，故無法更新"
        }
        
+ Response 500 (application/json)

        {
            success: 0,
            message: err.message 
        }
        
## books [/products]

```
npx sequelize-cli model:generate --name Product --attributes bookName:string,originalPrice:int,version:string,author:string,ISBN:string,publisher:string
```