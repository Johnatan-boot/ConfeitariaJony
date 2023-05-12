import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationComponent } from './components/pages/authentication/authentication.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeRoutingModule } from './components/pages/home/home-routing.module';
import { AuthenticationRoutingModule } from './components/pages/authentication/authentication-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { CarouselOneComponent } from './components/carousel-one/carousel-one.component';
import { CarouselTwoComponent } from './components/carousel-two/carousel-two.component';
import { VideoComponent } from './components/video/video.component';
import { ContainerPedidosComponent } from './components/container-pedidos/container-pedidos.component';
import { PerfilRoutingModule } from './components/pages/perfil/perfil-routing.module';
import { CarouselThreeComponent } from './components/carousel-three/carousel-three.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { CartSocialComponent } from './components/cart-social/cart-social.component';
import { ProductsRoutingModule } from './components/pages/products/products-routing.module';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CadastroUComponent } from './components/pages/cadastro-u/cadastro-u.component';
import { CadastroURoutingModule } from './components/pages/cadastro-u/cadastro-u-routing.module';
import { CartComponent } from './components/pages/cart/cart.component';
import { CartRoutingModule } from './components/pages/cart/cart-routing.module';
import { BolosTradcionaisComponent } from './components/pages/bolos-tradcionais/bolos-tradcionais.component';
import { BolosTradcionaisRoutingModule } from './components/pages/bolos-tradcionais/bolos-trad.routing.module';
import { BolosCoberturaComponent } from './components/pages/bolos-cobertura/bolos-cobertura.component';
import { BolosCoberturaRoutingModule } from './components/pages/bolos-cobertura/bolos-trad.routing.module';
import { BolosFestasComponent } from './components/pages/bolos-festas/bolos-festas.component';
import { BolosFestasRoutingModule } from './components/pages/bolos-festas/bolos-trad.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PerfilComponent,
    CarouselOneComponent,
    CarouselTwoComponent,
    VideoComponent,
    ContainerPedidosComponent,
    CarouselThreeComponent,
    ProductsComponent,
    CartSocialComponent,
    CardProductsComponent,
    CadastroUComponent,
    CartComponent,
    BolosTradcionaisComponent,
    BolosCoberturaComponent,
    BolosFestasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BolosFestasRoutingModule,
    BolosCoberturaRoutingModule,
    BolosTradcionaisRoutingModule,
    CartRoutingModule,
    CadastroURoutingModule,
    ProductsRoutingModule,
    PerfilRoutingModule,
    AuthenticationRoutingModule,
    HomeRoutingModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
