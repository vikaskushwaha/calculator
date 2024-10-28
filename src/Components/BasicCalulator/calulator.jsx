import React, { useEffect } from "react";
import { useState } from "react";
import Pedmas from "../logic/pedmas";
function MainCalDesign() {
    const [number, SetNumber] = useState('')
    const [result, SetResult] = useState(0)
    function handleClick(num) {
        SetNumber(number + num);
    }
    function clearScreen() {
        console.log(number);
        SetNumber('');
    }
    function equalTo(num) {
        SetNumber(number + num);
        // let allNo = [];
        // let str = "";
        // for (let i = 0; i < number.length; i++) {
        //     console.log(number[i]);
        //     if (number[i] === '+' || number[i] === '-' || number[i] === '*' || number[i] === '%' || number[i] === '/' || number === '=') {
        //         allNo.push(parseInt(str));
        //         allNo.push(number[i]);
        //         str = '';
        //     }
        //     else {
        //         str += number[i];
        //     }
        // }
        // allNo.push(parseInt(str));
        // console.log(allNo);
        Pedmas();




    }

    return (
        <div className="flex items-center flex-col gap-y-6 align-middle  justify-center content-center">
            <h1>Calulator</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col  border p-2">
                    <div className="flex flex-row-reverse w-52 content-center ">
                        {number}
                    </div>
                    <div className="flex flex-row-reverse">{result}</div>
                </div>


                <table className="border-spacing-4 border-separate" >
                    <tbody className="gap-y-2">
                        <tr >
                            <td className="rounded-md bg-slate-200 w-10" onClick={() => clearScreen()}><p className="text-green-300 font-medium m-2">AC</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">+/-</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">%</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">\</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick(9)} ><p className="font-normal m-2">9</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick(8)}><p className="font-normal m-2">8</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick(7)}><p className="font-normal m-2">7</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick('+')}><p className="font-normal m-2">+</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10" onClick={() => handleClick(6)}><p className="font-normal m-2">6</p></td>
                            <td className="rounded-md  bg-slate-200 w-10" onClick={() => handleClick(5)}><p className="font-normal m-2">5</p></td>
                            <td className="rounded-md  bg-slate-200 w-10" onClick={() => handleClick(4)}><p className="font-normal m-2">4</p></td>
                            <td className="rounded-md  bg-slate-200 w-10" onClick={() => handleClick('-')}><p className="font-normal m-2">-</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick(3)}>3</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick(2)}>2</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick(1)}>1</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick('*')}>*</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick()}>Prev</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick(0)}>0</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => handleClick('.')}>.</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2" onClick={() => equalTo('=')}>=</p></td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default MainCalDesign;