import { useContext, useEffect, useState } from 'react'
import { FavoriteContext } from './FavoriteContext'
import { UserContext } from '../UserContext/UserContext'
import { FavoriteService } from '../../services/FavoriteService';



export const FavoriteProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [favorite, setFavorite] = useState(null)
    useEffect(() => {
        if (!user.token) {
            return;
        }
        FavoriteService.GetFavorite(user.token)
            .then(product => {
                {
                    if (product.data.length === 0) {
                        setFavorite(null)
                    }
                    else {
                        setFavorite(product.data)
                    }

                }
            })

    }, [user?.token])
    return (
        <FavoriteContext.Provider value={{ favorite, setFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}
