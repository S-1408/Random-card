import { Component, OnInit, Input } from '@angular/core';
import {
  faEnvelope,
faPhone,
faMapMarkedAlt,
faDatabase,
faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  user: any;

faEnvelope  = faEnvelope;
faPhone     = faPhone;
faMapMarkerAlt = faMapMarkerAlt;
faDatabase  = faDatabase;
  constructor() { }

  ngOnInit(): void {
  }

}
