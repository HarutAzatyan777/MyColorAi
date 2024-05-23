import { useEffect } from 'react';
import { useRouter } from 'next/router';

function GoogleAnalytics() {
    const router = useRouter();

    useEffect(() => {
        const gtag = window.gtag;

        if (!gtag) {
            // Load Google Analytics script dynamically
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=G-RG5C22NY8W`;

            script.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag() {
                    window.dataLayer.push(arguments);
                }
                gtag('js', new Date());
                gtag('config', 'G-RG5C22NY8W');
            };

            document.head.appendChild(script);
            return;
        }

        // Google Analytics tracking code
        try {
            router.events.on('routeChangeComplete', () => {
                gtag('config', 'G-RG5C22NY8W', {
                    'page_title': document.title,
                    'page_location': window.location.href,
                    'page_path': router.pathname,
                });
            });
        } catch (error) {
            console.error('Error in Google Analytics tracking:', error);
        }

        return () => {
            router.events.off('routeChangeComplete');
        };
    }, []);

    return null;
}

export default GoogleAnalytics;
