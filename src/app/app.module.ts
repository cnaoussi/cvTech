import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { Personne } from './model/Personne';
import { EmbaucheComponent } from './cvtech/embauche/embauche.component';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { LoginComponent } from './login/login.component';
import { StyleComponent } from './directive/style/style.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassComponent } from './directive/class/class.component';
import { HighlightDirective } from './directive/highlight.directive';
import { RainbowDirective } from './directive/rainbow.directive';
import { HttpComponent } from './http/http.component';
import { from } from 'rxjs';
import { AddCvComponent } from './add-cv/add-cv.component';
import { LoginGuardService } from './guard/login-guard.service';
import { SearchComponent } from './cvTech/search/search.component';




@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    LoginComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    HttpComponent,
    AddCvComponent,
    SearchComponent,
  
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [LoginGuardService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
