import "./globals.css";

export const metadata = {
  title: "Counter dApp — Task 3",
  description: "DecryptCode assessment: frontend with ethers + API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
