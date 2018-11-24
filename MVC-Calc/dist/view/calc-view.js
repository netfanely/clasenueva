"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcView = /** @class */ (function () {
    function CalcView() {
        this._input1 = 0;
        this._input2 = 0;
    }
    CalcView.prototype.setInput1 = function (value) {
        if (this.controller)
            this.controller.onInput1Changed(value);
    };
    CalcView.prototype.setInput2 = function (value) {
        if (this.controller)
            this.controller.onInput1Changed(value);
    };
    return CalcView;
}());
exports.CalcView = CalcView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy12aWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3ZpZXcvY2FsYy12aWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFBQTtRQUNZLFlBQU8sR0FBVSxDQUFDLENBQUM7UUFDbkIsWUFBTyxHQUFVLENBQUMsQ0FBQztJQWEvQixDQUFDO0lBVEcsNEJBQVMsR0FBVCxVQUFVLEtBQVk7UUFDbEIsSUFBRyxJQUFJLENBQUMsVUFBVTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsS0FBWTtRQUNsQixJQUFHLElBQUksQ0FBQyxVQUFVO1lBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLDRCQUFRIn0=