import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Logo.module.scss';

const LogoComponent = () => {
    const { t } = useTranslation();
    return <div className={styles.logo}>{t('diniso4ka')}</div>;
};

export const Logo = memo(LogoComponent);
