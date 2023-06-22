import { Component, OnInit } from '@angular/core';
import { CartPandaService } from 'src/app/services/checkout/cart-panda.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css'],
  template: `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let product of products">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  `
})

export class CheckoutPaymentComponent implements OnInit {

  products!: any[];


  constructor(private cartpandaService: CartPandaService) {}

  ngOnInit():void{
    //this.loadStripe();
  }

  /*loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}


pay(amount: number) {

  var handler = (<any>window).StripeCheckout.configure({
    //key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
    key: '6VwnxU03pznr0MoEnbh49vWraqeaDqhYf2pbBEz1JoFOmMrbMPk4oqNAc3Pi',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('Token Created!!');
    }
  });

  handler.open({
    name: 'Demo Site',
    description: '2 widgets',
    amount: amount * 100
  });

}*/

}
