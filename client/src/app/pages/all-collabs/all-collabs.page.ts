import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-collabs',
  templateUrl: './all-collabs.page.html',
  styleUrls: ['./all-collabs.page.scss'],
})
export class AllCollabsPage implements OnInit {

  collaborators: any;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.getAllCollaborators();
  }

  getAllCollaborators() {
    this.api.getAllCollaborators().subscribe((data: Array<object>) => {
      this.collaborators = data;
    });
  }
}
