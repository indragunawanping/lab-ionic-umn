import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenuePage } from './venue.page';

const routes : Routes = [
    {
        path: 'tabs',
        component: VenuePage,
        children: [
            {
                path: 'browse',
                children:[
                    {
                        path: '',
                        loadChildren: './browse/browse.module#BrowsePageModule'
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
                path: 'booking',
                children: [
                    {
                        path: '',
                        loadChildren: './booking/booking.module#BookingPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/venue/tabs/browse',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/venue/tabs/browse',
        pathMatch: 'full'
    },
  { path: 'booking', loadChildren: './booking/booking.module#BookingPageModule' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class VenueRoutingModule {}