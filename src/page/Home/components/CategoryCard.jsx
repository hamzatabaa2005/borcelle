import { DefaultLink } from "../../../components/BrandBtn"

export const CategoryCard = ({ img, title, link, btnTitle, divStyle }) => {

    return (
        <div className={`bg-center bg-no-repeat bg-cover h-full   ${divStyle}`} style={{ backgroundImage: `url(${img})` }}>
            <h2 className="text-3xl font-bold w-84" >{title}</h2>
            <DefaultLink title={btnTitle} path={link} btnStyle={"rounded-xl before:rounded-xl"} />
        </div>
    )
}
