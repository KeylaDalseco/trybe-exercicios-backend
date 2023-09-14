"use strict";
// tests/mocks/login.mock.ts
Object.defineProperty(exports, "__esModule", { value: true });
var validPassword = 'ch4ng3m3';
var noEmailLoginBody = { email: '', password: validPassword };
var validEmail = 'user1@email.com';
var noPasswordLoginBody = { email: validEmail, password: '' };
var notExistingUserBody = { email: 'notfound@email.com', password: validPassword };
var existingUserWithWrongPasswordBody = { email: validEmail, password: 'wrong_password' };
var validLoginBody = { email: validEmail, password: validPassword };
var hashedPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';
var existingUser = {
    id: 1,
    email: validEmail,
    password: hashedPassword,
    name: 'user1'
};
exports.default = {
    noEmailLoginBody: noEmailLoginBody,
    noPasswordLoginBody: noPasswordLoginBody,
    notExistingUserBody: notExistingUserBody,
    existingUserWithWrongPasswordBody: existingUserWithWrongPasswordBody,
    existingUser: existingUser,
    validLoginBody: validLoginBody,
    hashedPassword: hashedPassword,
};
