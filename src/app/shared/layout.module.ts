import {ChangeDetectorRef, NgModule, OnInit} from '@angular/core';
import {CommonModule } from '@angular/common';
import {MainLayoutComponent} from './app-layouts/main-layout.component';
import {AppFooterComponent} from './app-layouts/app.footer.component';
import {AppTopbarComponent} from './app-layouts/app.topbar.component';
import {RouterModule} from '@angular/router';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {AppNavigation2Component} from './app-layouts/app.navigation2.component';
import {AppNavigation1Component} from './app-layouts/app.navigation1.component';

@NgModule({
  imports: [
      CommonModule,
      RouterModule,
      ConfirmDialogModule,
      ButtonModule,
      DataTableModule
  ],
  declarations: [
      MainLayoutComponent,
      AppFooterComponent,
      AppTopbarComponent,
      AppNavigation2Component,
      AppNavigation1Component
  ]
})
export class LayoutModule {


}
