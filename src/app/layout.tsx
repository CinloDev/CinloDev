import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Footer from '@/components/footer';
import ConditionalHeader from '@/components/conditional-header';
import { ThemeProvider } from '@/components/theme-provider';
import LocaleProvider from '@/components/language-provider';

export async function generateMetadata(): Promise<Metadata> {
    const cookieStore = await cookies();
    let locale = cookieStore.get('NEXT_LOCALE')?.value;

    if (!locale) {
        const headersList = await headers();
        const acceptLang = headersList.get('accept-language');
        if (acceptLang && acceptLang.startsWith('en')) {
            locale = 'en';
        } else {
            locale = 'es';
        }
    }

    const isEn = locale === 'en';
    const title = "Cintia Losada | Frontend Developer";
    const description = isEn
        ? "Portfolio of Cintia Losada, Frontend Developer specialized in React, Next.js, and TypeScript."
        : "Portfolio de Cintia Losada, Frontend Developer especializada en React, Next.js y TypeScript.";

    return {
        metadataBase: new URL("https://portfolio.cinlodev.com"),
        title,
        description,
        openGraph: {
            title,
            description,
            url: "https://portfolio.cinlodev.com",
            siteName: "Cintia Losada Portfolio",
            images: [
                {
                    url: "/assets/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: isEn ? "Cintia Losada's Portfolio" : "Portfolio de Cintia Losada",
                },
            ],
            locale: isEn ? "en_US" : "es_AR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/assets/og-image.png"],
        },
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    let locale = cookieStore.get('NEXT_LOCALE')?.value;

    if (!locale) {
        const headersList = await headers();
        const acceptLang = headersList.get('accept-language');
        locale = (acceptLang && acceptLang.startsWith('en')) ? 'en' : 'es';
    }

    return (
        <html lang={locale} className="!scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
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