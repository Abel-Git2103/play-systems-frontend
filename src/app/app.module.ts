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
import { MessagesComponent } from './chat-components/messages/messages.component';
import { GameExplorerComponent } from './home-components/game-explorer/game-explorer.component';
import { ChatComponent } from './chat-components/chat/chat.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { BuscarPipe } from './pipes/buscar.pipe';

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
    GameExplorerComponent,
    ChatComponent,
    GroupCreationComponent,
    ProfileComponent,
    BuscarPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
