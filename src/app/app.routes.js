"use strict";
var router_1 = require('@angular/router');
var main_layout_component_1 = require("./shared/app-layouts/main-layout.component");
var auth_layout_component_1 = require("./shared/app-layouts/auth-layout.component");
var app_guard_1 = require("./app.guard");
exports.AppRoutes = [
    {
        path: '',
        component: main_layout_component_1.MainLayoutComponent,
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'home', loadChildren: 'app/home/home.module#HomeModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'allclients', loadChildren: 'app/allclients/allclients.module#AllclientsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'clients', loadChildren: 'app/last/clients/clients.module#ClientsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'websitesettings', loadChildren: 'app/websitesettings/websitesettings.module#WebsitesettingsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'groups', loadChildren: 'app/last/groups/groups.module#GroupsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'missedcalls', loadChildren: 'app/last/missedcalls/missedcalls.module#MissedcallsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'versions', loadChildren: 'app/last/versions/versions.module#VersionsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'lockedclients', loadChildren: 'app/last/lockedclients/lockedclients.module#LockedclientsModule', canActivate: [app_guard_1.AppGuard] },
            { path: 'versioning', loadChildren: 'app/development/versioning/versioning.module#VersioningModule', canActivate: [app_guard_1.AppGuard] },
        ]
    },
    { path: 'auth', component: auth_layout_component_1.AuthLayoutComponent, loadChildren: 'app/auth/auth.module#AuthModule' },
    { path: '**', redirectTo: 'home' }
];
exports.routing = router_1.RouterModule.forRoot(exports.AppRoutes);
