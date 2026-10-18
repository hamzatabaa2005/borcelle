import { useContext, useEffect, useState } from "react"
import { OrderService } from "../../services/OrderService"
import { UserContext } from "../../context/UserContext/UserContext"
import { OrderCard } from "./components/OrderCard"
import ContainerLayout from "../../layout/ContainerLayout"
import { NavLayout } from "../../layout/NavLayout"
import { Divider } from "../../components/Divider"

export const Orders = () => {

    const { user } = useContext(UserContext)
    const [orders, setOrders] = useState(null)

    useEffect(() => {

        OrderService.GetOrders(user.token)
            .then(data => {
                console.log(data)
                setOrders(data.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className="min-h-screen dark:bg-gray-900 ">
            <ContainerLayout >

                <NavLayout>

                    <Divider title="Orders" />



                    {orders && orders.length === 0 && <p className="text-center text-gray-500 dark:text-gray-400 my-10">You have no orders yet</p>}

                    < div className="grid grid-cols-1 md:grid-cols-2 gap-6  py-5" >
                        {
                            orders ? orders.map(item => (
                                <OrderCard key={item.id} {...item} />
                            )) : <></>}
                    </div >

                </NavLayout>

            </ContainerLayout>
        </div>
    )

}