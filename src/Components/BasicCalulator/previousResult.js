export let arr = [];

function PreviousResult(number, result) {
    console.log(number, result);
    arr.push({ number, result })
}
export default PreviousResult;



