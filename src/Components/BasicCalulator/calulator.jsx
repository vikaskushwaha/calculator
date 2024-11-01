import React, { useEffect } from "react";
import { TbReload } from "react-icons/tb";
import { useState } from "react";
import Reaload from "./reload";
import Pedmas from "../logic/pedmas";
import PreviousResult from "./previousResult";
function MainCalDesign() {
    let [number, SetNumber] = useState('')
    const [result, SetResult] = useState(0)
    let [showHistroy, SetHistroy] = useState(false);
    function handleClick(num) {
        SetNumber(number + num);
    }
    function clearScreen() {
        console.log(number);
        SetNumber('');
        SetResult(0)
    }
    function equalTo(num) {
        let str = number;
        // SetNumber(number + num)
        let x = Pedmas(str)
        SetResult(x);
        PreviousResult(str, x)

    }

    function reload() {
        SetHistroy(prevShowHistory => !prevShowHistory)
    }
    return (
        <div className="flex items-center flex-col gap-y-6 align-middle  justify-center content-center">
            <h1 className="text-lg text-sky-400">Calulator</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col  border p-2 static">
                    <i className="z-10 " onClick={() => reload()}>
                        <TbReload />
                    </i>
                    {showHistroy && <Reaload />}
                    <div className="flex flex-row-reverse w-80 h-10 content-center ">
                        {number}
                    </div>
                    <div className="flex flex-row-reverse font-bold w-80">{result}</div>
                </div>

                <table className=" table-auto border-spacing-4 border-separate" >
                    <tbody className="flex flex-col gap-y-4">
                        <tr className="flex flex-row gap-x-2">
                            <td className="rounded-md bg-slate-200 w-20 flex justify-center items-center h-10 " onClick={() => clearScreen()}><p className="text-green-300 font-bold">AC</p></td>
                            <td className="rounded-md bg-slate-200 w-20 flex justify-center items-center h-10  "><p className="text-green-300 font-medium">+/-</p></td>
                            <td className="rounded-md bg-slate-200 w-20 flex justify-center items-center  h-10 " onClick={() => handleClick('%')}><p className="text-green-300 font-bold ">%</p></td>
                            <td className="rounded-md bg-slate-200 w-20 flex justify-center items-center h-10 " onClick={() => handleClick('/')}><p className="text-green-300 font-bold">\</p></td>
                        </tr>
                        <tr className="flex flex-row gap-x-2">
                            <td className="rounded-md   bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(9)} ><p className="font-normal ">9</p></td>
                            <td className="rounded-md   bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(8)}><p className="font-normal ">8</p></td>
                            <td className="rounded-md   bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(7)}><p className="font-normal ">7</p></td>
                            <td className="rounded-md   bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick('+')}><p className="font-normal">+</p></td>
                        </tr>
                        <tr className="flex flex-row gap-x-2">
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(6)}><p className="font-normal ">6</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(5)}><p className="font-normal ">5</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick(4)}><p className="font-normal ">4</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10" onClick={() => handleClick('-')}><p className="font-normal">-</p></td>
                        </tr>
                        <tr className="flex flex-row gap-x-2">
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick(3)}>3</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick(2)}>2</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick(1)}>1</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick('*')}>*</p></td>
                        </tr>
                        <tr className="flex flex-row gap-x-2">
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick()}>Prev</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick(0)}>0</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => handleClick('.')}>.</p></td>
                            <td className="rounded-md  bg-slate-200 w-20 flex justify-center items-center h-10"><p className="font-normal " onClick={() => equalTo('=')}>=</p></td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default MainCalDesign;