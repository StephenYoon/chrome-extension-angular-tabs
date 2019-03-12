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

  getTab(tabId){
    //return this.db.collection('tabs').doc(tabId).snapshotChanges();
    return this.db.collection('tabs', ref => ref.where('id', '==', tabId)).snapshotChanges();
  }

  updateTab(tabKey, tab){
    tab.url = tab.url.toLowerCase();
    return this.db.collection('tabs').doc(tabKey).set(tab);
  }

  deleteTab(tabId){
    return this.db.collection('tabs').doc(tabId).delete();
  }

  getTabs(){
    return this.db.collection('tabs').snapshotChanges();
  }

  searchTabs(searchValue){
    return this.db.collection('tabs',ref => ref.where('name', '>=', searchValue)
      .where('name', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchTabsByName(value){
    return this.db.collection('tabs',ref => ref.orderBy('name').startAt(value)).snapshotChanges();
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
}
