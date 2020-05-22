import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecetaComponent } from './Components/receta/receta.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path: 'home/:categoria',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Receta/:id',
    loadChildren: () => import('./Pages/receta/receta.module').then( m => m.RecetaPageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: '',
    redirectTo: 'home/Ultimas',
    pathMatch: 'full'
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./Pages/logout/logout.module').then( m => m.LogoutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
