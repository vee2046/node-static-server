var request = require('request')
var fs = require('fs')
var path = require('path')

const hostdir = "./imgdl/"

function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

function downloadUrl(urlList, prevName = '') {
    let i = 1;
    for (const url of urlList) {
        const last = '.jpg';
        const dstpath = hostdir + (prevName + i) + last;
        console.log({
            url,
            dstpath,
        });
        if (mkdirSync(hostdir)) {
            console.log(dstpath)
            request(url).pipe(fs.createWriteStream(dstpath))
        }
        i++;
    }
}
/*
//内容图
imgs = temp1.querySelectorAll('img')
arr = []
for(const img of imgs){
    arr.push(img.src)
}


//小图
arr = [],imgs = temp2.querySelectorAll('img')
for(const img of imgs){
    let url = img.src;
    let urls = url.split('.');
    let url_1 = urls.slice(0,urls.length-2).join('.');
    let bigImg = url_1 + '.400x400' + '.' + urls[urls.length-1];
    arr.push(bigImg);
}
*/
// downloadUrl(['https://p1.img.cctvpic.com/photoAlbum/photo/2021/09/04/PHOTtOtPkXyfZdvScgSRs3Ex210904_1000x2000.jpg']);
// downloadUrl(['https://cbu01.alicdn.com/img/ibank/O1CN01Ejd2Ye1Cq2a1Vbw7r_!!2923320131-0-cib.400x400.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01ks3X9u1Cq2a6KzLZX_!!2923320131-0-cib.400x400.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01zGFin61Cq2a6Kyg1A_!!2923320131-0-cib.400x400.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN018JhQDE1Cq2a862nEM_!!2923320131-0-cib.400x400.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01hjF8B91Cq2ZzziiOk_!!2923320131-0-cib.400x400.jpg'], 'mini');
downloadUrl(['https://cbu01.alicdn.com/img/ibank/O1CN01Ejd2Ye1Cq2a1Vbw7r_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01rBc1WR1Cq2ZzTCexs_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01AuuS3H1Cq2a5Ikn1i_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN011BQmcg1Cq2a50qeIX_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN017rH0zK1Cq2YeDcMtZ_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01vTaWSz1Cq2Yd6nASV_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01hjF8B91Cq2ZzziiOk_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01zGFin61Cq2a6Kyg1A_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN01ks3X9u1Cq2a6KzLZX_!!2923320131-0-cib.jpg', 'https://cbu01.alicdn.com/img/ibank/O1CN018JhQDE1Cq2a862nEM_!!2923320131-0-cib.jpg']);