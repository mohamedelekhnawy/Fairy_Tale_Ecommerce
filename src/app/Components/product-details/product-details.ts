import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../Service/product-service';
import { CartService } from '../../Service/cart-service';
import { CommonModule } from '@angular/common';
import { ElmentScale } from '../../Directives/elment-scale';
import { FormsModule } from '@angular/forms';
import { Button1Style } from '../../Directives/button1-style';
import { Button2Style } from '../../Directives/button2-style';
@Component({
  selector: 'app-product-details',
  imports: [CommonModule,ElmentScale,FormsModule,Button1Style,Button2Style],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  // product!: Product | undefined;
  selectedImage: string | null = null;
  relatedProducts: any[] = [];

  @Input() product!: Product;
  @Input() allProducts: Product[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    public router:Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      const found = this.productService.getProductById(id);

      if (found) {
        this.product = found;
        this.selectedImage = this.product.images[0];
      }

      this.allProducts = this.productService.getProducts();

      if (this.product && this.allProducts.length > 0) {
        this.getRelatedProducts();
      }

      // بعد ما يغير المنتج → اعمل Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }




  getRelatedProducts() {
    this.relatedProducts = this.allProducts
      .filter((p: Product) => 
        p.material === this.product.material && p.id !== this.product.id
      )
      .slice(0, 4); 
  }
  goToDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

  addToCart(product?: Product) {
    if (!product) return;
    const item = { ...product, image: product.images[0], qty: 1 };
    this.cartService.addItem(item);
  }


}
