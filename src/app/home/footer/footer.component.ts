import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() inp:any;
  @Output() out:any = new EventEmitter();
  ngOnInit(){  
    this.out.emit(this.inp)
  }

}
