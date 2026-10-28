// Eager: Chart is imported the normal way, so it ships in this
// route's JavaScript bundle and is downloaded on first load.
import Chart from "../Chart/Chart";

export default function DashboardEager() {
  return (
    <main>
      <h1>Dashboard (eager)</h1>
      <p>Your numbers at a glance. The chart below ships in the page bundle.</p>
      <Chart />
    </main>
  );
}
