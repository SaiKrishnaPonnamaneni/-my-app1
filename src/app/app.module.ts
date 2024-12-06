import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductsComponent } from './products/products.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { VehicleDetailsComponent } from './vehicle.details/vehicle.details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { StarComponent } from './star/star.component';
import { ParentTexareaComponent } from './parent-texarea/parent-texarea.component';
import { ChildTextareaComponent } from './child-textarea/child-textarea.component';
import { PricePipe } from './price.pipe';
import { CapitalDirective } from './capital.directive';
import { TextAreaComponent } from './text-area/text-area.component';
import { TokenInterceptor } from './token.interceptor';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DatabindingComponent,
    DirectivesComponent,
    RegestrationComponent,
    EmployeeComponent,
    ProductsComponent,
    VehicleComponent,
    AccountsComponent,
    FlipkartComponent,
    MailComponent,
    PinterestComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentCardComponent,
    CreateStudentComponent,
    CreateUserComponent,
    VehicleDetailsComponent,
    AccountDetailsComponent,
    StudentDetailsComponent,
    ParentComponent,
    ChildComponent,
    SiblingsComponent,
    Sibling1Component,
    Sibling2Component,
    StarComponent,
    ParentTexareaComponent,
    ChildTextareaComponent,
    PricePipe,
    CapitalDirective,
    TextAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // api integration
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
