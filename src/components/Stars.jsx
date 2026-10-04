import { Star } from "lucide-react"

export const Stars = ({ rate }) => {


    return (
        <div className="flex gap-5 items-center">
            <Star className={`${rate > 2 ? "text-amber-400" : ""} h-5 w-5`} />
            <Star className={`${rate > 4 ? "text-amber-400" : ""} h-5 w-5`} />
            <Star className={`${rate > 6 ? "text-amber-400" : ""} h-5 w-5`} />
            <Star className={`${rate > 8 ? "text-amber-400" : ""} h-5 w-5`} />
            <Star className={`${rate >= 10 ? "text-amber-400" : ""} h-5 w-5`} />
            <p className="text-amber-400">{rate}</p>
        </div>
    )
}
