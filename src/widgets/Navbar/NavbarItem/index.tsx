import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './NavbarItem.module.scss';

interface INavbarItemComponent {
    className?: string;
    value: string;
}

const NavbarItemComponent = ({ value, className }: INavbarItemComponent) => {
    const { t } = useTranslation();
    return <li className={cn(styles.container, className)}>{t(value)}</li>;
};

export const NavbarItem = memo(NavbarItemComponent);
