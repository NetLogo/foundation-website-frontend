import styles from './download-latest-banner.module.css';
import NetLogoOrgLogo from "../../../assets/NetLogoOrgLogo.svg";

export default function DownloadLatestBanner({ isLatest }: { isLatest: boolean }) {
    if (isLatest) return null;
    return (
        <>
            <a id="download-latest-banner" className={styles.banner} href="https://www.netlogo.org/download" target="_blank" rel="noopener noreferrer" aria-label="Older version of NetLogo. Click to download the latest version.">
                <img src={NetLogoOrgLogo.src} alt="NetLogo Logo" className={styles.logo} />
                <p className={styles.text}>
                    <strong>This is an older version of NetLogo</strong>
                    <br />
                    Download the latest version <span className={styles.decorateAsLink}>here</span>.
                </p>
            </a>
            <script src="/static_assets/downloads/archive/analytics/download-latest-banner.js" type="module"></script>
        </>
    )
}