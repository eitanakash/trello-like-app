import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';

const routes: Routes = [
  { path: '', redirectTo: 'ticket', pathMatch: 'full' },
  { path: 'boards', component: TicketsListComponent },
  { path: 'ticket/:id', component: TicketDetailsComponent },
  { path: 'add', component: AddTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }