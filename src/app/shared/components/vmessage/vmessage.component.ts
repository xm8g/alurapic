import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vmessage',
  templateUrl: './vmessage.component.html',
  styleUrls: ['./vmessage.component.css']
})
export class VmessageComponent implements OnInit {

  @Input() text = ''; /*atributo da tag <app-vmessage>*/

  constructor() { }

  ngOnInit(): void {
  }

}
