import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
      <div class="container">
        <h1>Welcome to My Angular App!</h1>
      </div>
    `,
    styles: [`
      .container {
        text-align: center;
        margin-top: 100px;
      }
    `]
  })

export class HomeComponent { }