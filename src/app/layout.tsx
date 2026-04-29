import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Geist, Geist_Mono } from 'next/font/google';
import './global.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

const SITE_URL = 'https://docs.mxkey.space';
const DESCRIPTION =
  'Reference for the mxkey CLI and the bundled agent skill — store dev secrets in macOS Keychain.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'mxkey docs',
    template: '%s · mxkey docs',
  },
  description: DESCRIPTION,
  keywords: [
    'mxkey',
    'macOS Keychain',
    'developer secrets',
    'CLI documentation',
    'Claude Code skill',
    'Cursor skill',
    'Codex skill',
    'agent skill',
    'API key management',
    '2FA recovery codes',
    'Touch ID',
    'Homebrew',
  ],
  authors: [{ name: 'Bonnard', url: 'https://bonnard.dev' }],
  creator: 'Bonnard',
  publisher: 'Bonnard',
  applicationName: 'mxkey docs',
  category: 'developer documentation',
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: '/key.png',
    apple: '/key.png',
    shortcut: '/key.png',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'mxkey docs',
    title: 'mxkey docs',
    description: DESCRIPTION,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mxkey docs',
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen font-sans">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
