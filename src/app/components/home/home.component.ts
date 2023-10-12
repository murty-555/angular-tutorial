import { Component } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public concepts = [
    {
      title: 'interpolation',
      routelink: '/interpolation'
    },
    {
      title: 'class binding',
      routelink: '/class-binding'
    },
    {
      title: 'property binding',
      routelink: '/property-binding'
    },
    {
      title: 'style binding',
      routelink: '/style-binding'
    },
    {
      title: 'event binding',
      routelink: '/event-binding'
    },
    {
      title: 'two way data binding',
      routelink: '/twd-binding'
    },
    {
      title: 'if directive',
      routelink: '/if'
    },
    {
      title: 'for directive',
      routelink: '/for'
    },
    {
      title: 'switch directive',
      routelink: '/switch'
    },
    {
      title: 'template reference variable',
      routelink: '/tmpRefVar'
    },
    {
      title: 'component communication',
      routelink: '/compCom'
    },
    {
      title: 'pipes',
      routelink: '/pipes'
    },
    {
      title: 'mobiles',
      routelink: '/mobiles'
    },
    {
      title: 'angular forms',
      routelink: '/forms'
    },
  ]

}
