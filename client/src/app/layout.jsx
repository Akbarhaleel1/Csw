import Layout from '@/components/Layout';
import './globals.css';

export const metadata = {
  title: 'Raft',
  description: 'Building the future of banking',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
