import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MongoimportComponent } from './components/mongoimport/mongoimport.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    {
        path: '',
        component: MongoimportComponent
    },
    {
        path: 'import',
        component: MongoimportComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
