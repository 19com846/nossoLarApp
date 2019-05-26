import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import * as _ from 'lodash';
import { ClassGroup } from 'src/app/interfaces/class-group';
<<<<<<< HEAD
import { Collaborator } from '../all-collabs/collaborator';
=======
>>>>>>> Prepar Front-end to connect with back-end

@Component({
  selector: 'app-my-class-group',
  templateUrl: './my-class-group.page.html',
  styleUrls: ['./my-class-group.page.scss'],
})
export class MyClassGroupPage implements OnInit {
<<<<<<< HEAD
  public classGroup: ClassGroup;
  public collaborators: Array<Collaborator>;
  private classGroupId: Number;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private api: APIService) {
                
               }
=======
  public classGroups: Array<ClassGroup>;
  public collaborators: any;

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private api: APIService) { }
>>>>>>> Prepar Front-end to connect with back-end

  goToMyAbsences() {
    this.router.navigate(['absences', this.classGroupId]);
  }

  tranferClassGroup() {
    const id = this.classGroupId;
    this.router.navigate(['transfer-class-group', id]);
  }

  getClassGroupDetails(classGroupId: Number) {
    this.api.getClassGroupDetails(classGroupId).subscribe((data: ClassGroup) => {
      this.classGroup = data;
      this.getCollaborators(this.classGroup);
      console.log(this.classGroup);
    });
  }

  getCollaborators(classGroup: ClassGroup): Array<Collaborator> {
    return this.collaborators = this.classGroup.collaborators
  }

  ngOnInit() {
    this.classGroupId = Number(this.route.snapshot.paramMap.get('classGroupId'));
    this.getClassGroupDetails(this.classGroupId);
  }

}
