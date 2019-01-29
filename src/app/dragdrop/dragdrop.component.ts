import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [  
    'ITEM 1',  
    'ITEM 2',  
    'ITEM 3',  
    'ITEM 4',  
    'ITEM 5',  
    'ITEM 6',  
    'ITEM 7',  
  ];  
  
  drop(event: CdkDragDrop<string[]>) {  
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);  
  }  
}
