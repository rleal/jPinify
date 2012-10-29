$(function() {
	var parentDiv = $('#pinList');
	//TODO elastic
	var nItems = 3;
	var margin = 20;
	var col_width = 220;
	var firstItemLeft = parentDiv.position().left;
	var firstItemTop = parentDiv.offset().top;
	
	var wall = new Array(nItems);
	
	for (var i=0;i<nItems;i++) {
		wall[i] = firstItemTop;
	}
	
	var min = function(a) { return Math.min.apply(null,a); };

	$('.pin').each(function(index, item) {
		
			$(item).find('img').load(function() { 
				var col = wall.indexOf(min(wall));
				$(item).css('top', wall[col]);
				$(item).css('left', col*col_width + firstItemLeft +margin*col -margin);
				
				parentDiv.height(Math.max.apply(null, wall));
				wall[col]+=$(item).height();
			});
	});
	
});