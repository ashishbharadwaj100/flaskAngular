import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../user";
import { UserService } from "../user.service";


@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html',
    styleUrls: ['./update-user.component.css']
})

export class UpdateUserComponent implements OnInit {
    user: User;
    _id: string;


    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }


    ngOnInit() {
        this.user = new User()
        this._id = this.route.snapshot.params['_id']

        this.userService.getUser(this._id).subscribe(data => {
            this.user = data;
        }, error => console.log(error));
    }


    updateUser() {
        this.userService.updateUser(this._id, this.user).subscribe(data => {
            console.log("Update User Data Component File", data)
            this.user = new User();
            this.gotoList();
        }, error => console.log(error));
    }

    onSubmit() {
        this.updateUser();
    }


    gotoList() {
        this.router.navigate['/users'];
    }


}