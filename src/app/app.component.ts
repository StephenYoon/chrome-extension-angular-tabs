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
    this.getAllTabs();
    this.myTabs.push({
      title: 'tab.title', 
      url: 'tab.url',
      favIconUrl: 'tab.favIconUrl'
    })
  }

  getAllTabs(): void {    
    chrome.tabs.query({}, function(tabs) {
      // this.tabURL = tabs[0].url;
      // alert('Current tab:' + tabs[0].url + ', Number of tabs: ' + tabs.length);

      console.log("\n/////////////////////\n");
      tabs.forEach(function(tab){
        console.log(tab.url);
      });

      var tempTabs = [];
      alert('Number of tabs: ' + tabs.length + ', ' + tabs[0].title);

      for (let tab of tabs) {
        tempTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });

      }

      alert('Number of tempTabs: ' + tempTabs.length);
      this.myTabs = tempTabs;
      alert('Number of myTabs: ' + this.myTabs.length);
    });

  };
}
