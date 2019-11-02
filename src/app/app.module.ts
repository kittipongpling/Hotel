import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';
import { InsertComponent } from './insert/insert.component';
import { SelectComponent } from './select/select.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pagenofound', component: PagenofoundComponent },
  { path: 'insert', component: InsertComponent },
  { path: 'select', component: SelectComponent },
  { path: 'edit', component: EditComponent },

 
  { path: '',
    redirectTo: '/login', // เปลี่ยนเส้นทาง
    pathMatch: 'full'
  },
  { path: '**', component: PagenofoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    LoginComponent,
    PagenofoundComponent,
    InsertComponent,
    SelectComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
