/* 
Copyright 2012 DesignedByDash.com | License required for use.
*/
(function($) {
	
	var smoothieFilter = function(element, options, total) {
		
		var defaults = $.extend({}, $.fn.smoothiefilter.defaults, options);

		var $mainElement = $('#filterSection');
		var $menuElement = $('#filterSection_menu');
		var $param = 'all';
		var $active = false;
		var $faddedElems = 0;
		var $totalElems = 0;
		
		$totalElems = $mainElement.find('div.filterable').length;
		
		var filter = function() {
			
			$faddedElems = 0;
			
			$menuElement.find('li a').each(function(index, element) {
				
				var elem = $(this);
                if(elem.data('filter') == $param) {
					elem.addClass('active');	
				} else {
					if(elem.hasClass('active')) {
						elem.removeClass('active');
					}
				}
            });
			
			$mainElement.find('div.filterable').fadeOut(defaults.animTime, function() {
				
				$faddedElems++;
				
				if($faddedElems == $totalElems) {
					if($param == '') {
						$param = 'filterable';
					}
				
					$mainElement.find('div.' + $param).fadeIn(defaults.animTime, function() {
						$active = false;	
					});
				}
			});
				
		}
		
		$menuElement.find('li a').bind({
			click: function() {
				
				if(!$active && $(this).data('filter') != $param) {
					$param = $(this).data('filter');
					$active = true;
					
					filter();
				}
			}
		});
		
		
	}
	
	$.fn.smoothiefilter = function(options) {
		var sf = new smoothieFilter(this, options);
	}
	
	$.fn.smoothiefilter.defaults = {
		animTime: 1000	
	};
	
})(jQuery);

$(document).ready(function(e) {
    $(document).smoothiefilter();
});