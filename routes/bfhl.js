const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (!req.body || !req.body.data || !Array.isArray(req.body.data)) {
        return res.status(400).json({ is_success: false, message: "Invalid request body" });
    }

    const data = req.body.data;
    const numbers = [];
    const alphabets = [];

    // Process input
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && item.match(/^[a-zA-Z]$/)) {
            alphabets.push(item.toUpperCase());
        }
    });

    // Find the highest alphabet (based on ASCII value)
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort().slice(-1)[0]] : [];

    res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

// GET Route for Operation Code
router.get('/', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

module.exports = router;
