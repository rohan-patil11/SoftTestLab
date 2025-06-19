import { Component } from '@angular/core';
import { ApplyPageServiceService } from '../../services/apply-page-service.service';

@Component({
  selector: 'app-apply-page',
  templateUrl: './apply-page.component.html',
  styleUrls: ['./apply-page.component.css']
})
export class ApplyPageComponent {
  constructor(private applyPageService: ApplyPageServiceService) { }


  fullName: string = '';
  email: string = '';
  contactNumber: any = '';
  skills: string = '';
  degree: string = '';
  github: string = '';

onSubmit() {
  {
    const application = {
      fullName: this.fullName,
      email: this.email,
      contactNumber: this.contactNumber,
      skills: this.skills,
      degree: this.degree,
      github: this.github
    };
    console.log(application);
    this.applyPageService.onSubmit(application).subscribe((response)=>{
       if (response!=null) {
        alert('Application submitted successfully');

       } else {
        alert('Error submitting application please try again');
       }
    })
  }
}
}



