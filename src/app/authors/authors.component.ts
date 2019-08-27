import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  // array of authors from authors service
  authors;

  constructor(service: AuthorsService) {
    // initialize authors
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
