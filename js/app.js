var app = new Vue({
    el: '#app',
    data:{
        mainMenu:[
            {href:'shop.html',name:'shop'},
            {href:'#',name:'blog'},
            {href:'#',name:'about'}
        ],
        footer1:[
            {h2:'newsletter', h3_1:'Email Address', inputType:'text',button:'Subscribe',p:'By signing up, you agree to our Terms of Use.'}
        ],
        footerMenu:[
            {h2:'follow us', h3_1:'@abookapart on Twitter', h3_2:'@abookapart on Instagram',h3_3:'A Book Apart News RSS'},
            {h2:'shop', h3_1:'books', h3_2:'starter packs',h3_3:'gear'},
            {h2:'company', h3_1:'help & contact',h3_2:'about us'}
        ]
    },
    components:{
        'menuList':{
            templete:'<ul class="menu1><li><a href="#">shop</a></li><li><a href="#">blog</a></li><li><a href="#">about</a></li></ul>'
        }
    }
})