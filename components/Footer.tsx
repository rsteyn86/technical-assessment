import React from "react";
import Link from "next/link";
import styles from '@/styles/Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.footerInnerInnerTop}>
                    <div className={styles.footerInnerInnerTopContact}>
                        <p className={styles.footerInnerInnerTopContactParagraph}>Lorem ipsum dolor sit amet consectetur quas adipisicing elit. Maxime mollitia, molestiae.</p>

                        <ul className={styles.footerInnerInnerTopContactMeta}>
                            <li className={styles.footerInnerInnerTopContactMetaItem}>
                                <svg x-description="Heroicon name: outline/phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className={styles.footerInnerInnerTopContactMetaIcon} role="img">
                                    <title id="phoneIcon">Phone Icon</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <a href="tel:+44-3-6000-0000-6000-000-0000" className={styles.footerInnerInnerTopLinksColumnLink}>3-6000-0000-6000-000-0000</a>
                            </li>
                            <li className={styles.footerInnerInnerTopContactMetaItem}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={styles.footerInnerInnerTopContactMetaIcon} role="img">
                                    <title id="mapPinIcon">Map Pin Icon</title>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                67700 Dagenham St, England, GB
                            </li>
                        </ul>

                    </div>

                    <div className={styles.footerInnerInnerTopLinks}>
                        <div className={styles.footerInnerInnerTopLinksColumn}>
                            <div>
                                <h3 className={styles.footerInnerInnerTopLinksColumnHeader}>Content</h3>
                                <ul className={styles.footerInnerInnerTopLinksColumnList}>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Lorem ipsum</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Dolor sit</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.footerInnerInnerTopLinksColumnInnerLast}>
                                <h3 className={styles.footerInnerInnerTopLinksColumnHeader}>Information</h3>
                                <ul className={styles.footerInnerInnerTopLinksColumnList}>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Lorem ipsum</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Onsectetur adipisicing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles.footerInnerInnerTopLinksColumn}>
                            <div>
                                <h3 className={styles.footerInnerInnerTopLinksColumnHeader}>Legal</h3>
                                <ul className={styles.footerInnerInnerTopLinksColumnList}>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Adipisicing elit</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Sed do eiusmod</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Tempor incidi</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.footerInnerInnerTopLinksColumnInnerLast}>
                                <h3 className={styles.footerInnerInnerTopLinksColumnHeader}>Help</h3>
                                <ul className={styles.footerInnerInnerTopLinksColumnList}>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Lorem ipsum</Link>
                                    </li>
                                    <li>
                                        <Link href="/" className={styles.footerInnerInnerTopLinksColumnLink}>Onsectetur adipisicing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={styles.footerInnerInnerBottom}>
                    <p className={styles.footerInnerInnerBottomText}>Copyright © {new Date().getFullYear()}. ShopriteX All rights reserved</p>
                    <div className={styles.footerInnerInnerBottomSocial}>
                        <Link href="/" className={styles.footerInnerInnerBottomSocialLink}>
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className={styles.footerInnerInnerBottomSocialIcon} role="img">
                                <title id="googlePlusIcon">Google Plus Icon</title>
                                <path d="M12.0004 2.40002C6.69879 2.40002 2.40039 6.69842 2.40039 12C2.40039 17.3016 6.69879 21.6 12.0004 21.6C17.302 21.6 21.6004 17.3016 21.6004 12C21.6004 6.69842 17.302 2.40002 12.0004 2.40002ZM9.60039 16.8C6.94919 16.8 4.80039 14.6512 4.80039 12C4.80039 9.34882 6.94919 7.20002 9.60039 7.20002C10.8484 7.20002 11.9852 7.67682 12.838 8.45842L11.6908 9.58162C11.13 9.09522 10.4004 8.80002 9.60039 8.80002C7.83319 8.80002 6.40039 10.2328 6.40039 12C6.40039 13.7672 7.83319 15.2 9.60039 15.2C11.1852 15.2 12.498 14.0464 12.7524 12.5336H9.60039V10.9336H14.2748L14.3012 11.04C14.3652 11.3504 14.4004 11.6712 14.4004 12C14.4004 14.6512 12.2516 16.8 9.60039 16.8ZM18.4004 12.8V14.4H16.8004V12.8H15.2004V11.2H16.8004V9.60002H18.4004V11.2H20.0004V12.8H18.4004Z"/>
                            </svg>
                        </Link>
                        <Link href="/" className={styles.footerInnerInnerBottomSocialLink}>
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className={styles.footerInnerInnerBottomSocialIcon} role="img">
                                <title id="twitterIcon">Twitter Icon</title>
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </Link>
                        <Link href="/" className={styles.footerInnerInnerBottomSocialLink}>
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className={styles.footerInnerInnerBottomSocialIcon} role="img">
                                <title id="instagramIcon">Instagram Icon</title>
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link href="/" className={styles.footerInnerInnerBottomSocialLink}>
                            <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className={styles.footerInnerInnerBottomSocialIcon} role="img">
                                <title id="facebookIcon">Facebook Icon</title>
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;