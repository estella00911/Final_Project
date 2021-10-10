const {genSaltSync, hashSync, compareSync} = require('bcrypt') // getSaltSync, hashSync, compareSync
const { sign } = require('jsonwebtoken')
const {createToken, checkToken} = require("../middlewares/auth.js");

const db = require('../models')
require('dotenv').config()
const saltRounds = 10;

// const Op = db.Sequelize.Op;
const { User } = db;

const userController = {
  createUser: async (req, res) => { // 註冊 POST
    const { password, email, phone } = req.body;

    if (!password || !email || !phone) {
      return res.status(400).json({ // 400 Bad Request (client error)
        success: 0,
        message: '缺少必填欄位' // 'Please input missing fields'
      })
    }
    // hash
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);
    try {
      const data = await User.create({
        password: hash,
        email,
        phone
      })
      let jsonToken = createToken(data); // src= middleware/auth.js
      res.status(200).json({ // 200: success and response with body content
        success: 1,
        message: '成功建立新的使用者',// successfully create a new user
        token: jsonToken,
        data: {
          id: data.id
        }
      })
    } catch (err) {
      res.status(409).json({
        success: 0,
        message: '此信箱已被註冊過'
      })
    }
  },
  login: async (req, res) => {
    const { password, email } = req.body;
    if (!password || !email) {
      return res.status(400).json({ // 400: client error
        success: 0,
        message: '缺少必填欄位' // 'Please input missing fields'
      })
    }
    try {
      const data = await User.findOne({
        where: {
          email
        }
      })
      if (!data) {
        console.log('!data')
        return res.status(409).json({ // 409: conflict
          success: 0,
          message: '此 Email 尚未被註冊過' // email not found
        })
      }
      const result = compareSync(password, data.password) // boolean
      if (result) {
        let jsonToken = createToken(data);
        return res.status(200).json({ // 200: success and response with body content
          success: 1,
          message: '成功登入', // login successfully
          token: jsonToken,
          data: {
            id: data.id
          }
        })
      } else {
        return res.status(401).json({  // 401: unauthorized
          success: 0,
          message: '密碼有誤' // invalid password' 
        })
      }
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  getUsers: async (req, res) => { // 查詢所有使用者 GET
    try {
      const result = await User.findAll()
      return res.status(200).json({
        success: 1,
        data: result
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  getUserById: async (req, res) => { // 查詢單一使用者 GET
    const { id } = req.params
    try {
      const result = await User.findByPk(id)
      if (!result) {
        return res.status(404).json({
          success: 0,
          message: '無法成功藉由 userId 找到 user' // can not find user by this id
        })
      }
      return res.status(200).json({
        success: 1,
        data: result
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message // can not find user by this id
      })
    }
  },
  updateUser: async (req, res) => { // 新密碼
    const { id } = req.params;
    const { password, email } = req.body;
    if (!password || !email) {
      return res.json({
        success: 0,
        message: '缺少必填欄位'
      })
    };
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);
    try {
      const data = await User.findOne({
        where: {
          id
        }
      })
      if (!data) {
        return res.status(404).json({
          success: 0,
          message: '無法藉由 userId 找到 user' // can not find user by this id
        })
      }
      await data.update({
        password: hash
      })
      // let jsonToken = createToken(data); // src= middleware/auth.js
      return res.json({
        success: 1,
        message: '成功更新使用者的密碼' // successfully update information
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message,
      })
    }
  },
  deleteUser: async (req, res) => {
    const {id} = req.params
    try {
      const result = await User.destroy({
        where: {
          id
        }
      })
      if (!result) {
        return res.status(404).json({
          success: 0,
          message: '找不到此 id 的 user，所以沒有刪除成功。' // can not find user by this id
        })
      }
      return res.status(200).json({
        success: 1,
        message: '成功刪除 user' // successfully delete the user
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  getUserByEmail: async(req, res) => {
    // 思考中
  },
  getUserMe: async (req, res) => {
    const { id } = req.body
    try {
      const data = await User.findByPk(id);
      if (!data) {
        return res.status(404).json({
          success: 0,
          message: '找不到此 id 的 user'
        })
      }
      return res.status(200).json({
        success: 1,
        message: '成功獲得使用者的自身資訊',
        data
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message 
      })
    }
  }
}

module.exports = userController