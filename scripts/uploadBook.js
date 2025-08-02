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
exports.uploadBook = uploadBook;
require('dotenv').config({ path: '.env' });
var supabase_1 = require("../src/app/lib/api/supabase");
var fs = require("fs");
// Create a function that uploads each book individually
//Create a function that reads a file and uploads it to Supabase storage
var supabase = (0, supabase_1.createSupaClient)();
var filePath = 'C:/Users/yenkr/OneDrive/Desktop/Coding-Shii/Python-Scripts/book-data.json';
//This is just mock data and test to see how I wouldmanipulate the data for uploading
// const mock_data =[ {
//     author_name: [ 'Harper Lee' ],
//     title: 'To Kill a Mockingbird',
//     cover_i: 12606502,
//     first_publish_year: 1960
//   },
//   {
//     author_name: [ 'Delia Owens' ],
//     title: 'Where the Crawdads Sing',
//     cover_i: 8362947,
//     first_publish_year: 2018
//   }
// ]
// for (const book of mock_data){
//     console.log('Author:', book.author_name[0]);
//     console.log('Title:', book.title);
//     console.log('Cover ID:', book.cover_i);
//     console.log('First Publish Year:', book.first_publish_year);
// }
function read_File() {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs.promises.readFile(filePath, 'utf8')];
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
function uploadBook() {
    return __awaiter(this, void 0, void 0, function () {
        var file_data, _i, file_data_1, book, error_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    console.log('Starting to read file...');
                    return [4 /*yield*/, read_File()];
                case 1:
                    file_data = _a.sent();
                    _i = 0, file_data_1 = file_data;
                    _a.label = 2;
                case 2:
                    if (!(_i < file_data_1.length)) return [3 /*break*/, 7];
                    book = file_data_1[_i];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, supabase.from('books').insert({
                            author: book.author_name[0],
                            title: book.title,
                            cover_i: book.cover_i,
                            first_publish_year: book.first_publish_year
                        })];
                case 4:
                    _a.sent();
                    console.log("nigga we logged ".concat(book.title, " by ").concat(book.author_name[0], " successfully"));
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error('Error uploading book:', error_1);
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 9];
                case 8:
                    error_2 = _a.sent();
                    console.error('Process Failed:', error_2);
                    return [3 /*break*/, 9];
                case 9: return [2 /*return*/];
            }
        });
    });
}
uploadBook()
    .then(function () { return console.log('All books uploaded successfully.'); });
