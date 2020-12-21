// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sounder.Views.Channel = (function(superClass) {
    extend(Channel, superClass);

    function Channel() {
      return Channel.__super__.constructor.apply(this, arguments);
    }

    Channel.prototype.template = JST['channel'];

    Channel.prototype.className = 'channel__model';

    Channel.prototype.initialize = function(arg) {
      this.model = arg.model;
      this.parent = arg.parent;
      return this.render();
    };

    Channel.prototype.render = function() {
      this.$el.html(this.template({
        model: this.model
      }));
      this.$el.on('click', (function(_this) {
        return function(e) {
          return _this.changeChannel(e);
        };
      })(this));
      return this;
    };

    Channel.prototype.changeChannel = function(e) {
      this.parent.currentChannel = this.model.get('name');
      return this.parent.changeChannel(this.model.get('channel_url'), this.$el);
    };

    return Channel;

  })(Backbone.View);

}).call(this);
