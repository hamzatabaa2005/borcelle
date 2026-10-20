
export const Counter = ({ count, setCount, onClick1 = () => { setCount(count - 1) }, onClick2 = () => { setCount(count + 1) } }) => {

    return (
        <div className="flex border w-20 border-gray-200 rounded-md items-center py-1">
            <button className="text-red-400 border-e border-gray-200 w-[calc(100%/3)]" onClick={onClick1} disabled={count === 0}>-</button>
            <p className="text-center w-[calc(100%/3)]">{count}</p>
            <button className="border-s border-gray-200  w-[calc(100%/3)]" onClick={onClick2}>+</button>
        </div>
    )
}
