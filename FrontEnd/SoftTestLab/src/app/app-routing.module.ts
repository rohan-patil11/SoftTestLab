import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CurrentOpeningsComponent } from './components/current-openings/current-openings.component';
import { ApplyPageComponent } from './components/apply-page/apply-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '' , redirectTo: 'index', pathMatch: 'full'
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path:'about-us', component:AboutUsComponent
  },
  {
    path: 'current-openings', component:CurrentOpeningsComponent
  },
  {
    path:'apply-page', component:ApplyPageComponent
  },
  {
    path:'contact-us', component:ContactUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
