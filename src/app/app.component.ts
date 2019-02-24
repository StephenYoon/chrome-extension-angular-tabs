import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { ManageTabsService } from './manage-tabs.service';
import { MyTab } from './MyTab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Tab Manager!';
  public myTabs: MyTab[];

  constructor(private manageTabService: ManageTabsService) { }

  ngOnInit() {
    this.myTabs = [];
    this.getAllTabs();
  }

  getAllTabs(): void {    

    this.myTabs = [];
    chrome.tabs.query({}, (tabs) => {
      console.log("\n/////////////////////\n");
      
      tabs.forEach((tab) => {
        console.log(tab.url);
        
        this.myTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });
      });

      console.log('Number of tempTabs: ' + this.myTabs.length);
    });

  };
}
