// 加载首页的一些初始化操作
$(function () {

    // 将首页的banner设为全屏
    var screenHeight = window.innerHeight;
    $(".banner").height(screenHeight);

    // 将首页一开始设为无法滚动（只有首页的"read more"有关闭这两个属性的方法，所以在这里设置）
    // $("body").css("overflow","hidden");
    $("body").css("position","fixed");

    // 导航栏消失
    $(".navbar").css("display","none")

    // 更多
    $(".more").click(function() {

        // 1. 让banner及下的元素全部消失;  
        // height针对盒子，opacity针对内联文字
        $(".banner").find("*").addBack().css("height", "0").css("opacity","0");
        
        // 2. 滚动恢复正常
        $("body").css("overflow","scroll");
        $("body").css("position","static");
        $("html").animate({scrollTop:0});

        // 3. 导航栏
        // 2020/1/1 补充 ———— 改变颜色: 参考他人
        // $(".navbar").removeClass("navbar-light");
        // $(".navbar").addClass("navbar-dark");
        
        // 2020/1/7 优化 ———— 显示隐藏: 也是参考他人
        $(".navbar").toggle();

    })

    $(".intro h1").slideDown(600);

  
    // 点击首页   还是直接刷新吧...


    // 点击博客  , 滚动恢复正常,,,,恢复不了了。
    //  ↓
    // 这样来恢复正常
    //  ↓
    const scrollAble =  function () {
        $("body").css("overflow","scroll");
    }
    // 点击首页时不自动恢复滚动
    $("#blog").click(function() {
        timer = setTimeout(scrollAble, 600);
        console.log(1)
    })
    // 不行，还是会清空，因为浏览器刷新，整个文档都清空了
    // ↓
    // 解决:  见本文件最上面


    // -------------------------------分割线------------------------------
    // 2020-11-22  上面的又些话，现在不是很懂..
    
    // 随机名言
    // $.ajax({
    //         url: 'http://api.tianapi.com/txapi/dictum/index?key=842e2879d61b783983a938399257fe72&num=1',
    //         type:'get',
    //         async: true,
    //         xhrFields: {
    //             withCredentials: true
    //         },
    //         crossDomain: true,
    //         success : function(data) {    
    //             console.log(typeof data)

    //             // 将json数据转化为js对象
    //             var motto = JSON.parse(data)
    //             console.log(data)
    //             document.getElementById('content').innerText = motto.content
    //             document.getElementById('author').innerText = motto.author
    //         },
    //     });
})