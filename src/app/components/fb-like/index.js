"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FbLikeComponent = /** @class */ (function () {
    function FbLikeComponent() {
        this.url = location.href;
        // initialise facebook sdk after it loads if required
        if (!window['fbAsyncInit']) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: '159050454558546',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });
            };
        }
        // load facebook sdk if required
        var url = 'https://connect.facebook.net/ru_RU/sdk.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    FbLikeComponent.prototype.ngAfterViewInit = function () {
        // render facebook button
        window['FB'] && window['FB'].XFBML.parse();
    };
    FbLikeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'fb-like',
                    template: "<div class=\"fb-share-button\" [attr.data-href]=\"url\" data-layout=\"button_count\" data-show-faces=\"true\" data-share=\"true\"></div>",
                },] },
    ];
    /** @nocollapse */
    FbLikeComponent.ctorParameters = function () { return []; };
    FbLikeComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
    };
    return FbLikeComponent;
}());
exports.FbLikeComponent = FbLikeComponent;
