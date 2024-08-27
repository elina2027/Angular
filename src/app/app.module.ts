import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { PagesListComponent } from './front-page/pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { HomePageComponent } from './front-page/home-page/home-page.component';
import { AppMaterialModule } from './app.material';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MenusService } from './service/menus/menus.service';
import { PostsService } from './service/posts/posts.service';
import { FrontPageComponent } from './front-page/front-page.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    HomePageComponent,
    AppNavbarComponent,
    FrontPageComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [AfService, MenusService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
