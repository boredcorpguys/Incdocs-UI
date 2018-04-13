import { Component, OnInit } from '@angular/core';
import { HomeService, UserEntitlements, ActionType } from './services/home.service';
import { DataService } from '../data.service';
import { trigger, transition, useAnimation, AnimationMetadata } from '@angular/animations';
import { bounceInDown, bounceOutDown } from 'ng-animate/lib/bouncing';
import { fadeInDown } from 'ng-animate/lib/fading';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [
      transition('void => *', useAnimation(bounceInDown,{params: { timing: 2}})),
      transition('* => void', useAnimation(bounceOutDown,{params: { timing: 0.5}}))
    ])
  ]
})
export class HomeComponent implements OnInit {
  userEntitlements: UserEntitlements;
  loading: boolean;
  constructor(private service: HomeService, private data: DataService) {
    this.loading = true;
    this.fetchEntitlements();
  }

  fetchEntitlements() {
    this.service.fetchEntitlements().subscribe((entitlements: any) => {
      console.log(entitlements);
      this.userEntitlements = entitlements;
      this.data.userEntitlements = entitlements;
      this.service.populateEntitlementsMap(entitlements.actions);
      this.loading = false;
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  showActionItem(action: string): boolean {
    return this.service.showActionItem(action);
  }

}
