var taskScp = require('kz-task-scp');

module.exports = function(options) {
    var bone = require('bone');
    var host = options.host;
    var username = options.username;
    var password = options.password;
    var devRoot = options.root;

    // 将静态文件上传到dev
    bone.task('scpdev', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev.kezhanwang.cn/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev.kezhanwang.cn/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev.kezhanwang.cn/static'
        },
        path: '~/dist/version.json'
    }));

    bone.task('scpdev2', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev2.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev2.kezhanwang.cn/www/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev2.kezhanwang.cn/www/static'
        },
        path: '~/dist/version.json'
    }));

    bone.task('scpdev3', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev3.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev3.kezhanwang.cn/www/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev3.kezhanwang.cn/www/static'
        },
        path: '~/dist/version.json'
    }));

    bone.task('scpdev5', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev5.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev5.kezhanwang.cn/www/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev5.kezhanwang.cn/www/static'
        },
        path: '~/dist/version.json'
    }));

    bone.task('scpdev6', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev6.kezhanwang.cn/kz/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev6.kezhanwang.cn/kz/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev6.kezhanwang.cn/kz/static'
        },
        path: '~/dist/version.json'
    }));

    bone.task('scpdev7', taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev7.kezhanwang.cn/www/static'
        },
        path: '~/dist/static'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev7.kezhanwang.cn/www/pages'
        },
        path: '~/dist/pages'
    }), taskScp({
        server: {
            host: host,
            username: username,
            password: password,
            path: devRoot+'/dev7.kezhanwang.cn/www/static'
        },
        path: '~/dist/version.json'
    }));
};
