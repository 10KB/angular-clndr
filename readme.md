angular-clndr
=============

An angular directive for [CLNDR.js](http://kylestetz.github.io/CLNDR/). With this directive you can render the
CLNDR-template Angular-style.

Brought to you by [10KB](http://10kb.nl/).

## Demo

You can find a demo on the [homepage](http://angular-clndr.10kb.nl).

## Usage & configuration

For a complete documentation check the [homepage](http://angular-clndr.10kb.nl).

Directive usage:
```html
<tien-clndr tien-clndr-object="clndr" tien-clndr-events="events">
  <div class="clndr-controls">
    <div class="clndr-previous-button" ng-click="clndr.back()">
      &lsaquo;
    </div>
    <div class="month">
      {{month}}
    </div>
    <div class="clndr-next-button" ng-click="clndr.forward()">
      &rsaquo;
    </div>
  </div>
  <div class="clndr-grid">
    <div class="days-of-the-week">
      <div class="header-day" ng-repeat="day in daysOfTheWeek track by $index">
        {{day}}
      </div>
    </div>
    <div class="days">
      <div class="{{day.classes}}" ng-repeat="day in days">
        <div class="event-indicator" ng-show="day.events.length" ng-click="showEvents(day.events)">{{day.events.length}}</div>
        {{day.day}}
      </div>
    </div>
  </div>
</tien-clndr>
```

## License

angular-clndr is released under the [MIT license](http://10kb.mit-license.org/). 