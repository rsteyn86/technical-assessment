import React from "react";
import Image from 'next/image'
import Link from "next/link";
import HamburgerMenu from '../components/Burger'
import styles from '@/styles/Navbar.module.scss'

function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link href="/" className={styles.headerLogoWrapper}>
                    <Image
                        src="/workflow-mark-blue-600.svg"
                        alt="ShopriteX Logo"
                        className={styles.headerLogo}
                        width={35}
                        height={32}
                        priority
                    />
                </Link>
                <nav className={styles.headerNav}>
                    <Link href="/" className={styles.headerNavItem}>Home</Link>
                    <Link href="/" className={styles.headerNavItem}>About</Link>
                    <Link href="/" className={styles.headerNavItem}>Services</Link>
                    <Link href="/" className={styles.headerNavItem}>Testimonials</Link>
                    <Link href="/" className={styles.headerNavItem}>Portfolio</Link>
                    <Link href="/" className={styles.headerNavItem}>Contact</Link>
                </nav>
                <div className={styles.headerHamburger}>
                    <HamburgerMenu />
                </div>
            </div>
        </header>
    )
}

export default Navbar;