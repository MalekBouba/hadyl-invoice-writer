import Link from "next/link";
import "./globals.css";
import frFlag from "./assets/flags/fr.png";
import TnFlag from "./assets/flags/Tn.png";
import Image from "next/image";
export default function Home() {
  return (
    <main className="branchSelectionWrapper pagesBg">
      <Link href={"/bill/france"} className="branchSelectionBox">
        <Image src={frFlag} alt="frFlag" width={150} height={150} />
      </Link>
      <Link href={"/bill/tunisia"} className="branchSelectionBox">
        <Image src={TnFlag} alt="frFlag" width={150} height={150} />
      </Link>
    </main>
  );
}
