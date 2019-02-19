import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProducts()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, error => {
        console.log(error);
        this.isLoadingResults = false;
      })
  }

}
