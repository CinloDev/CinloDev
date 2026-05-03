
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import ConditionalHeader from '@/components/conditional-header';
import { ThemeProvider } from '@/components/theme-provider';
import LocaleProvider from '@/components/language-provider';

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="es" className="!scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap"
            rel="stylesheet"
            />
        </head>
        <body className="font-body text-foreground antialiased min-h-screen flex flex-col">
            <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange
            >
                <LocaleProvider>
                <ConditionalHeader />
                <main className='flex-1'>
                    {children}
                </main>
                <Footer />
                <Toaster />
                </LocaleProvider>
            </ThemeProvider>
        </body>
        </html>
    );
}