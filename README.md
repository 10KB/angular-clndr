angular-clndr
=============

An angular directive for CLNDR.js

Example usage
=============

```html

<tien-clndr tien-clndr-object="clndr">
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
        {{day.day}}
      </div>
    </div>
  </div>
</tien-clndr>
