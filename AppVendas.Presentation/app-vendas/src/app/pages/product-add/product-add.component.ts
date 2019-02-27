import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  isLoadingResults = false;
  productForm: FormGroup;
  name: string = '';
  description: string = '';
  price: number = null;
  update: Date = null;
  

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  onFormSubmit(form: NgForm){
    this.isLoadingResults = true;
    this.api.addProduct(form)
      .subscribe(res => {
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/product-details', id]);
      }, (error) => {
        console.log(error);
        this.isLoadingResults = false;
      });
  }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'price': [null, Validators.required]
    });
  }

}
