"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMostActiveUser = exports.getUsersByRepoQuantity = exports.getUserNames = void 0;
const getUserNames = (userList) => {
    return userList.map((user) => user.name);
};
exports.getUserNames = getUserNames;
const getUsersByRepoQuantity = (users, repos) => users
    .filter((user) => user.repositories >= repos).map((user) => user.name);
exports.getUsersByRepoQuantity = getUsersByRepoQuantity;
const IsMostActiveUser = (name, users) => {
    const mostActiveUser = users.reduce((prev, curr) => (prev.repositories > curr.repositories ? prev : curr));
    return mostActiveUser.name === name;
};
exports.IsMostActiveUser = IsMostActiveUser;
