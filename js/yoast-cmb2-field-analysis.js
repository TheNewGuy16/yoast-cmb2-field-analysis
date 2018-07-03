(function($) {
  $(function() {
    YoastCMB2FieldAnalysis = function() {
      YoastSEO.app.registerPlugin('YoastCMB2FieldAnalysis', {status: 'ready'});
      YoastSEO.app.registerModification(
        'content',
        this.addCMB2FieldsToContent,
        'YoastCMB2FieldAnalysis'
      );

      $('#post-body').find(
        'input[yoast-analysis=1]:not(".cmb2-upload-file-id"), textarea[yoast-analysis=1],textarea.yoast-analysis'
      ).on('keyup paste cut click', function() {
        YoastSEO.app.pluginReloaded('YoastCMB2FieldAnalysis');
      });
    };

    YoastCMB2FieldAnalysis.prototype.addCMB2FieldsToContent = function(data) {
	  tinyMCE.triggerSave();
	  var cmb2_content = '';
      $('#post-body').find(
        'input[yoast-analysis=1]:not(".cmb2-upload-file-id"), textarea[yoast-analysis=1],textarea.yoast-analysis'
      ).each(function() { 
		  if( $(this).val() ){
			  cmb2_content += ' ';
			  if( $(this).attr('yoast-analysis-before')){ cmb2_content += $(this).attr('yoast-analysis-before'); }
			  if( $(this).hasClass('cmb2-upload-file') ){
				  cmb2_content += '<img src="' + $(this).parent().find('.img-status img').attr('src') + '" alt="' + $(this).parent().find('.img-status img').attr('alt') + '" />';
			  }
			  else{
				cmb2_content += $(this).val();  
			  }
			  if( $(this).attr('yoast-analysis-after') ){ cmb2_content += $(this).attr('yoast-analysis-after'); }
		  }
	  });
      return data + cmb2_content;
	};

    new YoastCMB2FieldAnalysis();
	  
  });
})(jQuery);
