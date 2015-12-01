exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var dfd = $.Deferred();
    
    dfd.resolve(value);
    
    return dfd.promise();
  },

  manipulateRemoteData : function(url) {
    var dfd = $.Deferred();

    var ajax = $.ajax({
        url: url
      });
      
    ajax.done(function(resp) {
      var people = [];
      $.each(resp.people, function(index, obj){
        people.push(this.name);
      });
      
      dfd.resolve(people.sort());
    });

    return dfd.promise();  
  }
};
