import React, { Fragment } from 'react'
import './style.scss'
import {ConvertBigIntTo16, ConvertBig16ToInt} from '../../hooks/conversion'

const Conversion = () => {

    var numb = ""

    function aa(e:string){
        numb = ConvertBigIntTo16(e)
        debugger
    }

    return (
            <div className="home">
                <div >
                    <div><b>十六进制数转换成十进制数</b></div>
                     十六进制:
                    <input type="text" onChange = {val => aa(val.target.value)}/>
                    十进制数:
                    <input type="text"   value={numb}/>
                </div>

                <div>
                    <div><b>十进制数转换成十六进制数</b></div>
                    <br/>
                        十进制数:<input type="text" name="B0110"/> 十六进制:
                    <input type="text" name="B0116"/>
                        <input type="button" value="开始转换"/>
                </div>
            </div>
    )
}

export default Conversion;
