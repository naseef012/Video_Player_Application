import {Video} from './../video';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos : Video[] = [
    {"_id":"1","title":"Title N","url":"url1","description":"hello description 1"},
    {"_id":"2","title":"Title B","url":"url2","description":"hello description 2"},
    {"_id":"3","title":"Title M","url":"url3","description":"hello description 3"},
    {"_id":"4","title":"Title P","url":"url4","description":"hello description 4"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
