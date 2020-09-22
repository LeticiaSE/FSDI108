import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TempCalculatorComponent } from './components/temp-calculator/temp-calculator.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AboutComponent } from './components/about/about.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'temperature', component: TempCalculatorComponent },
  { path: 'todo', component: TodoListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/register', component: UserRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
