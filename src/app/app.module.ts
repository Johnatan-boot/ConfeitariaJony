import { SidebarComponent } from './components/sidebar/components/sidebar-component';
import { EstoqueRoutingModule } from './components/pages/estoque/estoque-routing.module';
import { ProductsRoutingModule } from './components/products/products-routing.module';
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
import { CartSocialComponent } from './components/cart-social/cart-social.component';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { CadastroUComponent } from './components/pages/cadastro-u/cadastro-u.component';
import { CadastroURoutingModule } from './components/pages/cadastro-u/cadastro-u-routing.module';
import { AdminRoutingModule } from './components/pages/admin/admin-routing.module';

import { BolosTradcionaisComponent } from './components/pages/bolos-tradcionais/bolos-tradcionais.component';
import { BolosTradcionaisRoutingModule } from './components/pages/bolos-tradcionais/bolos-trad.routing.module';
import { BolosCoberturaComponent } from './components/pages/bolos-cobertura/bolos-cobertura.component';
import { BolosCoberturaRoutingModule } from './components/pages/bolos-cobertura/bolos-trad.routing.module';
import { BolosFestasComponent } from './components/pages/bolos-festas/bolos-festas.component';
import { BolosFestasRoutingModule } from './components/pages/bolos-festas/bolos-trad.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared';
import { HeaderComponent } from './components/header';
import { ProductsComponent } from './components/products';
import { CartRoutingModule } from './components/cart/cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutPaymentComponent } from './components/pages/checkout-payment/checkout-payment.component';
import { CheckoutPaymentRoutingModule } from './components/pages/checkout-payment/checkout-payment.module';
import { TableEstoqueComponent } from './components/table-estoque/table-estoque.component';
import { EstoqueComponent } from './components/pages/estoque/estoque.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { UsuariosComponent } from './components/pages/usuarios/usuarios.component';
import { UsuariosRoutingModule } from './components/pages/usuarios/usuarios-routing.module';
import { AdminGuard } from './services/auth/admin-guard.service';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FilterPipe,
    ProductsComponent,
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
    CartSocialComponent,
    CardProductsComponent,
    CadastroUComponent,
    CartComponent,
    BolosTradcionaisComponent,
    BolosCoberturaComponent,
    BolosFestasComponent,
    CheckoutPaymentComponent,
    TableEstoqueComponent,
    EstoqueComponent,
    AdminComponent,
    UsuariosComponent,
    ],
  imports: [
    BrowserModule,
    NgModule,
    ChartModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
    AdminRoutingModule,
    EstoqueRoutingModule,
    CheckoutPaymentRoutingModule,
    BolosFestasRoutingModule,
    BolosCoberturaRoutingModule,
    BolosTradcionaisRoutingModule,
    ProductsRoutingModule,
    CartRoutingModule,
    CadastroURoutingModule,
    PerfilRoutingModule,
    AuthenticationRoutingModule,
    HomeRoutingModule,
    AppRoutingModule,
    NgbModule

  ],
  //providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
