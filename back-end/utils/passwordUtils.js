const bcrypt = require('bcrypt');

async function hashPassword(plainPassword) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(plainPassword, salt);
        return hashPassword;
    } catch (err) {
        console.error('Error hashing password:', err);
        throw new Error('Error hashing password');
    }
}

async function verifyPassword(plainPassword, hashedPassword) {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    } catch (err) {
        console.error('Error matching password:', err);
        throw new Error('Error matching password')
    }
}

module.exports = {
    hashPassword,
    verifyPassword,
};