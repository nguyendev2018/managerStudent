
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'form', component: FormComponent },

  {path:"",redirectTo:"about",pathMatch:'full'},
  //ANCHOR nếu đường link rỗng thì sẽ tới trang home pathMatch có mục đích là không làm lỗi và hiện trang ra
  {path:'**',component:NotFoundComponent}
  //ANCHOR nếu gõ một đường dẫn không tồn tại thì nó sẽ phi về path ***
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
