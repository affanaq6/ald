import styles from "./MainFooter.module.css";

const MainFooter = () => {
  return (
<div className="footercontainer">
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <section className={styles.navigationArea}>
        <div className={styles.aldParent}>
          <h3 className={styles.ald}>ALD</h3>
          <div className={styles.internalResources}>
            <div className={styles.divider} />
            <div className={styles.verticalNavigation}>
              <div className={styles.resourceTitles}>
                <div className={styles.home}>Home</div>
                <div className={styles.about}>About</div>
                <div className={styles.contacts}>Contacts</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.supportArea}>
            <div className={styles.help}>Help</div>
            <div className={styles.updates}>Updates</div>
        </div>
      </section>
      <div className={styles.informationColumn}>
        <h3 className={styles.legalServicesOffered}>Legal Services Offered</h3>
        <div className={styles.resourcesRowParent}>
          <div className={styles.resourcesRow}>
            <div className={styles.divider1} />
            <div className={styles.indexParent}>
              <div className={styles.index1}>Index</div>
              <div className={styles.judges}>Judges</div>
              <div className={styles.updates1}>Updates</div>
              <div className={styles.statutes}>Statutes</div>
            </div>
          </div>
          <div className={styles.articleLinks}>
            <div className={styles.articles}>Articles</div>
            <div className={styles.caseFinder}>Case Finder</div>
            <div className={styles.caseInfo}>Case Info</div>
          </div>
        </div>
      </div>
      <div className={styles.contactArea}>
        <h3 className={styles.reachUs}>Reach Us</h3>
        <div className={styles.contactDetails}>
          <div className={styles.divider2} />
          <div className={styles.emailInfo}>
              <div className={styles.emailAddress}>9876543210</div>
              <div className={styles.salesaldonlinein}>sales@aldonline.in</div>
              <div className={styles.madingHyderabad}>Mading, Hyderabad.</div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default MainFooter;


