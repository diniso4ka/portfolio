import { memo } from 'react';

import { BlockSection } from '@/widgets/BlockSection';

const BackCallFormComponent = () => {
    return <form></form>;
};

const BackCallFormComponentWithWrapper = () => {
    return (
        <BlockSection>
            <BackCallFormComponent />
        </BlockSection>
    );
};

export const BackCallForm = memo(BackCallFormComponentWithWrapper);
