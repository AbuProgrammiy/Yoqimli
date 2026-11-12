import { Component, computed, signal } from '@angular/core';
import { allCategory, categories, menuProducts, popularProducts } from './menu-data';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly categories = categories;
  readonly popularProducts = popularProducts;
  readonly selectedCategory = signal(allCategory);
  readonly menuOpen = signal(false);
  readonly visibleProducts = computed(() => {
    const category = this.selectedCategory();
    return category === allCategory ? menuProducts : menuProducts.filter((product) => product.category === category);
  });

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
