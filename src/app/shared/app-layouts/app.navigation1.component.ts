import {Component } from '@angular/core';

@Component({
    selector: 'app-navigation1',
    template: `
        <div class="full-nav-container-home">
            <div class='nav-1 container-fluid'>
                <div class="row">
                    <div class="ui-g-4">
                        <ul class='topbar-menu'>
                            <li role='menuitem'>
                                <a href='#' [routerLink]="'/websitesettings/general'">
                                    <span>EXPLORE CITIES</span>
                                </a>
                            </li>
                            <li role='menuitem'>
                                <a href='#' [routerLink]="'/about'">
                                    <span>ABOUT US</span>
                                </a>
                            </li>
                            <li role='menuitem'>
                                <a href='#' [routerLink]="'/partner'">
                                    <span>PROPERTY PARTNER</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="ui-g-4">
                        <div class="top-logo">
                            <img src="assets/images/logo/StayBeyond_Primary-Logo.png">
                        </div>
                    </div>
                    <div class="ui-g-4">
                        <button pButton type="button" label="LIST YOUR HOME"></button>
                    </div>
                </div>
            </div>
            <div class="topbar-responsive container-fluid">
                <img src="assets/images/logo/StayBeyond_Logotype.png">
            </div>
        </div>
    `
})
export class AppNavigation1Component {

    constructor() {}

}