import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { EXAMPLES_OF_WORK_ITEMS } from '@/modules/portfolio/assets/consts';
import { PortfolioDetail } from '@/modules/portfolio/PortfolioDetail';
import { IExampleOfWorkItem } from '@/modules/portfolio/types';

const ExamplePage = () => {
    const { id } = useParams();
    const { t } = useTranslation();

    if (!id) {
        return <div>{t('Not found')}</div>;
    }

    const exampleItem = EXAMPLES_OF_WORK_ITEMS.find(
        (item, index) => id === index.toString(),
    ) as IExampleOfWorkItem;

    return (
        <div>
            <PortfolioDetail {...exampleItem} />
        </div>
    );
};

export default ExamplePage;
