import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
  
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  /**
   * 
   * @param router ira fazer a navegação
   */

  constructor(private router: Router, private headerService: HeaderService) {

    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routerUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])    
    }

  
}
