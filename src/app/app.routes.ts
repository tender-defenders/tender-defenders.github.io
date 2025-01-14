import { Routes } from '@angular/router';
import { TosComponent } from './pages/tos/tos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'terms-of-service', component: TosComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'confirm-email', component: ConfirmEmailComponent },
    { path: '**', component: NotFoundComponent }
];
