import { Routes } from '@angular/router';
import { TosComponent } from './pages/tos/tos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'terms-of-service', component: TosComponent },
    { path: '**', component: NotFoundComponent }
];
