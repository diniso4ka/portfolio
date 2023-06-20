import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Slider } from '@/shared/ui/Slider';

import styles from './PortfolioDetail.module.scss';

import { IExampleOfWorkItem } from '@/modules/portfolio/types';

interface IPortfolioDetailComponent extends IExampleOfWorkItem {
    className?: string;
}

const PortfolioDetailComponent = (props: IPortfolioDetailComponent) => {
    const { text, stack, name, images } = props;
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>{t(name)}</h2>
            <Slider className={styles.slider} width={1200} images={images} />
            <div className={styles.text}>
                {text.map((paragraph) => (
                    <p key={paragraph}>{t(paragraph)}</p>
                ))}
            </div>
            <div className={styles.stack}>
                {stack.map((tech) => (
                    <p key={tech}>{t(tech)}</p>
                ))}
            </div>
        </div>
    );
};

export const PortfolioDetail = memo(PortfolioDetailComponent);
