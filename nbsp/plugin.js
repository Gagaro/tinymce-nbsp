/** https://github.com/Gagaro/tinymce-nbsp */
(function(){

tinymce.PluginManager.add('nbsp', function(editor, url) {
    editor.addShortcut('ctrl+shift+32', 'Insert non-breakable space.', function(){
        editor.insertContent('&nbsp;');
    });
});

}());