layui.use(['jquery', 'table', 'layer', 'laydate', 'form', 'element'], function () {
    var table = layui.table;

    table.render({
        elem: '#list',
        height: 200,
        // url: '/demo/table/user/',
        page: true,
        cols: [
            [{
                field: 'id',
                title: 'ID',
                width: 80,
                sort: true,
                fixed: 'left'
            }, {
                checkbox: true
            }, {
                field: 'username',
                title: '用户名',
                width: 80
            }, {
                field: 'sex',
                title: '性别',
                width: 80,
            }, {
                field: 'city',
                title: '城市',
                width: 80
            }, {
                field: 'sign',
                title: '签名',
                width: 177
            }, {
                field: 'experience',
                title: '积分',
                width: 80,
            }, {
                field: 'score',
                title: '评分',
                width: 80,
            }, {
                field: 'classify',
                title: '职业',
                width: 80
            }, {
                field: 'wealth',
                title: '财富',
                width: 135,
            }]
        ]

    });


    var laydate = layui.laydate;

    //执行一个laydate实例
    laydate.render({
        elem: '#time_start' //指定元素
    });
    laydate.render({
        elem: '#time_end' //指定元素
    });




});