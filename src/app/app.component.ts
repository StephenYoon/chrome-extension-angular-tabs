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
    this.getAllTabs(this.somehowGetTabInfo);
  }

  somehowGetTabInfo(tempTabs: []): void {
    console.log('Number of tabs in blah(): ' + tempTabs.length);
    console.log('this.myTabs: ' + this.myTabs); // <-- this doesn't work, this.myTabs is undefined
    this.myTabs = tempTabs; // <-- this doesn't work, this.myTabs is undefined
  }

  getAllTabs(customFunction): void {
    chrome.tabs.query({}, function(tabs) {
      console.log("\n/////////////////////\n");
      
      //let tempTabs: MyTab[];
      let tempTabs = [];
      tabs.forEach(function(tab){
        console.log(tab.url);
        
        tempTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });
      });

      console.log('Number of tempTabs: ' + tempTabs.length);
      customFunction(tempTabs);
    });
  };
}
