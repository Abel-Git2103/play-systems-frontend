import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home-components/home/home.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GroupListComponent } from './home-components/group-list/group-list.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { MessagesComponent } from './my-groups/chat/messages/messages.component';
import { ChatComponent } from './my-groups/chat/chat.component';
import { BuscarPipe } from './pipes/buscar.pipe';
import { GameExplorerComponent } from './home-components/game-explorer/game-explorer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    MyGroupsComponent,
    GroupListComponent,
    MessagesComponent,
    ChatComponent,
    GroupCreationComponent,
    ProfileComponent,
    BuscarPipe,
    GameExplorerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
