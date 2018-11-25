import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'page-editorder',
  templateUrl: 'editorder.html'
})
export class EditorderPage {

    order : FirebaseListObservable<any>;

    myorder = {
        id : '',
        table : '',
        ccake : '',
        mcake : '',
        amcoffee : '',
        escoffee : '',
        crfood : ''
    }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fdb:AngularFireDatabase){

        this.order = fdb.list('/myorder');

        this.myorder.id = this.navParams.get('key')
        this.myorder.table = this.navParams.get('table')
        this.myorder.ccake = this.navParams.get('ccake')
        this.myorder.mcake = this.navParams.get('mcake')
        this.myorder.amcoffee = this.navParams.get('amcoffee')
        this.myorder.escoffee = this.navParams.get('escoffee')
        this.myorder.crfood = this.navParams.get('crfood')

  }

  updateOrder(_id,table,ccake,mcake,amcoffee,escoffee,crfood){

    this.order.update(this.myorder.id,
    {   
      table : this.myorder.table ,
      ccake : this.myorder.ccake ,
      mcake : this.myorder.mcake ,
      amcoffee : this.myorder.amcoffee ,
      escoffee : this.myorder.escoffee ,
      crfood : this.myorder.crfood 
    

    }).then(_uOrder => { this.navCtrl.pop();},error=>{console.log(error);})

  }



}
