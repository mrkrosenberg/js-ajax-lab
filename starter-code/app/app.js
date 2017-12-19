$(function() {
    console.log( "ready!" );

//create list items out of each book object

	
function listBooks(){
    var books = $.ajax('https://den-super-crud.herokuapp.com/books')
	  .done( function(data){
	  	// console.log(data.books);

//iterates through books and creates list items for each

	for (i = 0; i < data.books.length; i++) {
		$('<li></li>').text(data.books[i].title).appendTo($('#books'));
		$('<li></li>').text(data.books[i].author).appendTo($('#books'));
		$('<li></li>').text(data.books[i].releaseDate).appendTo($('#books'));
		$('<li></li>').html('<img src=' + data.books[i].image + '>').appendTo($('#books'));
	}
  });
}

listBooks();

//form submission

	 $("#new-book").on("submit", function(event){
   	 		event.preventDefault(); 
    		var title = $('input#book-title').val();
    		// console.log(title);	
    		var author = $('input#book-author').val();
    		// console.log(author);
    		var releaseDate = $('input#book-release-date').val();
    		// console.log(releaseDate);
    		var image = $('input#book-image').val();
    		// console.log(image);
    		var newBook = {
    			title: title,
    			author: author,
    			releaseDate: releaseDate,
    			image: image
    		};

//Posts newBook to server

    		$.ajax({
    			type: "POST",
    			url: "https://den-super-crud.herokuapp.com/books",
    			data: newBook,
    			dataType: "JSON"
    			});
            $('#books').empty();
            listBooks();
	});



});