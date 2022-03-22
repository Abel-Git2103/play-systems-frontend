import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-components/login/login.component';
import { LoginFormComponent } from './login-components/login-form/login-form.component';
import { LoginAboutComponent } from './login-components/login-about/login-about.component';
import { RegisterComponent } from './register-components/register/register.component';
import { NavbarComponent } from './home-components/navbar/navbar.component';
import { HomeComponent } from './home-components/home/home.component';
import { JuegosComponent } from './home-components/juegos/juegos.component';
import { MyGroupsComponent } from './my-groups/my-groups.component';
import { GamesComponent } from './home-components/games/games.component';
import { GroupListComponent } from './home-components/group-list/group-list.component';
import { AboutComponent } from './login-components/about/about.component';
import { MessagesComponent } from './chat-components/messages/messages.component';
import { GroupExplorerComponent } from './home-components/group-explorer/group-explorer.component';
import { GameExplorerComponent } from './home-components/game-explorer/game-explorer.component';
import { ChatComponent } from './chat-components/chat/chat.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    LoginAboutComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    JuegosComponent,
    MyGroupsComponent,
    GamesComponent,
    GroupListComponent,
    AboutComponent,
    MessagesComponent,
    GroupExplorerComponent,
    GameExplorerComponent,
    ChatComponent,
    GroupCreationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
