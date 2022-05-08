import Link from "next/link";

Link
export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <Link href="/">Homeに戻る</Link>
    </div>
  );
}