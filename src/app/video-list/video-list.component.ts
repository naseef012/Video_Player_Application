import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-list',//changed from 'app-video-detail'
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos']
})
export class VideoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
