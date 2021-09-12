import React  from 'react'

export function ConvertBigIntTo16(data:string) {
    console.log(data)
    debugger
    data = data.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');
    // var dataLength = data.length;
    // if(dataLength == 0) return '';
    // var yuShu = 0;
    // var shang = 0;
    // var x = 0;
    // var index = 0;
    // var yuShuArr = [];
    // var shangArr = [];
    // while (dataLength > 1){
    //     yuShu = 0;
    //     shang = 0;
    //     x = 0;
    //     index = 0;
    //     shangArr = [];
    //     while(index < dataLength){
    //         while(index < dataLength){
    //             x = yuShu * 10 + parseInt(data.substr(index,1));
    //             yuShu = x;
    //             if(x > 15){
    //                 index = index + 1;
    //                 break;
    //             }else if((index > 1)&&(index + 1 != dataLength)){
    //                 shangArr.push('0');
    //             }
    //             index = index + 1;
    //         }
    //         shang = x/16;
    //         yuShu = x % 16;
    //         shangArr.push(shang.toString());
    //     }
    //     yuShuArr.push(yuShu.toString());
    //     data = shangArr.join('');
    //     dataLength = data.length;
    // }
    //
    // if (dataLength === 1) yuShuArr.push(data);
    // for(let i:number = 0; i < yuShuArr.length; i++){
    //     if (yuShuArr[i] === '10')
    //         yuShuArr[i] = "a";
    //     else if (yuShuArr[i] === '11')
    //         yuShuArr[i] = "b";
    //     else if (yuShuArr[i] === '12')
    //         yuShuArr[i] = "c";
    //     else if (yuShuArr[i] === '13')
    //         yuShuArr[i] = "d";
    //     else if (yuShuArr[i] === '14')
    //         yuShuArr[i] = "e";
    //     else if (yuShuArr[i] === '15')
    //         yuShuArr[i] = "f";
    // }
    // if(yuShuArr[yuShuArr.length -1] === '0')
    //     yuShuArr.pop();
    // var result = yuShuArr.reverse().join('');
    // return result;

    return "asdasd";

}


export function ConvertBig16ToInt(data:string){
    data = data.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');
    var dataLength = data.length;
    if (dataLength === 0) return '';
    var index = 0;
    var x = 0;
    var geArr = [];
    var geTohighArr = new Array(4) ;
    var shiTohighArr = new Array(4) ;
    var yuShuArr = new Array(4) ;
    var resultArr = new Array();
    resultArr[0] = '0';
    var arr16 = new Map();
    arr16.set('0','0')
    arr16.set('1','1')
    arr16.set('2','2')
    arr16.set('3','3')
    arr16.set('4','4')
    arr16.set('5','5')
    arr16.set('6','6')
    arr16.set('7','7')
    arr16.set('8','8')
    arr16.set('9','9')
    arr16.set('a','10')
    arr16.set('b','11')
    arr16.set('c','12')
    arr16.set('d','13')
    arr16.set('e','14')
    arr16.set('f','15')
    while(index < dataLength){
        geArr = resultArr;
        resultArr = [];
        geTohighArr = [];
        for(let i = 0; i < geArr.length; i++){
            x = 0;
            x = parseInt(i < geArr.length ? geArr[i] : '0') * 6;
            x = x + parseInt(i < geTohighArr.length ? geTohighArr[i] : '0');
            geTohighArr[i] = x % 10;
            if(x > 0)
                geTohighArr[i+1] = x / 10;
        }
        shiTohighArr = [];
        geArr.unshift(0);
        for(let i = 0; i < geArr.length; i++){
            x = 0;
            x = parseInt(i < geArr.length ? geArr[i] : '0');
            x = x + parseInt(i < geTohighArr.length ? geTohighArr[i] : '0');
            x = x + parseInt(i < shiTohighArr.length ? shiTohighArr[i] : '0');
            shiTohighArr[i] = x % 10;
            if(x > 0)
                shiTohighArr[i+1] = x / 10;
        }
        geArr = [] ;
        yuShuArr = [];
        yuShuArr = arr16.get(data.substr(index,1)).split('').reverse();
        for(let i = 0;i<shiTohighArr.length;i++){
            x = 0;
            x = x + parseInt(i < shiTohighArr.length ? shiTohighArr[i] : '0');
            x = x + parseInt(i < yuShuArr.length ? yuShuArr[i] : '0');
            x = x + parseInt(i < resultArr.length ? resultArr[i] : '0');
            resultArr[i] = x % 10;
            if(x > 9)
                resultArr[i+1] = x / 10;
        }
        index = index + 1;
    }
    if(resultArr[resultArr.length -1] === 0)
        resultArr.pop();
    var result = resultArr.reverse().join('');
    return result;
}

