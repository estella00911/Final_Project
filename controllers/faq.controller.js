const { response } = require('express');
const db = require('../models');
require('dotenv').config();

// const Op = db.Sequelize.Op;
const { Faq } = db; // ,Faq_Category

const faqController = {
  createFaq: async (req, res) => {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.status(400).json({
        success: 0,
        message: '缺少必填欄位'
      })
    }
    try {
      const data = await Faq.create({
        question,
        answer,
        // FaqCategoryId
      } // , {
      //   include: [Faq_Category]
      // })
      )
      console.log(JSON.stringify(data))
      res.status(200).json({
        success: 1,
        message: 'successfully create a new FAQ question'
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  getFaq: async (req, res) => {
    try {
      const result = await Faq.findAll(
      // {
      //   include: [ Faq_Category ]
      // })
      )
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
  getFaqById: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Faq.findByPk(id);
      if (!result) {
        return res.status(404).json({
          success: 0,
          message:"找不到此 id 的 faq"
        })
      }
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
  updateFaq: async (req, res) => {
    const { question, answer } = req.body;
    const { id } = req.params;
    if (!question || !answer) {
      return res.status(400).json({
        success: 0,
        message: '缺少必填欄位'
      })
    }
    try {
      const data = await Faq.findByPk(id)
      if (!data) {
        return res.status(404).json({
          success: 0,
          message:"找不到此 id 的 faq，故無法更新"
          })
      }
      const result = await data.update({
        question,
        answer
        // FaqCategoryId
      })
      return res.status(200).json({
        success: 1,
        message: "成功更新 faq 資訊"
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  },
  deleteFaq: async (req, res) => {
    const { id } = req.params
    try {
      await Faq.destroy({
        where: {
          id
        }
      })
      return res.json({
        success: 1,
        message: '成功刪除 faq'
      })
    } catch (err) {
      res.status(500).json({
        success: 0,
        message: err.message
      })
    }
  }
}

module.exports = faqController