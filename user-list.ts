import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    this.loadCustomUsers();
  }

  loadCustomUsers(): void {
    this.loading = true;
    
    // Your custom data
    this.users = [
      {
        id: 101,
        name: 'Joseph',
        username: 'Jp',
        email: 'jdizon@hau.edu.ph',
        website: 'jd.com'
      },
      {
        id: 102,
        name: 'James',
        username: 'Ja',
        email: 'jatienza@hau.edu.ph',
        website: 'james.org'
      },
      {
        id: 103,
        name: 'John',
        username: 'Cena',
        email: 'jcena@hau.edu.ph',
        website: 'youcantseeme.wwe'
      },
      {
        id: 104,
        name: 'Robert',
        username: 'Robi',
        email: 'rquintana@hau.edu.ph',
        website: 'robert.dev'
      },
      {
        id: 105,
        name: 'Aaron',
        username: 'Aj',
        email: 'atantonio@hau.edu.ph',
        website: 'Ajthekingantonio.dev'
      },
    ];

    this.loading = false;
  }
}