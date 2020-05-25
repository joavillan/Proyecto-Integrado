import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './Service/auth-guard.service';

const routes: Routes = [
  {
    path: 'home/:categoria',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'Receta/:id',
    loadChildren: () => import('./Pages/receta/receta.module').then( m => m.RecetaPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'Login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./Pages/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate:[AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
