const {genSaltSync, hashSync, compareSync} = require('bcrypt') // getSaltSync, hashSync, compareSync
const { sign } = require('jsonwebtoken')
const {createToken} = require("../middlewares/auth.js");

const db = require('../models')
require('dotenv').config()
const saltRounds = 10;

// const Op = db.Sequelize.Op;
const { User } = db

const userController = {
  createUser: async (req, res) => {
    // if (!phone || !password || !email) {
    //   // 填寫不完整
    //   return
    // }
    const { phone, password, email } = req.body
    const salt = genSaltSync(saltRounds);
    const hash = hashSync(password, salt);
    try {
      const data = await User.create({
        phone,
        password: hash,
        email
      })
      const jsontoken = createToken(data);
      res.json({
        success: 1,
        message: 'successfully create a new user',
        token: jsontoken
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  getUsers: async (req, res) => {
    try {
      const result = await User.findAll()
      return res.json({
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
  getUserById: async (req, res) => {
    const { id } = req.params
    try {
      const result = await User.findOne({
        where: {
          id
        }
      })
      return res.json({
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
  updateUser: async (req, res) => {
    try {
      const { id } = req.params
      const { phone, password, email } = req.body
      const result = await User.update({
        phone,
        password,
        email
      },
        {
          where: {
            id
        }
      })
      return res.json({
        success: 1,
        message: "successfully update information"
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  deleteUser: async (req, res) => {
    const {id} = req.params
    try {
      await User.destroy({
        where: {
          id
        }
      })
      return res.json({
        success: 1,
        message: 'successfully delete the user'
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
  login: async (req, res) => {
    const { password, email } = req.body
    try {
      const data = await User.findOne({
        where: {
          email
        }
      })
      if (!data) {
        res.json({
          success: 0,
          message: 'email not found'
        })
      }
      const result = compareSync(password, data.password) //boolean
      if (result) {
        data.password = undefined;
        const jsontoken = sign({ results: data }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRES_IN
        });
        return res.json({
          success: 1,
          message: 'login successfully',
          token: jsontoken
        })
      } else {
        return res.json({
          success: 0,
          message: 'invalid password'
        })
      }
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  }
}

module.exports = userController