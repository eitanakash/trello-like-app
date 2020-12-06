import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { TicketsListComponent } from './components/tickets-list/tickets-list.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TicketDetailsComponent,
    AddTicketComponent,
    TicketsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
