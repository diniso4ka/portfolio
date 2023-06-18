import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './BlockSection.module.scss';

interface IBlockSectionComponent {
    className?: string;
    title?: string;
    text?: [string];
    children: ReactNode;
}

const BlockSectionComponent = (props: IBlockSectionComponent) => {
    const { className, title, text } = props;
    const { t } = useTranslation();
    return (
        <div className={(styles.container, className)}>
            {title && <h3 className={styles.title}>{t(title)}</h3>}
            {text && (
                <div className={styles.text}>
                    {text.map((paragraph) => (
                        <p className={styles.paragraph} key={paragraph}>
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export const BlockSection = memo(BlockSectionComponent);
