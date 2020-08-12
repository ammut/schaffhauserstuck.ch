import Link from "next/link";
import styles from "../styles/Home.module.css";

export function PageLink({page, onClick}) {
    return <Link href={`/${page.key}`}><a onClick={onClick} className={styles.siteNavPageLink}>{page.name}</a></Link>;
}
