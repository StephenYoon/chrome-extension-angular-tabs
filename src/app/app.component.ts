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
    
    this.zone.run(() => {
      this.getAllTabs();
    });
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
        
      // this.changeDetectorRef.detectChanges();
      console.log('Number of tempTabs: ' + this.myTabs.length);
    });
  };
  
  onClickMe() {
    console.log('Update, number of tempTabs: ' + this.myTabs.length);
  };
}
