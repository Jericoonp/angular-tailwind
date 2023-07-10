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
  heroBars3Solid,
} from '@ng-icons/heroicons/solid';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AuthComponent,
    DashboardComponent,
    LayoutSidebarComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({
      heroChartPieSolid,
      heroChatBubbleLeftRightSolid,
      heroListBulletSolid,
      heroBars3Solid,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
