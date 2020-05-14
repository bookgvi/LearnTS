"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("../Resource/Auto");
var Tesla = /** @class */ (function (_super) {
    __extends(Tesla, _super);
    function Tesla(model, type, acceleration, maxSpeed) {
        var _this = _super.call(this) || this;
        _this.model = model;
        _this.type = type;
        _this.acceleration = acceleration;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    Object.defineProperty(Tesla.prototype, "getInfo", {
        get: function () {
            return "\n    Model: " + this.model + "\n    Type: " + this.type + "\n    Acceleration: " + this.acceleration + "\n    MaxSpeed: " + this.maxSpeed + "\n    ";
        },
        enumerable: true,
        configurable: true
    });
    return Tesla;
}(Auto_1.Auto));
exports.Tesla = Tesla;
