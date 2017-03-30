import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'pages',
  template: `
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-main clearfix">
        <div class="al-copy">ng2-admin provided by &copy; <a href="http://akveo.com">Akveo</a> 2016</div>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
export class Pages {}
