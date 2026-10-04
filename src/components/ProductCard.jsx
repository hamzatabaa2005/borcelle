
export const ProductCard = ({ product }) => {
    const { title, img, price, discountPrice, rate, numberOfOrder, description, isFlexCol } = product
    return (
        <div className={`flex ${isFlexCol ? "flex-col" : ""}`}>
            <div><img src={img} alt={title} /></div>
            <div>
                {title ? <p>{title}</p> : <></>}
                {price ? <p>{price}</p> : <></>}
                {discountPrice ? <p>{discountPrice}</p> : <></>}
                {rate ? <p>{rate}</p> : <></>}
                {numberOfOrder ? <p>{numberOfOrder}</p> : <></>}
                {description ? <p>{description}</p> : <></>}
            </div>
        </div>
    )
}
