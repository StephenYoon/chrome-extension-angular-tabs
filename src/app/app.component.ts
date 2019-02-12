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
    this.myTabs = this.getAllTabs(this.myTabs);
    this.myTabs.push({
      title: 'tab.title', 
      url: 'tab.url',
      favIconUrl: 'tab.favIconUrl'
    })
  }

  getAllTabs(myTabs): any[] {    
    var tempTabs = [];

    chrome.tabs.query({}, function(tabs) {
      console.log("\n/////////////////////\n");
      
      tabs.forEach(function(tab){
        console.log(tab.url);
        
        tempTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });
        
        myTabs.push({
          title: tab.title, 
          url: tab.url,
          favIconUrl: tab.favIconUrl
        });
      });

      alert('Number of tabs: ' + tabs.length + ', ' + tabs[0].title);

      alert('Number of tempTabs: ' + tempTabs.length);
      
      alert('Number of myTabs: ' + myTabs.length);

    });

    alert('Final number of tempTabs: ' + tempTabs.length);
    return tempTabs;
  };
}
