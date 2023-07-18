import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutSidebarComponent } from './layout-sidebar/layout-sidebar.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroChartPieSolid,
  heroChatBubbleLeftRightSolid,
  heroListBulletSolid,
} from '@ng-icons/heroicons/solid';
import {
  heroUser,
  heroChartPie,
  heroChatBubbleLeftRight,
  heroListBullet,
  heroClock,
  heroEllipsisVertical,
} from '@ng-icons/heroicons/outline';
import { ChatComponent } from './chat/chat.component';
import { ProjectManagementComponent } from './project-management/project-management.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    DashboardComponent,
    LayoutSidebarComponent,
    ChatComponent,
    ProjectManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroChartPieSolid,
      heroChatBubbleLeftRightSolid,
      heroListBulletSolid,
      heroUser,
      heroChartPie,
      heroChatBubbleLeftRight,
      heroListBullet,
      heroClock,
      heroEllipsisVertical,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
