import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/products';
import { ProductService } from '../shared/product.service';



@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {
  protucts: any
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.protucts = this.productService.getProducts()

    const productsObservable = this.productService.getProducts()
    productsObservable.subscribe(
      (data) => { 
        this.protucts = data
        // console.log('次のデータが出力されました：' + data)
        // debugger
      },
      (err) => { console.error('次のエラーが発生しました：' + err) },
      () => { console.log('完了しました！') }


    )

    // const observable = new Observable(subscriber => {
    //   subscriber.next(1);
    //   subscriber.next(2);
    //   subscriber.complete();
    //   setTimeout(() => {
    //     subscriber.next(4);
    //     subscriber.complete();
    //   }, 1000);
    // });

    // //debugger
    // console.log('just before subscribe');
    // //debugger

    // observable.subscribe({
    //   next(data) { console.log('got value ' + data); },
    //   error(err) { console.error('something wrong occurred: ' + err); },
    //   complete() { console.log('done'); }
    // });
    // console.log('just after subscribe');


  }


}
