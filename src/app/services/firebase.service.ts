import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MyTab } from '../MyTab';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getTabId(name){
    var tabId = name.toLowerCase();
    tabId = tabId.replace(" ","_");
    return tabId;
  }

  getTab(tabUrl){
    //return this.db.collection('tabs').doc(tabId).snapshotChanges();
    return this.db.collection('tabs', ref => ref.where('url', '==', tabUrl)).snapshotChanges();
  }

  createTab(tab: MyTab){
    return this.db.collection('tabs').add({
      title: tab.title,
      url: tab.url,
      favIconUrl: tab.favIconUrl,
      windowId: tab.windowId,
      tabIndex: tab.tabIndex,
      dateAdded: Date()
    });
  }

  getTabs(){
    return this.db.collection('tabs').snapshotChanges();
  }

  updateTab(tab: MyTab){
    tab.url = tab.url.toLowerCase();
    return this.db.collection('tabs').doc(tab.id).set(tab);
  }

  deleteTab(tab: MyTab){
    return this.db.collection('tabs').doc(tab.id).delete();
  }

  searchTabs(searchValue){
    return this.db.collection('tabs',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchTabsByName(value){
    return this.db.collection('tabs',ref => ref.orderBy('name').startAt(value)).snapshotChanges();
  }
}
