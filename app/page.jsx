import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next Split Lab</h1>
      <p>
        Two dashboards render the exact same heavy chart. One imports it
        eagerly; the other lazy-loads it with <code>next/dynamic</code>. Run{" "}
        <code>npm run build</code> and compare the <b>First Load JS</b> of the
        two routes.
      </p>
      <div className="cards">
        <Link className="card" href="/dashboard-eager">
          <b>/dashboard-eager</b>
          <span>Chart imported normally, so it ships in the page bundle.</span>
        </Link>
        <Link className="card" href="/dashboard-lazy">
          <b>/dashboard-lazy</b>
          <span>Chart lazy-loaded with next/dynamic, loaded on demand.</span>
        </Link>
      </div>
      <div className="note">
        The chart uses the <code>recharts</code> library on purpose, so the
        bundle difference between the two routes is large and easy to see in the
        build output.
      </div>
    </main>
  );
}
