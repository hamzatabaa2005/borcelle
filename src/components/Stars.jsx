import { Star } from "lucide-react"

export const Stars = ({ rate }) => {


    return (
        <div className="flex gap-1 items-center">
            <Star className={`${rate > 2 ? "text-amber-400 fill-amber-400" : "text-gray-300"} h-4 w-4`} />
            <Star className={`${rate > 4 ? "text-amber-400 fill-amber-400" : "text-gray-300"} h-4 w-4`} />
            <Star className={`${rate > 6 ? "text-amber-400 fill-amber-400" : "text-gray-300"} h-4 w-4`} />
            <Star className={`${rate > 8 ? "text-amber-400 fill-amber-400" : "text-gray-300"} h-4 w-4`} />
            <Star className={`${rate >= 10 ? "text-amber-400 fill-amber-400" : "text-gray-300"} h-4 w-4`} />
            <p className="text-amber-400 ms-1">{rate}</p>
        </div>
    )
}
