var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	'article-one' : {
		title : 'Article One | Adarsh1303',
		heading : 'Article One',
		date : '9th October 2016',
		content : `
					<p>
	                    This is the content of my first article and I want to mention about Rava. I do not want to make her unhappy and I want her to be happy whenver I am there. If she is unhappy in presence of me then what is the use of me being there.
	                </p>
	                
	                <p>
	                    May be she is tense right now or may be something else is going in her mind. Or some kind of realisation she got it again. I hope she gets fine soon.
	                </p>
	                
	                <p>
	                    Just wait till tomorrow Rava, Varsha is coming tomorrow and you will be too happy to see her. I know you are bored Rava and you want to go home. I do not want you to get bored. I want to see that smiling Rava. I thought so many times to tell you about arrival of Varsha so that you smile and there is some excitement in your life but I am just waiting for that instantaneous response of yours when you see her. I am waiting for that and I hope everything goes successful.
	                </p>`
	},
	'article-two' : {
		title : 'Article Two | Adarsh1303',
		heading : 'Article Two',
		date : '9th October 2016',
		content : `
					<p>
                    This is the content of my second article and I want to again mention about Rava.
                
	                <p>
	                    She is sooo beautiful. When she is walking towards me and when I stare at her, that smile on her face with an expression of blush + little bit of showing anger to scare me not to see her and that hair which covers upper right corner of her forehead. 
	                </p>
	                
	                <p>
	                    That day she was too beautiful. That smile and that expression of feeling shy. Abaaahhhh I feel so lucky that I get that expression and no one else.
	                </p>`

	},
	'article-three' : {
		title : 'Article Three | Adarsh1303',
		heading : 'Article Three',
		date : '9th October 2016',
		content : `
					<p>
                    This is the content of my third article and I want to mention about Rava again. I do not know how the situation will be like after B.Tech. Life will test all of us. I just pray to God that I does not deviate my mind and I should not do anything stupid to spoil everything between us.
                	</p>
                
	                <p>
	                    She was very honest from her side and she told she does not want to continue because she also knows how the life will be after B Tech. I mean she knows it is very uncertain and very hard and sometimes very easy, life will be and she is also afraid that how will she cope up with me when life comes like that.
	                </p>
	                
	                <p>
	                    That is why she wanted to end. But it was me who convinced her and it was me who made her to believe that everything will go good. So now its my responsibility that I should not allow both of us to fail. Obviously I have to look on to me to not fail because I was the one who convinced but alongwith me since me and her are same, I have to look after her as well and support her full time and be like a cushion and never make her to believe that something is going wrong. Just make sure everything goes good.
	                </p>`
	}
};



function createTemplate(data){

	var title = data.title;
	var heading = data.heading;
	var date = data.date;
	var content = data.content;
	var htmlTemplate = `

	<html>
	    <head>
	        <title>
	            ${title}
	        </title>
	        <link href="/ui/style.css" rel="stylesheet" />
	        <meta name="viewport" content="width=device-width, intial-scale=1"/>
	    </head>
	    
	    <body>
	        <div class="container">
	            <div>
	                <a href="/"> Home </a>
	            </div>
	            <hr/>
	            
	            <h3>
	                ${heading}
	            </h3>
	            <div>
	                ${date}
	            </div>
	            <div>
	                ${content}
	            </div>
	        </div>
	    </body>
	</html>
	`;

	return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){

	var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
