
export const Product = ({ img, title, quantity, price }) => {

    return (
        <div className="flex justify-between my-2 md:text-black text-white dark:text-white">

            <div className="flex gap-2">
                <div className="w-24 h-24 mt-auto rounded-md  overflow-hidden " >
                    <img src={img} alt={title} loading="lazy" className="w-full h-full object-fit object-center " /></div >
                <div>
                    <h2 className="text-xl">{title}</h2>

                </div>
            </div >

            <div className="flex gap-3">

                <span className="border border-gray-200 h-6 w-6 rounded-md text-center md:text-black dark:text-white">{quantity}</span>
                <span className="text-xl text-pink-600">{price * quantity}</span>


            </div>
        </div >
    )
}
