import React, { useEffect } from "react";
import { useState } from "react";
function MainCalDesign() {
    const [number, SetNumber] = useState('')
    function handleClick(num) {
        SetNumber(number + num);
    }

    return (
        <div className="flex items-center flex-col gap-y-6 align-middle  justify-center content-center">
            <h1>Calulator</h1>
            <div className="flex flex-col items-center">
                <textarea className="bg-white w-52 h-14 border" value={number} />

                <table className="border-spacing-4 border-separate" >
                    <tbody className="gap-y-2">
                        <tr >
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">AC</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">+/-</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">%</p></td>
                            <td className="rounded-md bg-slate-200 w-10"><p className="text-green-300 font-medium m-2">\</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick('9')} ><p className="font-normal m-2">9</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick(8)}><p className="font-normal m-2">8</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick(7)}><p className="font-normal m-2">7</p></td>
                            <td className="rounded-md   bg-slate-200 w-10" onClick={() => handleClick('+')}><p className="font-normal m-2">+</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">6</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">5</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">4</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">-</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">3</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">2</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">1</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">*</p></td>
                        </tr>
                        <tr>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">Prev</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">0</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">.</p></td>
                            <td className="rounded-md  bg-slate-200 w-10"><p className="font-normal m-2">=</p></td>
                        </tr>


                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default MainCalDesign;