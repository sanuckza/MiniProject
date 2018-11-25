import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { EditorderPage } from '../editorder/editorder';


@Component({
  selector: 'order-home',
  templateUrl: 'order.html'
})
export class OrderPage {

  order : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public fdb:AngularFireDatabase) {
    this.order = fdb.list('/myorder')

  }

  deleteOrder(id){
    this.order.remove(id);
  }

  editOrder(id, table, ccake, mcake, amcoffee, escoffee, crfood){
    this.navCtrl.push(EditorderPage,{
      key : id,
      table : table,
      ccake : ccake,
      mcake : mcake,
      amcoffee : amcoffee,
      escoffee : escoffee,
      crfood : crfood
    });
  }

}
