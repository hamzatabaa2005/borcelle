import { useContext, useEffect } from "react"
import { FavoriteProductListSection } from "./components/FavoriteProductListSection"
import { UserContext } from "../../context/UserContext/UserContext"
import { FavoriteService } from "../../services/FavoriteService"
import { DefaultLink } from "../../components/BrandBtn"
import MainLayout from "../../layout/MainLayout"
import ContainerLayout from "../../layout/ContainerLayout"
import { FavoriteContext } from "../../context/FavoriteContext/FavoriteContext"
export const Favorite = () => {
    const { user } = useContext(UserContext);
    const { favorite, setFavorite } = useContext(FavoriteContext)
    useEffect(() => {
        if (!user.token) {
            return;
        }
        FavoriteService.GetFavorite(user.token).then(product => {
            if (product.data.length === 0) {
                setFavorite(null)
            }
            else {
                setFavorite(product.data)
            }


        })

    }, [user?.token])

    return (
        <MainLayout>

            <ContainerLayout >
                {favorite ?
                    <FavoriteProductListSection productsData={favorite} grid={true} />
                    :
                    <div className="flex justify-center items-center h-screen w-full">

                        {user.token ? <span className="dark:text-white text-3xl">No Favorite Item </span> : <DefaultLink to={"/login"} title={"log in"} btnStyle={"before:rounded-md "}>log in here </DefaultLink>}
                    </div>}
            </ContainerLayout>
        </MainLayout>

    )
}
