
export const SectionLayout = ({ children, styleSection, title = '' }) => {
    return (
        <section className={`my-15 xl:mx-0  sm:me-8 sm:ms-5 mx-8 dark:text-white  ${styleSection}`}>
            {title && <h2 className="text-xl">{title}</h2>}
            {children}
        </section>
    )
}
