import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  order : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public fdb:AngularFireDatabase) {
    this.order = fdb.list('/myorder')

  }

}
