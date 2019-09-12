import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  /* main */
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainPage,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'contacts', 
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
      }
    ]
  },
  /* login */
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },

  /* signup */
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  /* not found */
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
