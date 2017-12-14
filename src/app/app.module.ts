import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

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
    VideoDetailComponent
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing:true} /*<--Debugging purposes only*/), BrowserModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
