import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <div class='footer'>
            <div class="row  container-fluid">
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <img src="assets/images/logo/StayBeyond_White.png" style="width: 130px;">
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-3">
                    <h3>COMPANY</h3>
                    <ul>
                        <li>REFER A HOUSE</li>
                        <li>ABOUT US</li>
                        <li>T&Cs</li>
                        <li>PRIVACY & POLICY</li>
                        <li>CAREERSE</li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                    <h3>LOCATIONS</h3>
                    <ul>
                        <li>LONDON</li>
                        <li>OXFORD</li>
                        <li>CAMBRIDGE</li>
                        <li>BATH</li>
                        <li>BRIGHTON</li>
                        <li>BRISTOL</li>
                        <li>YORK</li>
                    </ul>
                </div>
                <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                    <h3>GET IN TOUCH</h3>
                    <ul>
                        <li>2 EASTBOURNE TERRACE</li>
                        <li>LONDON, W2 6LG</li>
                        <li>+44 207 523 5351</li>
                        <li> </li>
                        <li>HOME@STAYBEYOND.COM</li>
                        <li> </li>
                        <li style="margin-left: -10px;">
                            <img src="assets/images/icons/ficon1.png" style="width: 27px; margin: 0 10px 0 0; display: inline-block;">
                            <img src="assets/images/icons/ficon2.png" style="width: 30px; margin: 0 10px 0 0; display: inline-block;">
                            <img src="assets/images/icons/ficon3.png" style="width: 30px; margin: 0 10px 0 0; display: inline-block;">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
})

export class AppFooterComponent {

    constructor() {}

}