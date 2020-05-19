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
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: 'home/Ultimas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
