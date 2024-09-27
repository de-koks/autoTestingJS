function compareText(expectedText, actualText, compareOption) {
    switch(compareOption) {
        case 'contains':
            return expect(expectedText).toContain(actualText);
        case 'does not contain':
            return expect(expectedText).not.toContain(actualText);
        case 'is equal to':
            return expect(expectedText).toEqual(actualText);
        case 'is not equal to':
            return expect(expectedText).not.toEqual(actualText);
        default:
            throw new Error(`${compareOption} is not a valid compare option`);
    }
}

export { compareText };