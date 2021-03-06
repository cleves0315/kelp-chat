interface Config {
  dataBase: string;
  userName?: string;
  password?: string;
  dbOptions?: Object;
  corsArgs?: Object;
}

let config: Config = {
  dataBase: 'mongodb',
  dbOptions: { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  corsArgs: {    // cors 跨域配置
    origin: function (ctx) {
        return 'http://localhost:3000';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],  // 需要获取其他字段时
    maxAge: 5,
    credentials: true,  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
    allowMethods: ['GET', 'POST', 'DELETE'],  // 设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  }
}

export default config;