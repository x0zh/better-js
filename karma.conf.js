module.exports = function(config) {
  config.set({
    // 指定测试平台（需提前安装）
    browsers: ['Chrome'],
    // 指定测试框架、断言库，jasmine 自带断言库
    // jasmine 资源 https://www.tuicool.com/articles/VvYrQf
    frameworks: ['jasmine'],
    // 打印测试结果、输出测试覆盖率 ['spec', 'progress', 'mocha', 'coverage']
    // coverage 一定要在 reporters 产生日志时使用，
    // 在这之前使用，会将 webpack 转化的代码也加入进去，影响测试覆盖率。
    reporters: ['progress', 'coverage'],
    // 指定测试文件
    files: ['src/**/*.js', 'test/**/*.js'],
    // 预处理
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.js': ['webpack', 'sourcemap']
    },
    // 指定 webpack 的配置
    webpack: {
      module: {
        loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/

        }, {
        test: /\.js$/,
        use: {
          // 在 webpack 打包前需要经过 istanbul-instrumenter-loader 处理，覆盖率统计的应该是源码。
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        // 优先级
        enforce: 'pre',
        exclude: /node_modules|\.test\.js$/,
      }]
      }
      },
    // 不打印 webpack 打包信息
    webpackMiddleware: {
      noInfo: true
    },
    // 代码覆盖率日志
    coverageReporter: {
      reporters: [
        // {type: 'html', dir: 'coverage/'},
        {type: 'lcov', dir: 'coverage', subdir: '.'},
        // 控制台输出
        {type: 'text-summary', dir: 'coverage', subdir: '.'}
       ]
    },
    // karma 服务器的监听端口
    port: 9876,
    // 输出日志为彩色
    colors: true,
    // 自动监测测试文件内容
    autoWatch: false,
    // 只运行一次
    singleRun: true
  })
}