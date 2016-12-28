$(function() {

  // your code will go here

  $.ajax({
  	url: 'https://www.codeschool.com/users/icean.json',
  	dataType: 'jsonp',
  	success: function(response){
  		//response does stuff
  		addCourses(response.courses.completed);
  	}
  });
  function addCourses(courses) {
  	var $badges = $('#badges');

  	courses.forEach(function(course) {
  		var $course = $('<div />', {'class': 'course'}).appendTo($badges);

  		$('<h3 />', {'text': course.title}).appendTo($course);
  		$('<img />', {'src': course.badge}).appendTo($course);
  		$('<a />', {
  			'href': course.url,
  			'target': '_blank',
  			'text': 'See Course',
  			'class': 'btn btn-primary'
  		}).appendTo($course);
  	});
  }

});
