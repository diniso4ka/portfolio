import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './BlockSection.module.scss';

interface IBlockSectionComponent {
    className?: string;
    contentClassName?: string;
    title?: string;
    text?: [string];
    children: ReactNode;
}

const BlockSectionComponent = (props: IBlockSectionComponent) => {
    const { className, title, text, children, contentClassName } = props;
    const { t } = useTranslation();
    return (
        <div className={cn(styles.container, className)}>
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
            <div className={contentClassName}>{children}</div>
        </div>
    );
};

export const BlockSection = memo(BlockSectionComponent);
