"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var main_layout_component_1 = require("./app-layouts/main-layout.component");
var auth_layout_component_1 = require("./app-layouts/auth-layout.component");
var app_footer_component_1 = require("./app-layouts/app.footer.component");
var app_menu_component_1 = require("./app-layouts/app.menu.component");
var app_topbar_component_1 = require("./app-layouts/app.topbar.component");
var router_1 = require("@angular/router");
var confirmdialog_1 = require("primeng/components/confirmdialog/confirmdialog");
var app_loader_component_1 = require("./app-layouts/app.loader.component");
var app_error_component_1 = require("./app-layouts/app.error.component");
var button_1 = require("primeng/components/button/button");
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                confirmdialog_1.ConfirmDialogModule,
                button_1.ButtonModule
            ],
            declarations: [
                main_layout_component_1.MainLayoutComponent,
                auth_layout_component_1.AuthLayoutComponent,
                app_footer_component_1.AppFooter,
                app_menu_component_1.AppMenuComponent,
                app_topbar_component_1.AppTopBar,
                app_menu_component_1.AppSubMenu,
                app_loader_component_1.AppLoader,
                app_error_component_1.AppError
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
