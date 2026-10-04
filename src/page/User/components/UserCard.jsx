
export const UserCard = ({ img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnU4XtQ8y81rbY0iIvDf4dCwvjl-ckN2P-cLgmEdo7w&s", name, email }) => {
    return (
        <div className="flex items-center my-5">
            <div className="h-24 w-24 rounded-full overflow-hidden me-3 ">
                <img src={img} alt={`user ${name}`} className="w-full h-full object-cover object-center" />
            </div>

            <div className="dark:text-white">
                <p>{name}</p>
                <p className="text-gray-500">{email}</p>
            </div>

        </div>
    )
}
