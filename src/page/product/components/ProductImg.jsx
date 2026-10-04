
import useFancybox from "../../../hooks/fancy-Box/useFancybox"

const imgStyle = "w-full h-full object-cover object-center"

const avatarStyle = "inline-block w-14 h-14 rounded-md overflow-hidden border border-gray-300 dark:border-gray-600"

export const ProductImg = ({ productName, img1, images }) => {
    const [fancyboxRef] = useFancybox({

    });


    return (
        <div ref={fancyboxRef} className=" ">
            <a data-fancybox="gallery" href={img1} className="inline-block w-full h-[70vh]  rounded-md overflow-hidden border border-gray-300 dark:border-gray-600 mb-2" >
                <img src={img1} loading="lazy" alt={`${productName} img 1`} className={imgStyle} />
            </a>
            <div className="grid grid-cols-6 gap-2" >
                {images ? images.map((img, index) => (
                    <a data-fancybox="gallery" href={img} className={avatarStyle} key={index}>
                        <img src={img} loading="lazy" alt={`${productName} img ${index}`} className={imgStyle} />
                    </a>)
                ) : <></>}

            </div>
        </div>
    );
}
