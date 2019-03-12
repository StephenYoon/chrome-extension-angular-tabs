import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { MyTab } from './MyTab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Tab Manager!';
  public myTabs: MyTab[];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.myTabs = [];
    
    // https://angular.io/api/core/NgZone
    this.zone.run(() => {
      this.getAllTabs();
    });
  }

  getAllTabs(): void {
    this.myTabs = [];

    // NOTE: chrome.tabs.query() executes outside of Angular and thus changes to models won't be detected
    //       and updated in the UI. Thus use this.zone.run() in ngOnInit().
    chrome.tabs.query({}, (tabs) => {
      console.log("\n/////////////////////\n");
      
      tabs.forEach((tab) => {
        console.log(tab.url);
        
        this.myTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl,
          windowId: tab.windowId,
          tabIndex: tab.index
        });
      });
        
      // this.changeDetectorRef.detectChanges();
      console.log('Number of tempTabs: ' + this.myTabs.length);
    });
  };

  selectTab(tabIndex: number): void {
    chrome.tabs.highlight({'tabs': tabIndex}, function() {});
  };
  
  onClickMe() {
    console.log('Update, number of tempTabs: ' + this.myTabs.length);
  };
}
