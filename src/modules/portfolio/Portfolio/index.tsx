import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BlockSection } from '@/shared/ui/BlockSection';

import styles from './Portfolio.module.scss';

import { EXAMPLES_OF_WORK_ITEMS } from '@/modules/portfolio/assets/consts';
import { PortfolioItem } from '@/modules/portfolio/PortfolioItem';

const PortfolioComponent = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.container}>
            {EXAMPLES_OF_WORK_ITEMS.map((example, index) => (
                <PortfolioItem key={example.link} id={index} {...example} />
            ))}
        </div>
    );
};

const PortfolioComponentWithWrapper = () => {
    return (
        <BlockSection title={'Examples of work'}>
            <PortfolioComponent />
        </BlockSection>
    );
};

export const Portfolio = memo(PortfolioComponentWithWrapper);
