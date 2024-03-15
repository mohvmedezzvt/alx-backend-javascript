"use strict";
/// <reference path="./crud.d.ts" />
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var CRUD = require('./crud');
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
console.log("CRUD.insertRow(obj)\n// Insert row ".concat(JSON.stringify(row)));
var updatedRow = __assign(__assign({}, row), { age: 23 });
CRUD.updateRow(newRowID, updatedRow);
console.log("CRUD.updateRow(".concat(newRowID, ", updatedRow)\n// Update row ").concat(newRowID, " ").concat(JSON.stringify(updatedRow)));
CRUD.deleteRow(newRowID);
console.log("CRUD.deleteRow(".concat(newRowID, ")\n// Delete row id ").concat(newRowID));
