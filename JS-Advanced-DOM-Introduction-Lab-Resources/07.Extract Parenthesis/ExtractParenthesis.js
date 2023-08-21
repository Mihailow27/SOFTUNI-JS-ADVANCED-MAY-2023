function extract(elementId) {
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
        const text = targetElement.textContent;
        const regex = /\((.*?)\)/g; // Regular expression to match text within parentheses
        const matches = text.match(regex);
        
        if (matches) {
            const extractedText = matches.map(match => match.slice(1, -1)).join('; ');
            return extractedText;
        }
    }
    return '';
}