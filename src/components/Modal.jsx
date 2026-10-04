
export const Modal = ({ showModal = false, children }) => {

    return (
        <>
            {showModal && <div className="flex fixed items-center justify-center inset-0 z-50 bg-gray-500/50 ">
                {children}
            </div>}
        </>
    )
}
