import "./globals.css";

export const metadata = {
  title: "ALBA Gallery",
  description: "Contemporary art gallery by ALBA"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
