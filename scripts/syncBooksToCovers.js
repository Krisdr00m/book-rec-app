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
//ts-worksheet
require("dotenv/config");
var supabase_1 = require("../src/app/lib/api/supabase");
var supabase = (0, supabase_1.createAuthClient)();
/*
    TODO:
    Pull all the titles from the supaabase db
    Loop through each row and update the corrsponding information
*/
function extract_data() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, data, error, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, supabase.from('books').select('title, id')];
                case 1:
                    _a = _b.sent(), data = _a.data, error = _a.error;
                    console.log(data);
                    // if(error?.status !== '200'){
                    // }
                    return [2 /*return*/, data];
                case 2:
                    error_1 = _b.sent();
                    console.log(error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function alter_data(data) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, data_1, row, formatedUrl, _a, data_2, error;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, data_1 = data;
                    _b.label = 1;
                case 1:
                    if (!(_i < data_1.length)) return [3 /*break*/, 4];
                    row = data_1[_i];
                    formatedUrl = "Covers/test_images/".concat(row.title, "-M.jpg");
                    return [4 /*yield*/, supabase.from('books').update({ coverurl: formatedUrl }).eq('id', row.id)];
                case 2:
                    _a = _b.sent(), data_2 = _a.data, error = _a.error;
                    console.log(error);
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log('finished uploading');
                    return [2 /*return*/];
            }
        });
    });
}
function fullCoverSync() {
    return __awaiter(this, void 0, void 0, function () {
        var extractedData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, extract_data()];
                case 1:
                    extractedData = _a.sent();
                    if (!extractedData) return [3 /*break*/, 3];
                    return [4 /*yield*/, alter_data(extractedData)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    console.log("No data returned from Supabase");
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
fullCoverSync()
    .then(function () { return console.log('Successful Run'); })
    .catch(function (error) { return console.error('Shit fucking up', error); });
