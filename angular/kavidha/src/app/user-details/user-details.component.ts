import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";



@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
    _id: string;
    user: User;


    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.user = new User();

        this._id = this.route.snapshot.params['_id'];
        this.userService.getUser(this._id).subscribe(data => {
            this.user = data
        }, error => console.log(error));
    }

    list() {
        this.router.navigate(['users']);
    }
}