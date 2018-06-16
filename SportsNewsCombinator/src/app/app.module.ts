
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/**Definimos nuestro root Component */
import { AppComponent } from './app.component';
import { NewsComponent } from './dashboard/news/news.component';
import { HeaderComponent} from './core/header/header.component';
import { FooterComponent} from './core/footer/footer.component'

@NgModule({
  /**Parte de declaraciones: Componentes que son parte de este modulo */
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent
  ],
  /**Seccion Imports: Modulos externos los cuales son importados */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  /**Seccion Proveedores: Contiene referencias a los servicios */
  providers: [],
  /**Definimos el componente startup */
  bootstrap: [AppComponent]
})
export class AppModule { }
