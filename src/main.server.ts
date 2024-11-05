import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import provideHttpClient

import { AppComponent } from './app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent,
  {
    providers: [
      provideHttpClient()  // Provide HttpClient globally
    ]
  }
 );

export default bootstrap;
