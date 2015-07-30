$( document ).ready(function() {
	
	var initialWidth = 637;
	var initialHeight = 480;	

	$('#buttonResize').click(function(){
		if(isVideoExpanded()){
  			//Reducir vídeo a tamaño normal
  			
  			//Oculto parte superior
  			$('.top').hide();
  			$('.up').hide();
  			//Oculto toolbar
  			$('#divToolBar').hide();
  			//Oculto columna de divs videos remotos
  			$('#divRemoteViewsParent').hide();
  			//Oculto video pequeño local
  			$('#divLocalVideoSmall').hide();
  			//Oculto escritorio compartido pequeño local
  			$('#divLocalScreenVideoSmall').hide();
  			//Oculto foot
  			$('.down').hide();
  			
  			//Amplio vídeo principal
  			var maxWidth = $(window).width();
  			var maxHeight = $(window).height();
  			var heightDivTitle = $('#divTitleVideoPanel').height();
  			var maxHeightVideo = maxHeight - heightDivTitle;
  			
  			$('#divVideoPanel').css('position','fixed');
  			$('#divVideoPanel').css('top','0');
  			$('#divVideoPanel').css('left','0');
  			$('#divVideoPanel').css('width',maxWidth);
  			$('#divVideoPanel').css('height',maxHeight); 			
  			
  			$('#divLocalVideo').css('position','fixed');
  			$('#divLocalVideo').css('top',heightDivTitle);
  			$('#divLocalVideo').css('left','0');
  			$('#divLocalVideo').css('width',maxWidth);
  			$('#divLocalVideo').css('height',maxHeightVideo);
  			
  			$('#localVideo').css('width',maxWidth);
  			$('#localVideo').css('height',maxHeightVideo);
  			
  			$('#divRemoteVideo').css('position','fixed');
  			$('#divRemoteVideo').css('top',heightDivTitle);
  			$('#divRemoteVideo').css('left','0');
  			$('#divRemoteVideo').css('width',maxWidth);
  			$('#divRemoteVideo').css('height',maxHeightVideo);
  			
  			$('#remoteVideo').css('width',maxWidth);
  			$('#remoteVideo').css('height',maxHeightVideo);
  			
  			$('#divTitleVideoPanel').css('width',maxWidth);
  			
  			//Cambio icono
  			$('.icon-resizeOut').attr('class','icon-resizeIn');
  			$('.icon-resizeIn').addClass('button-icon');
  		}else{
  			//Ampliar vídeo
  			
  			//Muestro parte superior
  			$('.top').show();
  			$('.up').show();
  			//Muestro toolbar
  			$('#divToolBar').show();
  			//Muestro columna de divs vídeos remotos
  			$('#divRemoteViewsParent').show();
  			//Muestro video pequeño local
  			$('#divLocalVideoSmall').show();
  			//Muestro escritorio compartido pequeño local
  			$('#divLocalScreenVideoSmall').show();
  			//Muestro foot
  			$('.down').show();
  			
  			//Reduzco vídeo principal
  			$('#divVideoPanel').css('position','absolute');
  			$('#divVideoPanel').css('top','0px');
  			$('#divVideoPanel').css('left','');
  			$('#divVideoPanel').css('width',initialWidth);
  			$('#divVideoPanel').css('height',initialHeight); 			
  			
  			$('#divLocalVideo').css('position','absolute');
  			$('#divLocalVideo').css('top','');
  			$('#divLocalVideo').css('left','');
  			$('#divLocalVideo').css('width',initialWidth);
  			$('#divLocalVideo').css('height',initialHeight);
  			
  			$('#localVideo').css('width',initialWidth);
  			$('#localVideo').css('height',initialHeight);
  			
  			$('#divRemoteVideo').css('position','absolute');
  			$('#divRemoteVideo').css('top','');
  			$('#divRemoteVideo').css('left','');
  			$('#divRemoteVideo').css('width',initialWidth);
  			$('#divRemoteVideo').css('height',initialHeight);
  			
  			$('#remoteVideo').css('width',initialWidth);
  			$('#remoteVideo').css('height',initialHeight);
  			
  			$('#divTitleVideoPanel').css('width',initialWidth);
  			
  			//Cambio icono
  			$('.icon-resizeIn').attr('class','icon-resizeOut');
  			$('.icon-resizeOut').addClass('button-icon');
  		}
	});
	
});

function isVideoExpanded(){
	var isExpanded = false;
	if($('#divToolBar').is(':visible') && $('#divRemoteViews').is(':visible')){
		isExpanded = true;
	}
	
	return isExpanded;
}
