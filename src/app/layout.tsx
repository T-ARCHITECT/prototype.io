//? STYLESHEET | Global CSS (Tailwind v4+)
import "@/styles/css/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
