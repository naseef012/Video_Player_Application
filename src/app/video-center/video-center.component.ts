import {Video} from './../video';
import { Component, OnInit } from '@angular/core';
import {VideoService} from "../video.service";

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit
{
  videos : Array<Video>;

  selectedVideo : Video;
  private hideNewVideo : boolean = true;

  constructor(private _videoService : VideoService)
  {

  }

  ngOnInit()
  {
    this._videoService.getVideos().subscribe(resVideoData => this.videos = resVideoData);
  }
  /*
    It is called in video-center component for listening to clicks in <video-list></video-list>
   */
  onSelectVideo(video:any)
  {
    this.selectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }

  onSubmitAddVideo(video:Video)
  {
    this._videoService.addVideo(video).
      subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hideNewVideo = true;
        this.selectedVideo = resNewVideo;
    });
  }

  newVideo()
  {
    this.hideNewVideo = false;
  }
}
