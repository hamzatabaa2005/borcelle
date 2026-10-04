
export const CheckBox = ({ id, title, groupName }) => {
    return (

        <div className="flex gap-2">
            <input type="checkbox" name={groupName} id={id} />
            <label htmlFor={id}>
                {title}
            </label>
        </div>

    )
}
