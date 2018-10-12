window.onload=function(){
    // 开始标题
    $('.mytaobao').on('mouseenter',function(){
        $('.mytaobao a').css({height:'33px'})
        $(this).css('background','#fff')
        $('.mytaobao .mytao').css('display','block')
        $('.mytaobao .mytaob span').css({color:'#FF0036'})

    })
    $('.mytaobao').on('mouseleave',function(){
        $('.mytaobao a').css({height:'32px'})
        $(this).css('background','#f2f2f2')
        $('.mytaobao .mytaob span').css({color:'#999'})
        $('.mytaobao .mytao').css('display','none')
    })
    $('.mytaobao .mytaob').on('mouseenter',function(){
        $('.mytaobao .mytaob span').css({borderBottom:'1px solid #FF0036' })
    })
    $('.mytaobao .mytaob').on('mouseleave',function(){
        $('.mytaobao .mytaob span').css({borderBottom:'0' })
    })
    $('.cart').on('mouseenter',function(){
        $('.cart a').css({height:'33px'})
        $(this).css('background','#fff')
        $('.cart .mytao').css('display','block')
        $('.cart .mytaob span').css({color:'#FF0036'})

    })
    $('.cart').on('mouseleave',function(){
        $('.cart a').css({height:'32px'})
        $(this).css('background','#f2f2f2')
        $('.cart .mytaob span').css({color:'#999'})
        $('.cart .mytao').css('display','none')
    })
    $('.cart .mytaob').on('mouseenter',function(){
        $('.cart .mytaob span').css({borderBottom:'1px solid #FF0036' })
    })
    $('.cart .mytaob').on('mouseleave',function(){
        $('.cart .mytaob span').css({borderBottom:'0' })
    })
    $('.shangjia').on('mouseenter',function(){
        $('.shangjia a').css({height:'33px'})
        $(this).css('background','#fff')
        $('.shangjia .mytao').css('display','block')
        $('.shangjia .mytaob span').css({color:'#FF0036'})

    })
    $('.shangjia').on('mouseleave',function(){
        $('.shangjia a').css({height:'32px'})
        $(this).css('background','#f2f2f2')
        $('.shangjia .mytaob span').css({color:'#999'})
        $('.shangjia .mytao').css('display','none')
    })
    $('.shangjia .mytaob').on('mouseenter',function(){
        $('.shangjia .mytaob span').css({borderBottom:'1px solid #FF0036' })
    })
    $('.shangjia .mytaob').on('mouseleave',function(){
        $('.shangjia .mytaob span').css({borderBottom:'0' })
    })
    $('.daohang').on('mouseenter',function(){
        $('.menubd').css('display','block')
    })
    $('.daohang').on('mouseleave',function(){
        $('.menubd').css('display','none')
    })
    // 标题结束
    // 选项卡开始
    $('.aside li').on('mouseenter',function(){
        let index=$(this).index()-1
        $('.xuanxiangka')
            .css('display','none')
            .eq(index)
            .css('display','block')
    })
    $('.aside li').on('mouseleave',function(){
        let index=$(this).index()-1
        $('.xuanxiangka')
            .eq(index)
            .css('display','none')
    })
    // 选项卡结束
    // 轮播图开始
    let time=0;
    let t=setInterval(move,1000)
    let attr=["#D1D2D6",'#E8E8E8','#E8E8E8']
    function move(){
        if(time>=3){
            time=0;
        }
        $('.center')
            .css('background',attr[time])
        $('.wrapper a')
            .css('zIndex','0')
            .eq(time)
            .css('zIndex','5')
        time+=1
    }
    $('.center').on('mouseenter',function(){
        clearInterval(t)
    })
    $('.center').on('mouseleave',function(){
        t=setInterval(move,1000)
    })
    // 轮播图结束
    //商品开始
    let t1=setInterval(lunbo,2000)
    let time1=0
    function lunbo(){
        if(time1==2){
            time1=0;
        }
        $('.floor-tab-content')
            .css('display','block')
            .eq(time1)
            .css('display','none')
        $('.floor-current-tab')
            .css('background','#00B262')
            .eq(time1)
            .css('background','#F1F1F1')

        time1+=1
    }
    $('.floor-current-tab').on('mouseenter',function(){
        clearInterval(t1)
        let index=$(this).index()
        $('.floor-current-tab')
            .css('background','#F1F1F1')
            .eq(index)
            .css('background','#00B262')
        $('.floor-tab-content')
            .css('display','none')
            .eq(index)
            .css('display','block')
    })
    $('.floor-current-tab').on('mouseleave',function(){
        t1=setInterval(lunbo,1000)
    })
    // 商品结束
    // 楼层开始
    let arr=$('.section').map(function(){
        return $(this).offset().top
    })
    let color=['#64C333','#FF0036','#EA5F8D','#0AA6E8','#64C333','#EA5F8D','#19C8A9','#FF0036']
    arr=arr.toArray()
    $(window).scroll(function(){
        let top=$(this).scrollTop()
        if($(this).scrollTop() > 400){
            $(".mui-lift").slideDown()
        }
        else{
            $(".mui-lift").slideUp()
        }
        let index=arr.findIndex((item)=>item>top-200)
        if (index>=0){
            $('.fpLift a')
                .css('background','rgba(0,0,0,0.6)')
                .eq(index)
                .css('background',color[index])
        }
        $(this).scrollTop() > 730 ? $(".middle-search").css('top','0'):$(".middle-search").css('top','-50px')
    })
    let flag=true
    $('.fpLift a').on('click',function(){
        let index=$(this).index()
        if(!flag){
            bb.finish()
            return
        }
        bb=$('html').animate({scrollTop:arr[index]},2000,function(){
            flag=true
        })
        flag=false
    })
    // 楼层结束
    //右侧导航开始
    let vip=$('.mui-mbar-tab-prof')
    let money=$('.mui-mbar-tab-asset')
    let shouc=$('.mui-mbar-tab-favor')
    let isee=$('.mui-mbar-tab-foot')
    let cz=$('.mui-mbar-tab-charge')
    let top=$('.mui-mbar-tab-top')
    let fk=$('.mui-mbar-tab-ue')
    $('.mui-mbar-tab-cart').on('mouseenter',function(){
        $('.mui-mbar-tab-cart .logo').css('backgroundImage','url(img/sss.png)')
        $(this).css({background:'#FF0036',color:'#fff'})
    })
    $('.mui-mbar-tab-cart').on('mouseleave',function(){ 
        $('.mui-mbar-tab-cart .logo').css('backgroundImage','url(img/side2.png)')              
        $(this).css({background:'#000',color:'#fff'})
    })
    function aside(item){
        item.mouseenter(function(){
            item.find('.logo').css({
                background: '#ff0036',
            })
            item.find('.bgg').css({
                display: 'block'
            })
            item.find('.tips').css({
                display: 'block',
                right: '35px',
                transition: 'all .6s',
                opacity: 1,
            })
        })
        item.mouseleave(function(){
            item.find('.tips').css({
                display: 'none',
                right: '70px',
                opacity: 0,
            })
            item.find('.logo').css({
                background: '#000',
            })
        })
    }
    aside(vip),aside(money),aside(shouc),aside(isee),aside(cz),aside(top),aside(fk)
    //右侧导航结束
    $(".backTop").click(function(){
        $("html").animate({scrollTop:0},200)
    })
    $('#sousuo').focus(function(){
        $('label').css('color','rgb(204,204,204)')
    })
    $('#sousuo').blur(function(){
        $('label').css('color','rgb(102,102,102)')
    })
    $('.s-combobox').focus(function(){
        $('.label2').css('color','rgb(204,204,204)')
    })
    $('.s-combobox').blur(function(){
        $('.label2').css('color','rgb(102,102,102)')
    })
}