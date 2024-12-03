import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle.details/vehicle.details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [{
  path:"dashboard",canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:"home",component:HomeComponent},
  {path:"welcome",component:WelcomeComponent},
{path:"calculator",component:CalculatorComponent},
{path:"rectangle",component:RectangleComponent},
{path:"circle",component:CircleComponent},
{path:"BMI",component:BMIComponent},
{path:"databinding",component:DatabindingComponent},
{path:"directives",component:DirectivesComponent},
{path:"regestration", component:RegestrationComponent},
{path:"employee",component:EmployeeComponent},
{path:"products",component:ProductsComponent},
{path:"vehicle",component:VehicleComponent},
{path:"accounts",component:AccountsComponent},
{path:"flipkart",component:FlipkartComponent},
{path:"mail",component:MailComponent},
{path:"pinterest",component:PinterestComponent},
{path:"weather",component:WeatherComponent},
{path:"blog",component:BlogComponent},
{path:"imdb",component:ImdbComponent},
{path:"create-vehicle",component:CreateVehicleComponent},
{path:"create-account",component:CreateAccountComponent},
{path:"student-card",component:StudentCardComponent },
{path:"create-student",component:CreateStudentComponent},
{path:"create-user",component:CreateUserComponent},
{path:'vehicle.details/:id',component:VehicleDetailsComponent},
{path:'edit-vehicle/:id',component:CreateVehicleComponent},
{path:'account-details/:id',component:AccountDetailsComponent},
{path:'edit-account/:id', component:CreateAccountComponent},
{path:'student-details/:id',component:StudentDetailsComponent},
{path:'student-edit/:id',component:CreateStudentComponent},
]
},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent},

];


@NgModule(

  
  {

  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
