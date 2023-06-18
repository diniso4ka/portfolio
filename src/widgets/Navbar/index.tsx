import { memo } from 'react';

import { Logo } from '../Logo';
import { NAVBAR_ITEMS } from './consts';
import { NavbarItem } from './NavbarItem';

import styles from './Navbar.module.scss';

const NavbarComponent = () => {
    return (
        <nav className={styles.container}>
            <Logo />
            <ul className={styles.items}>
                {NAVBAR_ITEMS.map(({ value }) => (
                    <NavbarItem
                        className={styles.item}
                        key={value}
                        value={value}
                    />
                ))}
            </ul>
        </nav>
    );
};

export const Navbar = memo(NavbarComponent);
