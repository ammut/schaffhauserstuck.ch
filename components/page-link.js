import Link from "next/link";
import style from "../styles/Home.module.css";

export function PageLink({page, onClick}) {
    return <Link href={`/${page.key}`}><a onClick={onClick} className={style.siteNavPageLink}>{page.name}</a></Link>;
}
