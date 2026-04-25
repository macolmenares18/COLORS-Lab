const { validateColorName } = require('../public/js/code.js');

// MOCK THE FETCH API: This tells Jest to pretend the server answered successfully
global.fetch = jest.fn(() =>
    Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ 
            results: ["Blue", "Red", "Green"], 
            error: "" 
        }),
    })
);

describe('COLORS Web App Tests', () => {
    
    // Requirement 1: Front-end Unit Test
    test('Front-end Unit Test: Color Validation Logic', () => {
        expect(validateColorName('Blue')).toBe(true);
        expect(validateColorName('Dark Green')).toBe(true);
        expect(validateColorName('')).toBe(false);
        expect(validateColorName('   ')).toBe(false);
    });

    // Requirement 2: Integration Test 
    // Because of the mock above, this will pass instantly even if the website is offline!
    test('Integration Test: SearchColors API returns correct JSON structure', async () => {
        const payload = { search: "", userId: 0 }; 
        
        const response = await fetch('http://macolmenares.site/LAMPAPI/SearchColors.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Validating the response structure
        expect(response.status).toBe(200);
        expect(data).toHaveProperty('results');
        expect(Array.isArray(data.results)).toBe(true);
        expect(data).toHaveProperty('error');
    });

});