import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>ShopriteX</title>
        <meta name="description" content="Welcome to ShopriteX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.headerSection}>
          <div className={styles.headerSectionImageContainer}>
            <Image
              src="/photo-1525130413817-d45c1d127c42.avif"
              alt="Image of a team working"
              className={styles.headerSectionImage}
              width={1920}
              height={1280}
              priority
            />
            <div className={styles.headerSectionImageOverlay}></div>
          </div>
          <div className={styles.headerSectionInner}>
            <h1 className={styles.headerSectionTitle}>Welcome to ShopriteX</h1>
            <p className={styles.headerSectionSubtitle}>Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.</p>
          </div>
        </section>


        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Our Team Leaders</h2>
            <p className={`${styles.sectionSubheading} ${styles.maxWidth920} ${styles.marginBottom96}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>

            <div className={styles.teamList}>
              <div className={styles.teamListItem}>
                <div className={styles.teamListItemImageWrapper}>
                  <Image
                    src="/photo-1506794778202-cad84cf45f1d.avif"
                    alt="Image of Hugo Silva"
                    width={224}
                    height={224}
                  />
                </div>
                <p className={styles.teamListItemName}>Hugo Silva</p>
                <p className={styles.teamListItemBio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              <div className={styles.teamListItem}>
                <div className={styles.teamListItemImageWrapper}>
                  <Image
                    src="/photo-1500648767791-00dcc994a43e.avif"
                    alt="Image of Imanol Arias"
                    width={224}
                    height={224}
                  />
                </div>
                <p className={styles.teamListItemName}>Imanol Arias</p>
                <p className={styles.teamListItemBio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>
              <div className={styles.teamListItem}>
                <div className={styles.teamListItemImageWrapper}>
                  <Image
                    src="/photo-1507003211169-0a1dd7228f2d.jpeg"
                    alt="Image of Javier Bardem"
                    width={224}
                    height={224}
                  />
                </div>
                <p className={styles.teamListItemName}>Javier Bardem</p>
                <p className={styles.teamListItemBio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              </div>

            </div>
          </div>
        </section>


        <section className={`${styles.section} ${styles.statsSection}`}>
          <div className={styles.sectionInner}>
          <h2 className={`${styles.sectionHeading} ${styles.textWhite}`}>Advantages</h2>
            <p className={`${styles.sectionSubheading} ${styles.textPrimary100}`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>

            <div className={styles.statsList}>
              <div className={styles.statsListItem}>
                <div className={styles.statsListItemValue}>2500</div>
                <div className={styles.statsListItemLabel}>Happy Clients</div>
              </div>
              <div className={styles.statsListItem}>
                <div className={styles.statsListItemValue}>300</div>
                <div className={styles.statsListItemLabel}>Full Notebooks</div>
              </div>
              <div className={styles.statsListItem}>
                <div className={styles.statsListItemValue}>120</div>
                <div className={styles.statsListItemLabel}>Teammates</div>
              </div>
              <div className={styles.statsListItem}>
                <div className={styles.statsListItemValue}>30</div>
                <div className={styles.statsListItemLabel}>Stores</div>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionHeading}>Contact Us</h2>
            <p className={`${styles.sectionSubheading} ${styles.maxWidth660}`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>

            <form action="#" method="POST" className={styles.contactForm}>
              <div>
                  <label htmlFor="name" className={styles.inputLabel}>Name</label>
                  <div>
                      <input type="text" id="name" name="name" placeholder="Your Name" className={styles.inputText} />
                  </div>
              </div>
              <div>
                  <label htmlFor="category" className={styles.inputLabel}>Category</label>
                  <div>
                      <select id="category" name="category" className={styles.inputSelect}>
                          <option>Contact</option>
                          <option>Complaint</option>
                          <option>Sales</option>
                      </select>
                  </div>
              </div>
              <div>
                  <label htmlFor="phone" className={styles.inputLabel}>Phone</label>
                  <div>
                      <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className={styles.inputText} />
                  </div>
              </div>
              <div>
                  <label htmlFor="city" className={styles.inputLabel}>City</label>
                  <div>
                      <select id="city" name="city" className={styles.inputSelect}>
                          <option>Cape Town</option>
                          <option>Johannesburg</option>
                          <option>Durban</option>
                      </select>
                  </div>
              </div>
              <div className={styles.contactForm__Grid2}>
                  <label htmlFor="email" className={styles.inputLabel}>E-mail</label>
                  <div>
                      <input type="email" id="email" name="email" placeholder="Your E-mail Address" className={styles.inputText} />
                  </div>
              </div>
              <div className={styles.contactForm__Grid2}>
                  <label htmlFor="message" className={styles.inputLabel}>Message</label>
                  <div>
                      <textarea rows={4} id="message" name="message" className={styles.inputTextarea}></textarea>
                  </div>
              </div>
              <div className={`${styles.contactForm__Grid2} ${styles.textAlignRight}`}>
                  <button type="submit" className={styles.buttonPrimary}>Contact us</button>
              </div>
          </form>


          </div>
        </section>

        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={`${styles.sectionInner} ${styles.aboutSectionInner}`}>
            <div className={styles.aboutVisualWrapper}>
              <Image
                    src="/photo-1556761175-4b46a572b786.avif"
                    alt="Image of an office space"
                    className={styles.aboutVisual}
                    width={576}
                    height={496}
                  />
            </div>
            <div>
              <h2 className={styles.sectionHeadingAlt}>About Us</h2>
              <p className={`${styles.sectionSubheading} ${styles.textAlignLeft} ${styles.marginBottom40}`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam</p>

                <div className={styles.aboutList}>
                  <div className={styles.aboutListItem}>
                    <div className={styles.aboutListItemIconWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={styles.aboutListItemIcon} role="img">
                        <title id="smileIcon">Smile Icon</title>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className={styles.aboutListItemText}>
                      <p className={styles.aboutListItemHeading}>Friendly Team</p>
                      <p className={styles.aboutListItemBody}>Nunc a, lacinia sed risus neque, arcu, rhoncus. Id mauris justo facilisis aliquam platea vestibulum condimentum morbi.</p>
                    </div>
                  </div>

                  <div className={styles.aboutListItem}>
                    <div className={styles.aboutListItemIconWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={styles.aboutListItemIcon} role="img">
                        <title id="puzzleIcon">Puzzle Icon</title>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <div className={styles.aboutListItemText}>
                      <p className={styles.aboutListItemHeading}>Involved</p>
                      <p className={styles.aboutListItemBody}>Purus lobortis volutpat posuere id integer nunc tellus. Non mauris malesuada feugiat massa mi pellentesque cum est. Pharetra a varius urna rhoncus, tempor rutrum.</p>
                    </div>
                  </div>

                  <div className={styles.aboutListItem}>
                    <div className={styles.aboutListItemIconWrapper}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className={styles.aboutListItemIcon} role="img">
                        <title id="phoneIcon">Phone Icon</title>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className={styles.aboutListItemText}>
                      <p className={styles.aboutListItemHeading}>24/7 Assistance</p>
                      <p className={styles.aboutListItemBody}>Tincidunt sollicitudin interdum nunc sit risus at bibendum vitae. Urna, quam ut sit justo non, consectetur et varius.</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}