import Ember from 'ember';

import startApp from '../../tests/helpers/start-app';
import { test } from 'ember-qunit';

var App;

module('Acceptance - Navbar', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('Load the demo page', function(assert) {
  visit('/navbar');

  andThen(function () {
    assert.ok(true, 'If this is passing, this page has no deprecation warnings');
  });
});
