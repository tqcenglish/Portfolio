let express = require('express')
let router = express.Router()
let marked = require('marked');
let fs = require('fs')
const data = [
  {
    img: "/images/example-work01.jpg",
    title_text: "如何成为一个程序猿",
    tag: "摄影",
    supporting_text: "坚持写代码，不管在任何地方, 任何时间."
  }, {
    img: "/images/example-work01.jpg",
    title_text: "如何成为一个程序猿",
    tag: "旅游",
    supporting_text: "坚持写代码，不管在任何地方, 任何时间."
  }, {
    img: "/images/example-work01.jpg",
    title_text: "如何成为一个程序猿",
    tag: "漫谈",
    supporting_text: "坚持写代码，不管在任何地方, 任何时间."
  }, {
    img: "/images/example-work03.jpg",
    title_text: "weread-auto",
    tag: "工作",
    supporting_text: "模拟手动翻页功能, 实现微信阅读赚金币."
  }]

// define the blog route
router.get('/', function (req, res) {
  res.render('blog.njk', { blogs: data, blogActive: "is-active" })
});

router.get('/:blogTitle', (req, res) => {
  fs.readFile('md/blog/白鹭湿地公园.md', "utf-8", (err, data) => {
    if (err) throw err;
    let blog = marked(data);
    res.render('blog_detail_simple.njk', {blogBody: blog})
  });
})

module.exports = router
