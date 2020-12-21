// Generated by CoffeeScript 1.12.7
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Sounder.Collections.Tracks = (function(superClass) {
    extend(Tracks, superClass);

    function Tracks() {
      return Tracks.__super__.constructor.apply(this, arguments);
    }

    Tracks.prototype.model = Sounder.Models.Track;

    Tracks.prototype.fetch = function(options) {
      var data;
      options || (options = {});
      data = options.data || {};
      return Backbone.Collection.prototype.fetch.call(this, options);
    };

    return Tracks;

  })(Backbone.Collection);

}).call(this);
