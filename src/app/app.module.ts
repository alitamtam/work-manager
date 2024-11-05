import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [EmployeeService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
