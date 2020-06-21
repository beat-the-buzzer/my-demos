//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock('/api/mock01/api01', {
  success: true,
  message:
  {
    "mtime": "@datetime",//随机生成日期时间
    "score|1-100": 100,//随机生成1-800的数字
    "nickname": "@cname",//随机生成中文名字
  }
  // 详细语法规范链接: https://www.jianshu.com/p/4579f40e6108
});


Mock.mock('/api/mock01/api02', {
  success: true,
  message:
    [
      {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-100": 100,//随机生成1-800的数字
        "nickname": "@cname",//随机生成中文名字
      }, {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-100": 100,//随机生成1-800的数字
        "nickname": "@cname",//随机生成中文名字
      }, {
        "mtime": "@datetime",//随机生成日期时间
        "score|1-100": 100,//随机生成1-800的数字
        "nickname": "@cname",//随机生成中文名字
      }
    ]
  // 详细语法规范链接: https://www.jianshu.com/p/4579f40e6108
});