import { Component, OnInit } from '@angular/core';
import { MyTab } from './MyTab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tab Manager!';
  myTabs = [];

  ngOnInit() {
    this.myTabs = [];
    this.getAllTabs(this.blah);
  }

  blah(tempTabs: MyTab[]): void {
    console.log('Number of tabs in blah(): ' + tempTabs.length);
    console.log('this.myTabs: ' + this.myTabs);
    this.myTabs = tempTabs;
  }

  getAllTabs(fn): void {
    chrome.tabs.query({}, function(tabs) {
      console.log("\n/////////////////////\n");
      
      let tempTabs: MyTab[];
      tempTabs = [];
      tabs.forEach(function(tab){
        console.log(tab.url);
        
        tempTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });
      });

      console.log('Number of tempTabs: ' + tempTabs.length);
      fn(tempTabs);
    });
  };
}
