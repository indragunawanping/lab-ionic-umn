import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'ukm', pathMatch: 'full' },
  { path: 'ukm', loadChildren: './ukm/ukm.module#UkmPageModule' },
  // { path: 'homepage', loadChildren: './ukm/homepage/homepage.module#HomepagePageModule' },
  // { path: 'profile', loadChildren: './ukm/profile/profile.module#ProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
