import { Component, OnInit, NgZone, ApplicationRef } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { MyTab } from './MyTab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Tab Manager!';
  public myTabs: MyTab[];
  public mySavedTabs: MyTab[];

  constructor(
    public firebaseService: FirebaseService,
    private zone: NgZone
  ) { }

  ngOnInit() {
    this.myTabs = [];
    this.mySavedTabs = [];

    this.getSavedTabs();

    // https://angular.io/api/core/NgZone
    this.zone.run(() => {
      this.getAllTabs();
    });
  }

  getSavedTabs(): void {
    this.firebaseService.getTabs().subscribe(data => {
      this.mySavedTabs = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as MyTab;
      })
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
          id: null,
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
  }

  selectTab(tabIndex: number): void {
    chrome.tabs.highlight({'tabs': tabIndex}, function() {});
  }
  
  onClickMe() {
    console.log('Update, number of tempTabs: ' + this.myTabs.length);
  }

  saveTab(myTab: MyTab): void {
    // save tab if not found in firebase
    let foundSavedIndex = this.mySavedTabs.findIndex(tab =>  tab.url == myTab.url);
    if (foundSavedIndex < 0){
      this.firebaseService.createTab(myTab)
      .then((response) => {
        console.log('Saved: ' + myTab);
        }      
      );
    }
  }

  deleteTab(myTab: MyTab): void {
    // delete tab if found in saved list from firebase
    let foundSavedIndex = this.mySavedTabs.findIndex(tab =>  tab.url == myTab.url);
    if (foundSavedIndex >= 0){
      this.firebaseService.deleteTab(myTab)
      .then((response) => {
        console.log('Deleted: ' + myTab);
        }      
      );
    }
  }

  isTabSaved(myTab: MyTab): boolean {
    let foundSavedIndex = this.mySavedTabs.findIndex(tab =>  tab.url == myTab.url);
    return foundSavedIndex >= 0;
  }
}
