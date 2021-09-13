import React, {Component, Fragment} from 'react'
import './style.scss'
import Web3 from 'web3'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const { numberToHex, hexToNumber } = Web3.utils

export default class Conversion extends Component {

    state = {
        HexInputValue : "",
        BigInputValue : "",
    };

    public ConvertBigToHex(num:string) {
        if (num === ''){
            this.setState({HexInputValue: ''});
            return;
        }

        var reg = new RegExp("^[0-9]*$");
        var ss:any = reg.exec(num);
        if (ss === null){
            this.setState({HexInputValue: "input err"});
            return;
        }

        var numb = numberToHex(ss[0]);
        this.setState({HexInputValue: numb});
    }

    public ConvertHexToBig(hex:string) {
        if (hex === ''){
            this.setState({BigInputValue: ''});
            return;
        }
        debugger

        var reg = new RegExp("0[xX][0-9a-fA-F]+");
        var ss:any = reg.exec(hex);
        if (ss === null){
            this.setState({BigInputValue: "input err"});
            return;
        }

        var numb = hexToNumber(ss[0]);
        this.setState({BigInputValue: numb});
    }

    render() :React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined{
        return (
            <div className="home">
                <div className="conv">
                    <b>十进制数转换成十六进制数</b>
                    <br/>
                    <br/>
                    <TextField id="outlined-search" label="十进制数" type="search" variant="outlined" onChange={(e) => {
                        this.ConvertBigToHex(e.target.value)
                    }} />
                    <br/>
                    <br/>
                    <TextField id="outlined-search" label="十六进制" type="search" variant="outlined" value={this.state.HexInputValue} />
                </div>

                <div className="conv">
                    <b>十六进制数转换成十进制数</b>
                    <br/>
                    <br/>
                    <TextField id="outlined-search" label="十六进制" type="search" variant="outlined" onChange={(e) => {
                        this.ConvertHexToBig(e.target.value)
                    }} />
                    <br/>
                    <br/>
                    <TextField id="outlined-search" label="十进制数" type="search" variant="outlined" value={this.state.BigInputValue} />
                </div>
            </div>
        )
    }
}
