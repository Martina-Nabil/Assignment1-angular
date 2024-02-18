import { Component, ElementRef, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private elementRef: ElementRef) {}

ngOnInit() {
    const navElement = $(this.elementRef.nativeElement).find('nav');
    const navHeight = navElement.offset().top;

    $(window).scroll(() => {
      if ($(window).scrollTop() > navHeight) {
        navElement.addClass('scrolled');
      } else {
        navElement.removeClass('scrolled');
      }
    });
  }
}
