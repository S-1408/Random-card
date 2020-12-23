import { UserService } from './services/user.service';
import { Component ,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'random-card';

 user: any;


  constructor(private userService: UserService,
              private toastr: ToastrService){}
  // tslint:disable-next-line:typedef
  ngOnInit(){

    this.getUserData();
  
  }

  // tslint:disable-next-line:typedef
  getUserData(){
    this.userService.getUser().subscribe( (response: any) => {
      console.log(response);
      this.user = response.results[0];
    },
    (err) => {
      this.toastr.error(err.status, 'Something wrong');
    });
  }
}
