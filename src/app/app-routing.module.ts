import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path:'' , component: StartComponent ,title:'HOME'},
  {path:'about' , component:AboutComponent ,title:'ABOUT'},
  {path:'portfolio' , component:PortfolioComponent , title:'PORTFOLIO'},
  {path:'contact' , component:ContactComponent , title:'CONTACT'},
  {path:'**' , component:NotFoundComponent, title:'NotFound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {scrollPositionRestoration : 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
