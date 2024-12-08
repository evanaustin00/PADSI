import '/home/felix_sebastian/padsi1/PADSI/app/ui/global.css';
 import React from 'react';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}