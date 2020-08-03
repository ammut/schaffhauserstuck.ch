import Link from "next/link";
import styles from "../styles/Home.module.css";

export function PageLink({page}) {
    return <Link href={`/${page.key}`}><a className={styles.siteNavPageLink}>{page.name}</a></Link>;
}
