require('./07-5-b')
var ret = require('./07-5-c')
console.log(ret)

// b.js被执行了
// c.js被执行了
// {}
// {}

//require加载规则
//c在b中被加载执行了，在a中就不执行了，只会执行一次，，多次引用为了获取导出的对象
//已经加载过的，不会重复加载，可以拿到接口对象，提高模块加载效率，优先从缓存加载