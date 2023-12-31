import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {
    path: 'mainInvoice',
    component: MainInvoiceComponent,
  },
  { path: 'invoice/:id/:active', component: InvoiceComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
