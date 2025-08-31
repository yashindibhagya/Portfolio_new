import { useEffect } from 'react';

const Favicon = () => {
    useEffect(() => {
        // Create canvas element
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        if (ctx) {
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, 64, 64);
            gradient.addColorStop(0, '#000000');
            gradient.addColorStop(1, '#1a237e');

            // Draw background
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);

            // Set text style
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 40px cursive';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            // Draw text
            ctx.fillText('yb', 32, 38);

            // Create favicon
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = canvas.toDataURL('image/x-icon');

            // Remove any existing favicon
            const existingLink = document.querySelector("link[rel~='icon']");
            if (existingLink) {
                document.head.removeChild(existingLink);
            }

            // Add new favicon
            document.head.appendChild(link);
        }
    }, []);

    return null;
};

export default Favicon;
