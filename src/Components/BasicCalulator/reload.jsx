import { TbReload } from "react-icons/tb";
import { arr } from "./previousResult";
function Reaload() {

    return (
        <div className="flex flex-col bg-slate-400  w-60 h-32  border absolute p-6  justify-center align-middle rounded-md">
            {arr.map((item) => (
                <p key={item.number}>{item.number}   = {item.result}</p>
            ))}
        </div>
    )
}
export default Reaload;