"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 2] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
;
var MainLayoutComponent = (function () {
    function MainLayoutComponent(renderer, communicationService) {
        this.renderer = renderer;
        this.communicationService = communicationService;
        this.layoutCompact = false;
        this.layoutMode = MenuOrientation.STATIC;
        this.darkMenu = false;
        this.profileMode = 'inline';
        this.setLoadingClass = "closed-loading-screen";
        this.setErrorClass = "closedErrorScreen";
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.communicationService.trackApplicationStatus.subscribe(function (status) {
            switch (status) {
                case '1': {
                    _this.setLoadingClass = "show-loading-screen";
                    //this.setAgainLoginClass = "closedErrorScreen";
                    _this.setErrorClass = "closed-error-screen";
                    break;
                }
                case '2': {
                    _this.setErrorClass = "show-error-screen";
                    _this.setLoadingClass = "closed-loading-screen";
                    //this.setAgainLoginClass = "closedErrorScreen";
                    break;
                }
                case '3': {
                    //this.setAgainLoginClass = "showErrorScreen";
                    _this.setLoadingClass = "closed-loading-screen";
                    _this.setErrorClass = "closed-error-screen";
                    break;
                }
                case '4': {
                    _this.setLoadingClass = "closed-loading-screen";
                    //this.setAgainLoginClass = "closedErrorScreen";
                    _this.setErrorClass = "closed-error-screen";
                    break;
                }
                case '5': {
                    _this.setLoadingClass = "close-loading-screen";
                    //this.setAgainLoginClass = "closedErrorScreen";
                    _this.setErrorClass = "closed-error-screen";
                    break;
                }
                case '6': {
                    _this.setErrorClass = "close-error-screen";
                    _this.setLoadingClass = "closed-loading-screen";
                    //this.setAgainLoginClass = "closedErrorScreen";
                    break;
                }
                case '7': {
                    //this.setAgainLoginClass = "showErrorScreen";
                    _this.setLoadingClass = "closed-loading-screen";
                    _this.setErrorClass = "closed-error-screen";
                    break;
                }
            }
        });
    };
    MainLayoutComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = this.layoutMenuScrollerViewChild.nativeElement;
        //hides the horizontal submenus or top menu if outside is clicked
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function (event) {
            if (!_this.topbarItemClick) {
                _this.activeTopbarItem = null;
                _this.topbarMenuActive = false;
            }
            if (!_this.menuClick && _this.isHorizontal()) {
                _this.resetMenu = true;
            }
            _this.topbarItemClick = false;
            _this.menuClick = false;
        });
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    MainLayoutComponent.prototype.onMenuButtonClick = function (event) {
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                if (this.staticMenuMobileActive) {
                    this.staticMenuMobileActive = false;
                }
                else {
                    this.staticMenuMobileActive = true;
                }
            }
        }
        event.preventDefault();
    };
    MainLayoutComponent.prototype.onMenuClick = function ($event) {
        var _this = this;
        this.menuClick = true;
        this.resetMenu = false;
        if (!this.isHorizontal()) {
            setTimeout(function () {
                jQuery(_this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    };
    MainLayoutComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        if (this.overlayMenuActive || this.staticMenuMobileActive) {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        }
        event.preventDefault();
    };
    MainLayoutComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;
        event.preventDefault();
    };
    MainLayoutComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    MainLayoutComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    MainLayoutComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    MainLayoutComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    MainLayoutComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    MainLayoutComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    MainLayoutComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    MainLayoutComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    MainLayoutComponent.prototype.ngOnDestroy = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
        }
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
    };
    __decorate([
        core_1.ViewChild('layoutWrapper')
    ], MainLayoutComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        core_1.ViewChild('layoutMenuScroller')
    ], MainLayoutComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    MainLayoutComponent = __decorate([
        core_1.Component({
            selector: 'app-main-layout',
            templateUrl: 'main-layout.component.html'
        })
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;
