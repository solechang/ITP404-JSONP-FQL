var script = document.createElement('script');
script.src = "https://graph.facebook.com/fql?q=SELECT+page_id,name,username,description,about,genre,fan_count,pic_cover,pic_square,page_url+FROM+page+WHERE+username='blackhippymusic'+OR+username='KendrickLamarmusic'+OR+username='SchoolboyQ'+OR+username='AbSoulmusic'+OR+username='jayrock'+ORDER+BY+fan_count&callback=myFunction";
document.getElementsByTagName('head')[0].appendChild(script);

function myFunction(data) {
	console.log(data);

	//Handlebars is a global object when using handlebars
	var templateString = document.getElementById('fb-page-template').innerHTML;
	var template = Handlebars.compile(templateString);
	var html = '';
	for(var i =0; i < data.data.length; i++ ) {
		html += template(data.data[i]);
	}
	document.getElementById('fb-page').innerHTML = html;
//	Handlebars.compile();
/*
	var p = "<p>" + data.name + "</p>";
	var likes = "<span>" + data.likes + "</span>";

	var html = p +  likes;
	*/
	
}

(function() {
	
	$('#fb-page').on('click', '.more-info', function() {
		console.log("Hi");
		$this = $(this);
		$this.next().slideToggle(300);
	});
})();