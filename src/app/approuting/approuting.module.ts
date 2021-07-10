import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';
import { MatautocomComponent } from '@app/matautocom/matautocom.component';
import { MatautoobjectComponent } from '@app/matautoobject/matautoobject.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auto', component: MatautocomComponent },
  { path: 'autoobj', component: MatautoobjectComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApproutingModule {}
