"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
require('rxjs/add/operator/toPromise');
var app_component_1 = require('./app.component');
var router_1 = require("@angular/router");
var app_service_1 = require("./app.service");
var layout_module_1 = require("./shared/layout.module");
var communication_service_1 = require("./communication.service");
var configuration_service_1 = require("./configuration.service");
var shared_1 = require("primeng/components/common/shared");
var http_1 = require("@angular/http");
var app_guard_1 = require("./app.guard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(app_routes_1.AppRoutes, { useHash: true }),
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                layout_module_1.LayoutModule,
                shared_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [app_service_1.AppService, communication_service_1.CommunicationService, configuration_service_1.ConfigurationService, app_guard_1.AppGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
