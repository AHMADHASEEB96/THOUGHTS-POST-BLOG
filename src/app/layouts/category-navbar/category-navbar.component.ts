import { Component } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Category } from './../../core/interfaces/post-categories.interface';
@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrl: './category-navbar.component.css'
})
export class CategoryNavbarComponent {
  isSkeleton: boolean = true;
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe({
      next: (res) => {
        if (res) {
          this.categories = res
          this.isSkeleton = false;
        }
      }
    })
  }

}
