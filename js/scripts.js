 







$(document).on('dragover', 'body', function(e) {
	e.preventDefault();
    e.stopPropagation();
		
	if ($('body').find('.drag_drop_area').length < 1) {	
		$('body').find('main').append('<div class="drag_drop_area" style="width: 100%; height: 100%; display: block; position: absolute; z-index: 999; background: rgba(0, 0, 0, .0); text-align: center; font-size: 20px; font-weight: 600; text-align: center; border: 2px dashed; padding-top: 45vh;"></div>');
	} else {
		$('body').find('.drag_drop_area').show();
	}
	
});

$(document).on('dragleave', 'body', function(e) {
		
	e.preventDefault();
    e.stopPropagation();
	
	
});

$('body').on('drop', function(e) {
		
	e.preventDefault();
    e.stopPropagation();
	$('body').find('.drag_drop_area').hide();
});

$('body').on('click', '.toggler', function(event) {
	
	event.preventDefault();
	
	$('body').find('.ember-view').toggle();
		
});

document.addEventListener("DOMContentLoaded", function() {
	
	setTimeout(function(){

	  const tooltip = document.createElement("div");
	  tooltip.className = "tooltip";
	  document.body.appendChild(tooltip);

	  document.querySelectorAll("[data-tooltip]").forEach(elem => {
		elem.addEventListener("mouseenter", function() {
		  tooltip.textContent = this.dataset.tooltip;
		  const rect = this.getBoundingClientRect();
		  tooltip.style.left = rect.left + window.scrollX + "px";
		  tooltip.style.top = rect.bottom + window.scrollY + "px";
		  tooltip.style.display = "block";
		});

		elem.addEventListener("mouseleave", function() {
		  tooltip.style.display = "none";
		});
	  });

	},3000);
	
}); 
