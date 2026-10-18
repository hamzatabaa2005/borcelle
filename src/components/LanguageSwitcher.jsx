import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdTranslate } from 'react-icons/md';

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isRTL, setIsRTL] = useState(i18n.language)
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            {isRTL &&
                <button onClick={() => {
                    changeLanguage('en')
                    setIsRTL(!isRTL)
                }} className='dark:text-white text-center'><MdTranslate /></button>
            }
            {!isRTL && <button onClick={() => {
                changeLanguage('ar')
                setIsRTL(!isRTL)
            }} className='dark:text-white'><MdTranslate /></button>}
        </div>
    );
}