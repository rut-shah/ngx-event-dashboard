import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.css']
})
export class MessageComposeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emailBody: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum omnis molestias minus soluta iusto dignissimos et, nesciunt dolorem dolores aliquam possimus, aut placeat, repellendus corporis excepturi itaque dolore animi blanditiis.";

  recCollection = [];
  
  addToEmail (event) {
    this.emailBody = event.target.innerText;
  }

  addRecipient (event) {
    if(event.keyCode === 13) {
      let recList = (<HTMLTextAreaElement>document.getElementsByClassName('rec-list')[0]);
      this.recCollection.push(recList.value);
      recList.value = '';
    }
  }

  removeRecipient (event) {
    this.hideDialog();
    let index = this.recCollection.indexOf(event.toElement.previousElementSibling.innerHTML);
    this.recCollection.splice(index, 1);
  }

  displayDialog() {
    document.getElementsByClassName('message-compose-container')[0].classList.add('focus');
    (<HTMLDivElement>document.getElementsByClassName('rec-dialog')[0]).style.display = "block";
  }

  hideDialog() {
    document.getElementsByClassName('message-compose-container')[0].classList.remove('focus');
    (<HTMLDivElement>document.getElementsByClassName('rec-dialog')[0]).style.display = "none";
  }

}
