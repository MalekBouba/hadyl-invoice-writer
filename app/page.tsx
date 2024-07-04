import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={`${styles.branchSelectionWrapper} ${styles.pagesBg}`}>
      <Link href={"/bill/france"} className={styles.branchSelectionBox}>
        <p> acceder france</p>
      </Link>
      <Link href={"/bill/tunisia"} className={styles.branchSelectionBox}>
        <p>acceder Tunisia</p>
      </Link>
    </main>
  );
}
