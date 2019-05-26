import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { APIService } from '../../services/api.service';
import * as _ from 'lodash';
import { ClassGroup } from 'src/app/interfaces/class-group';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  public classGroups: Array<ClassGroup>;
  public activeClassGroups: Array<ClassGroup>;
  public inactiveClassGroups: Array<ClassGroup>;
  public pendingClassGroups: Array<ClassGroup>;

  constructor(private router: Router, private api: APIService) { }

  goToClassGroupDetails() {
    this.router.navigate(['my-class-group']);
  }
  newEnrollment() {
    this.router.navigate(['enroll-in-course']);
  }

  ngOnInit() {
    // const id = this.route.snapshot.params.id;
    const id = 1;
    this.getClassGroups(id);
  }

  getClassGroups(id: Number) {
    this.api.getAllCoursesFromStudent(id).subscribe((data: Array<object>) => {
      this.classGroups = data;
      // this.getActiveCourses(this.classGroups);
      // this.getInactiveCourses(this.classGroups);
      this.getPendingCourses(this.classGroups);
    });
  }

  // getActiveCourses(classGroups: ClassGroup) {
  //   this.activeClassGroups = _.filter(classGroups , function(o) {
  //     return o.active;
  //   });
  // }

  // getInactiveCourses(classGroups: ClassGroup) {
  //   this.inactiveClassGroups = _.filter(classGroups , function(o) {
  //     return !o.active;
  //   });
  // }

  getPendingCourses(classGroups: any) {
    // TO DO FILTER
  }

}
