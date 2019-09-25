import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UkmPage } from './ukm.page';

const routes : Routes = [
    {
        path: 'tabs',
        component: UkmPage,
        children: [
            {
                path: 'homepage',
                children:[
                    {
                        path: '',
                        loadChildren: './homepage/homepage.module#HomepagePageModule'
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: './profile/profile.module#ProfilePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/ukm/tabs/homepage',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/ukm/tabs/homepage',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UkmRoutingModule {}