/**
 * Created by yolanda on 16/6/8.
 */
if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'baidu',
        url: 'http://baidu.com',
        author: 'lee',
        flagged: true
    });
    Posts.insert({
        title: 'Meteor',
        url: 'http://meteor.com',
        author: 'lee',
        flagged: false
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com',
        author: 'ava',
        flagged: false
    });
}

if (InfoList.find().count() === 0) {
    InfoList.insert({
        id: '1',
        title: '帝王绿',
        content: '帝王绿色：绿色色正，色浓，与祖母绿一样，感觉绿中泛出蓝色调，但不偏色。帝王绿色是翡翠中颜色最好、价值最高的绿色，也称“祖母绿色”，给人以高贵之美感。帝王绿就是指一种独特的颜色，帝王绿就是很绿很绿，绿的流油的那种，就快滴出来的那样。',
        srcUrl: 'http://www.airmb.com/UploadFile/allimg/140620/1-1406201134464c.png',
        images: ['http://www.airmb.com/UploadFile/allimg/140620/1-1406201134464c.png',
            'http://www.zb580.tv/upload/2014/4/23/1%2832%29.jpg',
            'http://photocdn.sohu.com/20150706/mp21418716_1436167252029_16.jpeg'],
        price: '23',
        initPrice: '200',
        increments: '50',
        curPrice: '300',
        bidder:'',
        flagged: true
    });
    InfoList.insert({
        id: '2',
        title: '玻璃种翡翠',
        content: '玻璃种翡翠，顾名思义是像玻璃一样透，品质非常细，结晶颗粒致密，是翡翠中的极品。玻璃种有一个很直观的特点就是肉眼直观带有荧光，也就是行家所说的“起荧”。 这类翡翠通常具玻璃光泽，其质地细腻纯净无瑕疵，颜色为纯正、明亮、浓郁、均匀的翠绿色；老坑种翡翠硬玉晶粒很细，因此，凭肉眼极难见到“翠性”；老坑种翡翠在光的照射下呈半透明一透明状，是翡翠中的上品或极品。',
        srcUrl: 'http://cdn.duitang.com/uploads/item/201408/28/20140828101131_dwuJZ.jpeg',
        images: ['http://cdn.duitang.com/uploads/item/201408/28/20140828101131_dwuJZ.jpeg',
            'http://img5.imgtn.bdimg.com/it/u=899324345,1491653814&fm=21&gp=0.jpg',
            'http://www.fobao.cn/file/upload/201501/23/13-44-38-19-1.jpg'],
        price: '23',
        initPrice: '200',
        increments: '50',
        curPrice: '300',
        bidder:'',
        flagged: true
    });

    InfoList.insert({
        id: '3',
        title: '金丝玉',
        content: '新疆“金丝玉”，是产于中国新疆克拉玛依市 乌尔禾魔鬼城方圆100公里、阶地、戈壁滩、沙漠等地域，是非常具有潜力，可供雕琢艺术品的宝石品种，因产于古丝绸之路玉石为金黄色，内部带萝卜纹而得名“金丝玉”。“金丝玉”主要产于经过河流长距离搬运的次生矿床中。经雕刻后具有很高的观赏、收藏价值，是我国独有的品种，新疆“金丝玉”具备宝石共有的高贵品质。',
        srcUrl: 'http://img.diytrade.com/cdimg/2007496/31365553/-1/1355548503.jpg',
        images: ['http://img.diytrade.com/cdimg/2007496/31365553/-1/1355548503.jpg',
            'http://img2.qihuiwang.com/DBD92EC7797802E08347D84B98B084F6_310_0_max_png.jpg',
            'http://www.klmy126.com/uploads/allimg/130225/258_130225210715_1.jpg'],
        price: '23',
        initPrice: '200',
        increments: '50',
        curPrice: '300',
        bidder:'',
        flagged: true
    });
    InfoList.insert({
        id: '4',
        title: '千年血玉',
        content: '古玉上的红沁是有土壤中铁元素或者陪葬品中的铁质物氧化分解沁入玉体。一般常见的血沁都成暗红色或红褐色，这都是铁元素致色！',
        srcUrl: 'http://img3.imgtn.bdimg.com/it/u=4128676220,2562454037&fm=21&gp=0.jpg',
        images: ['http://img0.imgtn.bdimg.com/it/u=1907799278,2610540386&fm=21&gp=0.jpg',
            'http://img3.imgtn.bdimg.com/it/u=4128676220,2562454037&fm=21&gp=0.jpg',
            'http://file10.zk71.com/File/CorpProductImages/2015/07/31/3_henglong_0015_0_20150731134725.jpg'],
        price: '23',
        initPrice: '200',
        increments: '50',
        curPrice: '300',
        bidder:'',
        flagged: true
    });
}


if (Bidder.find().count() === 0 ){
    Bidder.insert({
        id : '1',
        headImg : 'http://img4.imgtn.bdimg.com/it/u=2971515934,2099790748&fm=11&gp=0.jpg',
        bidder : '会呼吸的猪',
        offer : '200',
        status : '领先'
    });
    Bidder.insert({
        id : "1",
        headImg : 'http://img3.imgtn.bdimg.com/it/u=834842132,212590363&fm=21&gp=0.jpg',
        bidder : '会游泳的鱼',
        offer : '100',
        status : '出局'
    });
    Bidder.insert({
        id : "2",
        headImg : 'http://tva2.sinaimg.cn/crop.72.0.1007.1007.1024/6a0bf347jw8er5bdo5q8zj20u00rz7a9.jpg',
        bidder : '爱斯基摩人**',
        offer : '200',
        status : '领先'
    });
    Bidder.insert({
        id : "3",
        headImg : 'http://img.25pp.com/uploadfile/soft/images/2015/0331/20150331042200368.jpg',
        bidder : '会呼吸的猪',
        offer : '200',
        status : '领先'
    });
    Bidder.insert({
        id : "4",
        headImg : 'http://img.25pp.com/uploadfile/soft/images/2015/0331/20150331042200368.jpg',
        bidder : '会呼吸的猪',
        offer : '200',
        status : '领先'
    });
    Bidder.insert({
        id : "4",
        headImg : 'http://img3.imgtn.bdimg.com/it/u=834842132,212590363&fm=21&gp=0.jpg',
        bidder : '会游泳的鱼',
        offer : '100',
        status : '出局'
    });
    Bidder.insert({
        id : "4",
        headImg : 'http://img3.imgtn.bdimg.com/it/u=834842132,212590363&fm=21&gp=0.jpg',
        bidder : '会游泳的鱼',
        offer : '50',
        status : '出局'
    });
}