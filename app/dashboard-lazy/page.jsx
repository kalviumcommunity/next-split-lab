"use client";

// Lazy: Chart lives in its own chunk, loaded only when it renders.
// ssr: false is allowed here because this file is a Client Component.
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("../Chart/Chart"), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
});

export default function DashboardLazy() {
  return (
    <main>
      <h1>Dashboard (lazy)</h1>
      <p>Your numbers at a glance. The chart below loads on demand.</p>
      <Chart />
    </main>
  );
}
