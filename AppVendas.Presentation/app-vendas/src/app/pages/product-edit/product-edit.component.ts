import { FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  _id:number = null;
  name:string='';
  description:string='';
  price:number=null;
  isLoadingResults = false;


  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  getProduct(id){
    this.api.getProduct(id).subscribe(data => {
      this._id = data.id;

      this.productForm.setValue({
        name: data.name,
        description: data.description,
        price: data.price
      })
    })
  }

  onFormSubmit(form:NgForm){
    this.isLoadingResults = true;
    this.api.updateProduct(this._id, form)
      .subscribe(res =>{
        let id = res['id'];
        this.isLoadingResults = false;
        this.router.navigate(['/product-details', id]);
      }, (error) => {
        console.log(error);
        this.isLoadingResults = false;
      })
  }

  productDetails(){
    this.router.navigate(['/product-details', this._id]);
  }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params['id']);
    this.productForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'description': [null, Validators.required],
      'price': [null, Validators.required]
    });
  }

}
