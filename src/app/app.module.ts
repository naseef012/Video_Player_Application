import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SafePipe } from './safe.pipe';

const routes : Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'videos',component: VideoCenterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoCenterComponent,
    VideoListComponent,
    VideoDetailComponent,
    SafePipe
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing:true} /*<--Debugging purposes only*/),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
