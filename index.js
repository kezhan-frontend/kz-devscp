var taskScp = require('kz-task-scp');
var pkg = require('./package.json');

module.exports = function(options) {
    options || (options = {});

    var bone = require('bone');
    var host = options.host;
    var username = options.username;
    var password = options.password;
    var devRoot = options.root;
    var pages = options.pages ? '/' + options.pages : '';
    var pagesName = options.pages ? (pages + '/pages') : '';

    var run = function(arr, fs) {
        for(var i in arr) {
            arr[i].call({
                fs: fs
            });
        }
    };

    // 将静态文件上传到dev
    var dev = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.kezhanwang.cn/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.kezhanwang.cn/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.kezhanwang.cn/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var dev2 = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev2.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev2.kezhanwang.cn/www/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev2.kezhanwang.cn/www/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var dev3 = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev3.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev3.kezhanwang.cn/www/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev3.kezhanwang.cn/www/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var dev5 = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev5.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev5.kezhanwang.cn/www/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev5.kezhanwang.cn/www/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var dev6 = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev6.kezhanwang.cn/kz/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev6.kezhanwang.cn/kz/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev6.kezhanwang.cn/kz/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var dev7 = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev7.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev7.kezhanwang.cn/www/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev7.kezhanwang.cn/www/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var union = [taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.union.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.union.kezhanwang.cn/www/pages' + pagesName
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot + '/dev.union.kezhanwang.cn/www/static' + pages
        },
        path: '~/dist/version.json'
    })];

    var map = {
        dev,
        dev2,
        dev3,
        dev5,
        dev6,
        dev7,
        union
    };

    var keys = [];
    for(var i in map) {
        keys.push(i);
    }

    return function(command, bone, bonefs) {
        var program = command('scp');

        program.version(pkg.version)
            .description('scp文件到开发机上, 可部署域名:' + keys.join('、'))
            .action(function(remote, cmd) {
                if(!cmd || !(remote in map)) {
                    program.outputHelp();
                } else {
                    run(map[remote], bonefs);
                }
            });
    };
};
