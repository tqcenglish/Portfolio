let express = require('express');
let router = express.Router();

// 模拟数据
const data = [
  {
    img: "/images/example-work01.jpg",
    title_text: "Nami",
    supporting_text: "Nami 是一个基于 Node.js 的 Asterisk AMI 连接库。 用于 Node.js 项目实时的对 Asterisk 系统监控。"
  }, {
    img: "/images/example-work02.jpg",
    title_text: "GoAMI",
    supporting_text: " GoAMI 是基于 golang 语言的 AMI 连接库, 作用与 Node.js 下的 NAMI 相识."
  }, {
    img: "/images/example-work07.jpg",
    title_text: "Hello",
    supporting_text: "Hello World."
  }, {
    img: "/images/example-work03.jpg",
    title_text: "weread-auto",
    supporting_text: "模拟手动翻页功能, 实现微信阅读赚金币."
  }]

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.render('portfolio.njk', { portfolios: data, portfolioActive: "is-active" })
});

// define the home page route
router.get('/:portfolioTitle', function (req, res) {
  const title = req.params['portfolioTitle']
  // 通过标题查询
  const portfolio = data.filter((item) => {
    return item.title_text === title
  })[0]
  res.render('portfolio_detail.njk', { portfolio: portfolio, portfolioActive: "is-active" })
});

module.exports = router;
