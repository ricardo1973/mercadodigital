import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderPromotionComponent} from './modules/header-promotion/header-promotion.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderMobileComponent } from './modules/header-mobile/header-mobile.component';
import { NewletterComponent} from './modules/newletter/newletter.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductComponent } from './pages/product/product.component';
import { SearchComponent } from './pages/search/search.component';
import { Error404Component } from './pages/error404/error404.component';
import { HomeBannerComponent } from './pages/home/home-banner/home-banner.component';
import { HomeFeaturesComponent } from './pages/home/home-features/home-features.component';
import { HomePromotionsComponent } from './pages/home/home-promotions/home-promotions.component';
import { HomeHotTodayComponent } from './pages/home/home-hot-today/home-hot-today.component';
import { HomeTopCategoriesComponent } from './pages/home/home-top-categories/home-top-categories.component';
import { HomeShowcaseComponent } from './pages/home/home-showcase/home-showcase.component';
import { ProductsBreadcrumbComponent } from './pages/products-breadcrumb/products-breadcrumb.component';
import { BestSalesItemComponent } from './pages/products/best-sales-item/best-sales-item.component';
import { ProductsRecommendedComponent } from './pages/products/products-recommended/products-recommended.component';
import { ProductsShowcaseComponent } from './pages/products/products-showcase/products-showcase.component';
import { SearchBreadcrumbComponent } from './pages/search/search-breadcrumb/search-breadcrumb.component';
import { SearchShowcaseComponent } from './pages/search/search-showcase/search-showcase.component';
import { CallToActionComponent } from './pages/product/call-to-action/call-to-action.component';
import { ProductBreadcrumbComponent } from './pages/product/product-breadcrumb/product-breadcrumb.component';
import { ProductLeftComponent } from './pages/product/product-left/product-left.component';
import { ProductRightComponent } from './pages/product/product-right/product-right.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMobileComponent,
    HeaderPromotionComponent,
    NewletterComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    Error404Component,
    HomeBannerComponent,
    HomeFeaturesComponent,
    HomePromotionsComponent,
    HomeHotTodayComponent,
    HomeTopCategoriesComponent,
    HomeShowcaseComponent,
    ProductsBreadcrumbComponent,
    BestSalesItemComponent,
    ProductsRecommendedComponent,
    ProductsShowcaseComponent,
    SearchBreadcrumbComponent,
    SearchShowcaseComponent,
    CallToActionComponent,
    ProductBreadcrumbComponent,
    ProductLeftComponent,
    ProductRightComponent
    
    
    
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
