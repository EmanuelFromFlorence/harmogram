// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sounder.Views.Controls = (function(superClass) {
    extend(Controls, superClass);

    function Controls() {
      return Controls.__super__.constructor.apply(this, arguments);
    }

    Controls.prototype.template = JST['controls'];

    Controls.prototype.el = "#controls";

    Controls.prototype.events = {
      'change [data-control-method]': 'handleRange',
      'click [data-control-switch]': 'handleSwitch',
      'click #control-fullscreen': 'toggleFullScreen',
      'click #control-centered': 'toggleCentered'
    };

    Controls.prototype.initialize = function(src) {
      this.render();
      this.isFullScreen = false;
      return this.isCentered = false;
    };

    Controls.prototype.handleRange = function(e) {
      var attr, val;
      attr = $(e.currentTarget).data('control-method');
      val = e.currentTarget.valueAsNumber;
      if (attr === 'baseAngle') {
        val = val / 100;
      }
      if (attr === 'colorAmp') {
        val = val / 100;
      }
      if (attr === 'changeAngleSpeed') {
        val = val / 10000;
      }
      e.currentTarget.dataset.controlMethodValue = val;
      return Sounder.renderer[attr] = val;
    };

    Controls.prototype.handleSwitch = function(e) {
      var attr;
      e.preventDefault();
      attr = $(e.currentTarget).data('control-switch');
      if (Sounder.renderer[attr]) {
        Sounder.renderer[attr] = false;
        return this["switch"](e.currentTarget, false);
      } else if (!Sounder.renderer[attr]) {
        Sounder.renderer[attr] = true;
        return this["switch"](e.currentTarget, true);
      }
    };

    Controls.prototype.toggleFullScreen = function(e) {
      var el;
      e.preventDefault();
      el = $(document.body).parent();
      if (this.isFullScreen) {
        document.webkitCancelFullScreen();
        this.$(e.currentTarget).parent().removeClass('controls--active');
        this.isFullScreen = false;
        Sounder.renderer.updatePos();
        return true;
      }
      el[0].webkitRequestFullScreen();
      this.$(e.currentTarget).parent().toggleClass('controls--active');
      this.isFullScreen = true;
      return Sounder.renderer.updatePos();
    };

    Controls.prototype.toggleCentered = function(e) {
      e.preventDefault();
      if (this.isCentered) {
        this.$(e.currentTarget).parent().removeClass('controls--active');
        this.isCentered = false;
        Sounder.renderer.xOffset = 1.5;
        Sounder.renderer.updatePos();
        return true;
      }
      this.$(e.currentTarget).parent().toggleClass('controls--active');
      Sounder.renderer.xOffset = 2;
      this.isCentered = true;
      return Sounder.renderer.updatePos();
    };

    Controls.prototype["switch"] = function(el, truth) {
      if (truth == null) {
        truth = true;
      }
      if (truth) {
        return $(el).parent().addClass('controls--active');
      } else if (!truth) {
        return $(el).parent().removeClass('controls--active');
      }
    };

    Controls.prototype.render = function() {
      this.$el.html(this.template());
      return this.resetInputs();
    };

    Controls.prototype.resetInputs = function() {
      var attr, checker, checkers, i, j, len, len1, range, ranges, results, val;
      ranges = this.$('input[type="range"]');
      checkers = this.$('input[type="checkbox"]');
      for (i = 0, len = ranges.length; i < len; i++) {
        range = ranges[i];
        attr = range.dataset.controlMethod;
        val = Sounder.renderer[attr];
        range.dataset.controlMethodValue = val;
        range.value = val;
      }
      results = [];
      for (j = 0, len1 = checkers.length; j < len1; j++) {
        checker = checkers[j];
        attr = checker.dataset.controlSwitch;
        val = Sounder.renderer[attr];
        if (val === true) {
          results.push($(checker).parent().addClass('controls--active'));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    return Controls;

  })(Backbone.View);

}).call(this);
