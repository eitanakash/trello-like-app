import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  currentTicket = null;
  message = '';

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTickets(this.route.snapshot.paramMap.get('id'));
    console.log('ticket id to edit: ', this.currentTicket);

  }

  // TODO: finish this module
  getTickets(id): void {
    this.ticketService.get(id)
      .subscribe(
        data => {
          this.currentTicket = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateTickets(newTicket): void {
    this.ticketService.update(newTicket)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The ticket was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}