/*
 * @Description: 
 * @Author: DYT
 * @Date: 2025-03-13 15:40:43
 * @LastEditTime: 2025-03-13 17:00:39
 * @LastEditors: DYT
 */
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
