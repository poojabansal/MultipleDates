myDatesSchema = new SimpleSchema({
  event: {
    type: String,
    label: "Event Name"
  },
  date_one: {
    type: Date,
    label: 'One',
    autoform: {
      type: "bootstrap-datepicker",
      buttonClasses: "glyphicon glyphicon-calendar",
      placeholder: "Date 1"
    }
  },

  date_two: {
    type: Date,
    label: 'Two',
    autoform: {
      type: "bootstrap-datepicker",
      buttonClasses: "glyphicon glyphicon-calendar",
      placeholder: "Date 2"
    }
  },
})


Meteor.methods({
  'insertMyDates': function() {
    //do something
  }
})

if(Meteor.isClient) {
  Template.myDatesForm.rendered = function(){
    AutoForm.resetForm("myDatesForm")
  }
}