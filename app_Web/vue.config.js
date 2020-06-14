const path = require('path');
const os = require('os');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    // 去除 map 文件 1
    productionSourceMap: false,
    outputDir:"../ibizpms-app/ibizpms-app-web/target/classes/META-INF/resources",
    devServer: {
        host: '0.0.0.0',
        port: 7111,
        compress: true,
        disableHostCheck: true,
        // proxy: "http://127.0.0.1:8080/Web",
    },
    pages: {
    },
    // 多核打包
    parallel: os.cpus().length > 1,
    chainWebpack: (config) => {
        // 删除自动计算预加载资源
        config.plugins.delete('preload-ibizpms')
        // 删除预加载资源
        config.plugins.delete('prefetch-ibizpms')
        config.resolve.alias
            .set('@ibizsys', resolve('src/ibizsys'))
            .set('@pages', resolve('src/pages'))
            .set('@components', resolve('src/components'))
            .set('@widgets', resolve('src/widgets'))
            .set('@engine', resolve('src/engine'))
            .set('@interface', resolve('src/interface'))
            .set('@locale', resolve('src/locale'))
            .set('@mock', resolve('src/mock'))
            .set('@service', resolve('src/service'))
            .set('@codelist', resolve('src/codelist'))
    },
    configureWebpack: config => {
        let ForkTsCheckerPlugin; 
        if(config.plugins.length > 0){
            ForkTsCheckerPlugin = config.plugins.find(element =>{
                return  element.workersNumber && element.memoryLimit;
            })
        }
        if (Object.is(config.mode, 'production')) {
            // 最大进程数
            ForkTsCheckerPlugin.workersNumber = os.cpus().length > 4 ? 4 : os.cpus().length; // 会占用额外内存不释放，不建议开发阶段使用
            // 单个进程最大使用内存
            ForkTsCheckerPlugin.memoryLimit = 4096;
        } else {
            // 最大进程数
            // ForkTsCheckerPlugin.workersNumber = os.cpus().length > 4 ? 4 : os.cpus().length; // 会占用额外内存不释放，不建议开发阶段使用
            // 单个进程最大使用内存
            ForkTsCheckerPlugin.memoryLimit = 4096;
        }
    },
}