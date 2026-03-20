import { Routes } from '@angular/router';
import { ProgrammationComponent } from './programmation/programmation.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { TrainingFrameworkComponent } from './training-framework/training-framework.component';
import { FruitListComponent } from './produits/fruits/fruit-list/fruit-list.component';
import { FruitDetailsComponent } from './produits/fruits/fruit-details/fruit-details.component';

export const routes: Routes = [
    { path: '', component: MainComponentComponent },
    { path:'programmation', component: ProgrammationComponent },
    { path: 'training', component: TrainingFrameworkComponent },
    { path: 'fruits', component: FruitListComponent},
    { path: 'fruit/:id', component: FruitDetailsComponent },
    {
        path: 'register',
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
    }
];


