import "./globals.css";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <title>ReservNow</title>
      <body>
          <div>{children}</div>
      </body>
    </html>
  );
}
