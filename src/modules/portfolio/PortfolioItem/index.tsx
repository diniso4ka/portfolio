import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './PortfolioItem.module.scss';

import { IExampleOfWorkItem } from '@/modules/portfolio/types';

const MAX_LENGTH = 100;

interface IPortfolioItemComponent extends IExampleOfWorkItem {
    className?: string;
    id: number;
}

const PortfolioItemComponent = (props: IPortfolioItemComponent) => {
    const { className, name, text, preview, id } = props;
    const { t } = useTranslation();
    const reformatText =
        text[0].length > MAX_LENGTH
            ? `${text[0].slice(0, MAX_LENGTH)}...`
            : text[0];
    return (
        <a href={`example/${id}`} className={cn(styles.container, className)}>
            <h4 className={styles.name}>{t(name)}</h4>
            <div className={styles.previewWrapper}>
                <img src={preview || '#'} className={styles.preview} />
            </div>
            <p className={styles.text}>{reformatText}</p>
        </a>
    );
};

export const PortfolioItem = memo(PortfolioItemComponent);
