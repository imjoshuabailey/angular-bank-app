import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { ContactComponent} from './contact/contact.component'

export const routes: Routes = [
  { path: '', redirectTo: 'atm', pathMatch: 'full' },
  { path: 'atm', component: AtmComponent },
  { path: 'teller', component: TellerComponent},
  {path: 'contact', component: ContactComponent},
  { path: '**', component: AppComponent}
];

export const router: ModuleWithProviders = RouterModule.forRoot(routes);
