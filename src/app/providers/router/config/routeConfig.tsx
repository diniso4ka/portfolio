import { RouteProps } from 'react-router-dom';

import { ExamplePage } from '@/pages/ExamplePage';
import { MainPage } from '@/pages/MainPage';

import { EXAMPLE_ROUTE, MAIN_ROUTE } from '@/shared/const/router';

export const routerConfig: RouteProps[] = [
    {
        path: MAIN_ROUTE,
        element: <MainPage />,
    },
    {
        path: EXAMPLE_ROUTE,
        element: <ExamplePage />,
    },
];
