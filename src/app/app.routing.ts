import { CvComponent } from "./cvTech/cv/cv.component";
import {RouterModule, Routes} from '@angular/router'
import { DetailComponent } from "./cvTech/detail/detail.component";
import {  } from '@angular/compiler'
import { LoginComponent } from './login/login.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { AddCvComponent } from './add-cv/add-cv.component';



const APP_ROUTING: Routes = [
    {path: 'cv/id', component: DetailComponent},
    {path: 'rsimulator', component: RouterSimulatorComponent},
    {path: 'login', component:LoginComponent},
    {path: 'add', component:AddCvComponent},
    {path: 'cv', redirectTo: '/', pathMatch:'full' },
    {path: '', component: CvComponent},
    {path: 'color', component:DetailComponent},
    {path: '**', component:DetailComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);