import "./globals.css";

export const metadata = {
  title: "Next Split Lab",
  description: "Code splitting and lazy loading demo with next/dynamic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
