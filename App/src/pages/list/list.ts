import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
//import { HomePage } from '../home/home';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  orderList : FirebaseListObservable<any>;
  
  constructor(public navCtrl: NavController, 
              public fdb : AngularFireDatabase) {

                this.orderList = fdb.list('/myorder')
    
    }
    createOrder(table,ccake,mcake,amcoffee,escoffee,crfood){
      this.orderList.push({
        table : table,
        ccake : ccake,
        mcake : mcake,
        amcoffee : amcoffee,
        escoffee : escoffee,
        crfood : crfood

      }).then(newOrder => {
        this.navCtrl.push(OrderPage)
      },error=>{console.log(error);});
      
    }
  }


