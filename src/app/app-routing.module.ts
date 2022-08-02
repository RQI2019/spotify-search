import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { CallbackComponent } from './callback/callback.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: HomeComponent },
  { path: 'artists/:id', component: AboutComponent },
  { path: 'albums/:id', component: ContactComponent },
  { path: 'tracks/:id', redirectTo: 'contact' },
  { path: 'callback', component: CallbackComponent },

  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
