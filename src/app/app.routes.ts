import { Routes } from '@angular/router';
import { ProgrammationComponent } from './portefolio/programmation/programmation.component';
import { MainComponentComponent } from './portefolio/main-component/main-component.component';
import { TrainingFrameworkComponent } from './portefolio/training-framework/training-framework.component';
import { FruitListComponent } from './produits/fruits/fruit-list/fruit-list.component';
import { FruitDetailsComponent } from './produits/fruits/fruit-details/fruit-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { authGuard } from './core/guards/auth.gard';
import { PortefolioshellComponent } from './portefolio/portefolioshell/portefolioshell.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent },
    { 
        path: 'portefolio',
        canActivateChild: [authGuard],
        component: PortefolioshellComponent,
        children:[
            { path:'', component: MainComponentComponent },
            { path:'programmation', component: ProgrammationComponent },
            { path: 'training', component: TrainingFrameworkComponent },
            { path: 'fruits', component: FruitListComponent},
            { path: 'fruit/:id', component: FruitDetailsComponent },
        ]
    },
    {
        path: 'register',
        loadComponent: () =>
            import('./inscription/register/register/register.component').then(m => m.RegisterComponent),
        children: [
            { 
                path: 'step1', 
                loadComponent: () => 
                    import('./inscription/register/step1/step1.component').then(m => m.Step1Component)
            },
            { 
                path: 'step2', 
                loadComponent: () => 
                    import('./inscription/register/step2/step2.component').then(m => m.Step2Component)
            },
            { 
                path: 'step3',
                loadComponent: () => 
                    import('./inscription/register/step3/step3.component').then(m => m.Step3Component)
            },
            { 
                path: 'summary',
                loadComponent: () => 
                    import('./inscription/register/summary/summary.component').then(m => m.SummaryComponent)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponentComponent
    }
];


