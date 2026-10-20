import { DefaultLink } from "../../../components/BrandBtn"

export const CategoryCard = ({ img, title, link, btnTitle, divStyle }) => {

    return (
        <div className={`bg-center bg-no-repeat bg-cover h-full min-h-48 ${divStyle}`} style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-2xl xl:text-3xl font-bold leading-tight max-w-full" >{title}</h2>
            <DefaultLink title={btnTitle} path={link} btnStyle={"rounded-xl before:rounded-xl"} />
        </div>
    )
}
