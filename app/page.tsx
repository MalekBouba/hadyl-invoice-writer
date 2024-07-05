import Link from "next/link";
import styles from "./page.module.scss";
import frFlag from "./assets/flags/fr.png";
import TnFlag from "./assets/flags/Tn.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className={`${styles.branchSelectionWrapper} ${styles.pagesBg}`}>
      <Link href={"/bill/france"} className={styles.branchSelectionBox}>
        <Image src={frFlag} alt="frFlag" width={150} height={150} />
      </Link>
      <Link href={"/bill/tunisia"} className={styles.branchSelectionBox}>
        <Image src={TnFlag} alt="frFlag" width={150} height={150} />
      </Link>
    </main>
  );
}
