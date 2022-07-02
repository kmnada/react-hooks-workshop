import { useState, useEffect, useCallback } from 'react';
import copy from 'copy-to-clipboard';

const useCopyToClipboard = (resetInterval = null) => {
    const [isCopied, setCopied] = useState(false);

    const handleCopy = useCallback((text) => {
        if (typeof text ==='string' || typeof text == 'number') {
            copy(text.toString());
            setCopied(true);
        }
        else {
            setCopied(false);
            console.error(`cannot copy typeof ${typeof text} to clipboard, must be a string or number`);
        }
    }, []);

    useEffect(() => {
        let timeout;
        if (isCopied && resetInterval) {
            timeout = setTimeout(() => setCopied(false), resetInterval);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [isCopied, resetInterval]);

    return [isCopied, handleCopy];
}

export default useCopyToClipboard;