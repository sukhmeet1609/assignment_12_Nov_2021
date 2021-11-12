import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-products-listing',
  templateUrl: './products-listing.component.html',
  styleUrls: ['./products-listing.component.scss']
})
export class ProductsListingComponent implements OnInit {

  gridView: boolean = true;

  products = [];
  selectedOption = '1';
  displayProducts = [];

  constructor() { }

  ngOnInit(): void {
    this.populateProducts();
    this.displayProducts = [...this.products];
  }

  selectionChanged(event) {
    if (this.selectedOption === '1') {
      this.displayProducts = [...this.products]
    } else if (this.selectedOption === '2') {
      this.displayProducts = this.products.filter(item => item.price < 100);
    } else if (this.selectedOption === '3') {
      this.displayProducts = this.products.filter(item => item.price > 100);
    }
  }

  changeView(value) {
    this.gridView = value;
  }

  populateProducts() {
    this.products = [
      { name: 'Soap', price: 30 },
      { name: 'Tooth Brush', price: 20 },
      { name: 'Chips', price: 10 },
      { name: 'Book', price: 200 },
      { name: 'Cup', price: 150 },
      { name: 'Glass', price: 1000 },
      { name: 'Earbuds', price: 2000 },
      { name: 'Chocolate', price: 40 },
      { name: 'Charger', price: 500 },
      { name: 'Pin', price: 5 },
      { name: 'Toothpaste', price: 80 },
      { name: 'Kite', price: 5 },
      { name: 'Pipe', price: 800 },
      { name: 'Soft Drink', price: 35 },
      { name: 'Cake', price: 200 },
      { name: 'Lamp', price: 700 },
      { name: 'Pen', price: 20 },
      { name: 'Mask', price: 50 },
      { name: 'Namkeen', price: 10 },
      { name: 'Cell', price: 10 },
      { name: 'Diary', price: 150 },
      { name: 'Wire', price: 80 },
      { name: 'Extention', price: 200 },
      { name: 'Lights', price: 40 },
      { name: 'Sherbet', price: 333 },
      { name: 'Phone', price: 10000 },
      { name: 'Bucket', price: 180 },
      { name: 'Cookies', price: 20 },
      { name: 'Towel', price: 300 },
      { name: 'Mug', price: 100 },
      { name: 'Shirt', price: 1500 },
      { name: 'Jeans', price: 2000 },
      { name: 'Selfie Stick', price: 500 },
      { name: 'Lime water', price: 30 },
      { name: 'Juice', price: 20 },
      { name: 'Blanket', price: 700 },
      { name: 'Pillow', price: 200 },
      { name: 'Meggie', price: 12 },
      { name: 'Soup', price: 38 },
      { name: 'Pins', price: 30 },
      { name: 'Sheets', price: 10 }
    ]
  }

}
