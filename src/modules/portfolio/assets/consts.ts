import crmSystemPreview from '../../../../public/assets/CrmSystem/crmSystemPreview.jpg';
import larosPreview from '../../../../public/assets/Laros/larosPreview.jpg';
import mixturaPreview from '../../../../public/assets/mixtura/mixturaPreview.jpg';
import solbetPreview from '../../../../public/assets/Solbet/solbetPreview.jpg';

import { IExampleOfWorkItem } from '@/modules/portfolio/types';

export const EXAMPLES_OF_WORK_ITEMS: IExampleOfWorkItem[] = [
    {
        name: 'Laros',
        text: ['Greek Tour Service'],
        stack: ['NextJs', 'TypeScript', 'Redux'],
        link: 'https://laros.ch/',
        preview: larosPreview,
        images: [
            larosPreview,
            larosPreview,
            larosPreview,
            larosPreview,
            larosPreview,
        ],
    },
    {
        name: 'Mixtura',
        text: [
            'In Bitcoin network any person can trace coins from one address to the other. Mixtura introduces next level of anonymity for you, so your BTC will have 100% exchange ML riskscore by chainanalis.',
            'Bitcoin Mixer 2.0 is a new algorithm brought to you by our developers to up-level anonymity and money mixing in comparison with classic mixers. After using Mixtura your BTC will be cured - you will receive tokens with undoubtedly positive history from cryptocurrency stock exchanges.',
            'Coins will come in various parts with random time intervals from different geographical locations on several new wallets offering you the best anonymization algorithm as of today.',
        ],
        stack: ['ReactJs', 'TypeScript'],
        link: 'https://mixtura.money/',
        preview: mixturaPreview,
        images: [
            mixturaPreview,
            mixturaPreview,
            mixturaPreview,
            mixturaPreview,
            mixturaPreview,
        ],
    },
    {
        name: 'Solbet',
        text: [
            'Solbet is a service for betting on the rise or fall of the price of different NFT collections.',
        ],
        stack: [
            'ReactJs',
            'TypeScript',
            'ReduxToolkit',
            'RTL',
            'Storybook',
            'JEST',
            'CI/CD',
        ],
        preview: solbetPreview,
        images: [
            solbetPreview,
            solbetPreview,
            solbetPreview,
            solbetPreview,
            solbetPreview,
        ],
    },
    {
        name: 'Crm system for a real estate company',
        text: [
            'A program that helps you manage your business. You can upload a customer database to it, organize accounting of transactions.',
        ],
        stack: ['ReactJs', 'TypeScript', 'ReduxToolkit', 'JEST', 'CI/CD'],
        preview: crmSystemPreview,
        images: [
            crmSystemPreview,
            crmSystemPreview,
            crmSystemPreview,
            crmSystemPreview,
            crmSystemPreview,
        ],
    },
];
