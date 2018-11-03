function createNotification($title,$content,$opacity){
	
	if ($title == null || $content == null) {
		return 0;
	}else if ($opacity === undefined) {
		$opacity = '0.9';
	}
	var area = document.getElementById('notification-area');
	var title = document.getElementById('title-notify');
	var content = document.getElementById("content-notify");
	
	title.innerHTML = $title;
	content.innerHTML = $content;
	$("#notification-area").fadeIn(1000);

	setTimeout(function () {
	$("#notification-area").fadeOut(1000);				
	}, 5000);
}