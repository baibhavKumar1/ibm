import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex">
        <Link href="/Auth"><div>Auth</div></Link>
        <Link href="/Tracker"><div>Tracker</div></Link>
        <Link href="/Chat"><div>Chat</div></Link>
      </nav>
    </>
  );
}
