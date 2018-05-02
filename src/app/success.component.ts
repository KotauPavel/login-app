import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  userName: string = "";
  private querySubscription: Subscription;
  constructor(private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.userName = queryParam['login'];
            }
        );
}
}
