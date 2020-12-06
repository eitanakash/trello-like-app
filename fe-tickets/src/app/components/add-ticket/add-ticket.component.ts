import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { BoardsType } from './tickets-enums';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})

export class AddTicketComponent implements OnInit {
  defaultDate = '10/10/2020';
  defaultTitle = 'defaultTitle';
  defaultDescription = 'defaultDescription';
  defaultMembers = 'default,Members';

  tickets = {
    title: this.defaultTitle,
    description: this.defaultDescription,
    members: this.defaultMembers,
    dueDate: this.defaultDate,
    boardType: BoardsType.BACKLOG,
  };

  submitted = false;
  someText = '';
  eventText = '';

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }

  saveTicket(): void {
    console.log('saveTickets this.tickets');
    console.log(this.tickets);
    const data = {
      title: this.tickets.title,
      description: this.tickets.description,
      members: this.tickets.members,
      dueDate: this.tickets.dueDate,
      boardType: BoardsType.BACKLOG,

    };

    this.ticketService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTicket(): void {
    this.submitted = false;
    this.tickets = {
      title: this.defaultTitle,
      description: this.defaultDescription,
      members: this.defaultMembers,
      dueDate: this.defaultDate,
      boardType: BoardsType.BACKLOG,
    };
  }

}