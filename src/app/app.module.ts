import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { CheckService } from './check.service';
import { SuccessComponent } from './success.component';
import { FailComponent } from './fail.component';
import { HttpClientModule }   from '@angular/common/http';

const childRoutes: Routes = [
    { path: 'fail', component: FailComponent }
];

const appRoutes: Routes =[
    { path: '', component: LoginComponent, children: childRoutes },
    { path: 'success', component: SuccessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuccessComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    //HttpClient,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
