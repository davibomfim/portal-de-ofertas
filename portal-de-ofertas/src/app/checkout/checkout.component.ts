import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCardValidators } from 'angular-cc-library';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  oferta: any;
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.queryParams.subscribe(params => 
        this.oferta = params);
     }

  ngOnInit(): void {
    this.form = this.fb.group({
      creditCard: ['', [Validators.required, CreditCardValidators.validateCCNumber]],
      name: ['', [Validators.required]],
      expirationDate: ['', [Validators.required, CreditCardValidators.validateExpDate]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]] 
    });
  }

  onSubmit() {
    this.submitted = true;
  }

}
