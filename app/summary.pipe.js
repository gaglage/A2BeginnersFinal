"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SumamryPipe = (function () {
    function SumamryPipe() {
    }
    SumamryPipe.prototype.transform = function (value, args) {
        var limit = (args && args[0]) ? parseInt(args[0]) : 50;
        if (value) {
            return value.substring(0, limit) + '...';
        }
    };
    return SumamryPipe;
}());
SumamryPipe = __decorate([
    core_1.Pipe({
        name: 'summary'
    })
], SumamryPipe);
exports.SumamryPipe = SumamryPipe;
//# sourceMappingURL=summary.pipe.js.map