import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockSection } from '@/shared/ui/BlockSection';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';

import styles from './BackCallForm.module.scss';

const BackCallFormComponent = () => {
    const { t } = useTranslation();
    return (
        <form className={styles.container}>
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Input className={styles.input} />
            <Button>{t('Send')}</Button>
        </form>
    );
};

const BackCallFormComponentWithWrapper = () => {
    return (
        <BlockSection title={'Submit your application'}>
            <BackCallFormComponent />
        </BlockSection>
    );
};

export const BackCallForm = memo(BackCallFormComponentWithWrapper);
