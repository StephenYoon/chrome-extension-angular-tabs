import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tab Manager!';
  tabURL = 'asdf';

  ngOnInit() {
    this.getAllTabs();
  }

  getAllTabs(): void {
    chrome.tabs.query({}, function(tabs) {
        this.tabURL = tabs[0].url;
        alert('Current tab:' + tabs[0].url + ', Number of tabs: ' + tabs.length);
    });
  };
}
