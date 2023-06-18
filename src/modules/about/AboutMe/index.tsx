import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockSection } from '@/shared/ui/BlockSection';

import styles from './AboutMe.module.scss';

import { STACK_ITEMS } from '@/modules/about/AboutMe/assets/consts';

const AboutMeComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{t('My technology stack')}</h3>
            <ul className={styles.stack}>
                {STACK_ITEMS.map((item) => (
                    <li className={styles.stackItem} key={item}>
                        {t(item)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const AboutMeComponentWithWrapper = () => {
    return (
        <BlockSection
            title={'About me'}
            text={[
                'I am a Frontend developer with experience in freelance application development and in companies on the React, Redux, TypeScript stack. I have experience in developing projects from scratch, both in a team and independently.',
            ]}
        >
            <AboutMeComponent />
        </BlockSection>
    );
};

export const AboutMe = memo(AboutMeComponentWithWrapper);
