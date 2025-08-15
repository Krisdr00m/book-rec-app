"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadCovers = uploadCovers;
require('dotenv').config({ path: '.env' });
var supabase_1 = require("../src/app/lib/api/supabase");
// import {getCoverByID} from '../src/app/lib/api/book-data';
var fs_1 = require("fs");
var supabase = (0, supabase_1.createAuthClient)();
// const {data:user} = await supabase.auth.getUser()
var filePath = 'C:/Users/yenkr/OneDrive/Desktop/Coding-Shii/Python-Scripts/book-data.json';
var basePath = 'C:/Users/yenkr/OneDrive/Desktop/Coding-Shii/Python-Scripts/book_covers';
function read_File() {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.promises.readFile(filePath, 'utf8')];
                case 1:
                    data = _a.sent();
                    console.log('File read successfully.');
                    return [2 /*return*/, JSON.parse(data)];
                case 2:
                    err_1 = _a.sent();
                    console.error('Error reading file:', err_1);
                    throw err_1;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loopFolder(path, book_title, size) {
    return __awaiter(this, void 0, void 0, function () {
        var imagePath, files, _i, files_1, file;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    imagePath = '';
                    return [4 /*yield*/, fs_1.promises.readdir(path)];
                case 1:
                    files = _a.sent();
                    for (_i = 0, files_1 = files; _i < files_1.length; _i++) {
                        file = files_1[_i];
                        if (size === 'S') {
                            if (file.includes(book_title.replace(/\s+/g, "_")) && (file.includes('_S.jpg'))) {
                                imagePath = "".concat(path, "/").concat(file);
                                // console.log(imagePath)
                                return [2 /*return*/, imagePath];
                            }
                        }
                        else {
                            if (file.includes(book_title.replace(/\s+/g, "_")) && (file.includes('_M.jpg'))) {
                                imagePath = "".concat(path, "/").concat(file);
                                return [2 /*return*/, imagePath];
                                ;
                            }
                        }
                    }
                    return [2 /*return*/, imagePath];
            }
        });
    });
}
function uploadSupabase(coverImageUrl, bookTitle, size) {
    return __awaiter(this, void 0, void 0, function () {
        var fileBuffer, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fs_1.promises.readFile(coverImageUrl)];
                case 1:
                    fileBuffer = _a.sent();
                    console.log(fileBuffer);
                    return [4 /*yield*/, supabase.storage.from('book-covers').upload("test_images/".concat(bookTitle, "-").concat(size, ".jpg"), fileBuffer, {
                            contentType: 'image/jpeg',
                            upsert: true,
                        })];
                case 2:
                    res = _a.sent();
                    if (res.data) {
                        console.log("Successfully uploaded cover for ".concat(bookTitle));
                    }
                    else if (res.error) {
                        console.error("Error uploading small cover for ".concat(bookTitle, ":"), res.error);
                    }
                    else {
                        console.log("Successfully uploaded small cover for ".concat(bookTitle));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function uploadCovers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, _i, data_1, book, cover_i, bookTitle, coverImageMedium, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 11, , 12]);
                    console.log("reading file...");
                    return [4 /*yield*/, read_File()];
                case 1:
                    data = _a.sent();
                    _i = 0, data_1 = data;
                    _a.label = 2;
                case 2:
                    if (!(_i < data_1.length)) return [3 /*break*/, 10];
                    book = data_1[_i];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 8, , 9]);
                    cover_i = book.cover_i;
                    bookTitle = book.title;
                    if (!cover_i) return [3 /*break*/, 7];
                    return [4 /*yield*/, loopFolder(basePath, bookTitle, 'M')];
                case 4:
                    coverImageMedium = _a.sent();
                    if (!(coverImageMedium != '')) return [3 /*break*/, 6];
                    return [4 /*yield*/, uploadSupabase(coverImageMedium, bookTitle, 'M')];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 6:
                    console.log("No medium cover found for ".concat(bookTitle));
                    _a.label = 7;
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.error('Error uploading cover:', error_1);
                    return [3 /*break*/, 9];
                case 9:
                    _i++;
                    return [3 /*break*/, 2];
                case 10: return [3 /*break*/, 12];
                case 11:
                    error_2 = _a.sent();
                    console.error('Error reading file:', error_2);
                    return [3 /*break*/, 12];
                case 12: return [2 /*return*/];
            }
        });
    });
}
uploadCovers()
    .then(function () { return console.log('All covers uploaded successfully.'); })
    .catch(function (error) { return console.error('Error in uploadCovers:', error); });
