import { Routes } from '@angular/router';
import { NavbarComponent } from '../components/Navbar/navbar/navbar.component';
import { HomeComponent } from '../components/Home/home/home.component';
import { SignupComponent } from '../components/signup/signup/signup.component';
import { BoutiqueComponent } from '../components/boutique/boutique/boutique.component';
import { DesignersComponent } from '../components/designers/designers/designers.component';
import { RentalattairComponent } from '../components/rentalattair/rentalattair/rentalattair.component';
import { TailersComponent } from '../components/tailers/tailers/tailers.component';

export const routes: Routes = [
    {path:'navbar', component:NavbarComponent},
    {path:'', component:HomeComponent},
    {path:'signup', component:SignupComponent},
    {path:'boutique', component:BoutiqueComponent},
    {path:'designers', component:DesignersComponent},
    {path:'rentalattair', component:RentalattairComponent},
    {path:'tailers', component:TailersComponent}
];
