import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat-components/chat/chat.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { HomeComponent } from './home-components/home/home.component';
import { AboutComponent } from './login-components/about/about.component';
import { LoginContainerComponent } from './login-components/login-container/login-container.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginContainerComponent,
  },
  {
    path: 'login',
    component: LoginContainerComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'group-creation',
    component: GroupCreationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
