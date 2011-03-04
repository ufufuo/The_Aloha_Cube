<!DOCTYPE html>
<html lang="en-US" id="aloha-cube">
<head>
	<!-- Meta -->
	<meta http-equiv=content-type content='text/html; charset=utf-8' />
	<meta http-equiv="author" content="Daniel Scherrer (http://twitter.com/ufufuo)" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>The Aloha Cube</title>

	<!-- Dependencies -->
	<script src="vendor/jquery-1.5.1.min.js"></script>
	<script src="vendor/jquery-ui-1.8.9.custom.min.js"></script>
	<script src="vendor/jquery.color.js"></script>
	<script src="vendor/amplify/core/amplify.core.js"></script>
	<script src="vendor/amplify/store/amplify.store.js"></script>

	<!-- Aloha Editor: Compiled Development Version -->
	<script>GENTICS_Aloha_base = document.location.href.replace(/^\//,'') + "/vendor/aloha/";</script>
	<script src="vendor/aloha/aloha.js"></script>

	<!-- Aloha Editor PLugins -->
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Format/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Table/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.List/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Link/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Ribbon/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.HighlightEditables/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Media/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.DragAndDropFiles/plugin.js"></script>
	<script src="vendor/aloha/plugins/com.gentics.aloha.plugins.Image/plugin.js"></script>

	<!-- Demo: Stylesheet -->
	<link rel="stylesheet" type="text/css" href="css/cube.css" />
</head>
<body id="chbg">
	http://www.gravatar.com/avatar/<?php echo md5(strtolower(trim("gernot.bernkopf@netural.com")));?>.jpg
<div id="twitterbar">
<p><a href="http://haymo.org"><img src="http://www.gravatar.com/avatar/7f3f1e000b09a2314b5261de53de0733.jpg" /><br />Haymo Meran</a></p>
<p><a href="http://twitter.com/blacktarmac"><img src="http://www.gravatar.com/avatar/c84901471a3d6c401c37239dda64c6ff.jpg" /><br />Clemens Prerovsky</a></p>
<p><a href="http://twitter.com/balupton"><img src="http://www.gravatar.com/avatar/cc4c27bbac18afe33fdce155758d854d.jpg" /><br />Benjamin Lupton</a></p>
<p><a href="http://twitter.com/nka_11"><img src="http://www.gravatar.com/avatar/d8c4dff393bc79059becdd9194df912d.jpg" /><br />Nicolas Karageuzian</a></p>
<p><a href="http://gentics.com"><img src="http://www.gravatar.com/avatar/dbc8cd8da5024eba7ffc2f5713e833f7.jpg" /><br />Tobias Steiner </a></p>
<p><a href="http://www.jotschi.de"><img src="http://www.gravatar.com/avatar/9085551c61f6ce3381f4a20fef542833.jpg" /><br />Johannes Schüth</a></p>
<p><a href="http://twitter.com/taoma_k"><img src="http://www.gravatar.com/avatar/e1b92304c583f1f746c3e85f389a8b81.png" /><br />Thomas Lété</a></p>
<p><a href="http://www.reaklab.com"><img src="http://www.gravatar.com/avatar/ba0551674de01922abdb4724831e66bb.jpg" /><br />Romain Carlier</a></p>
<p><a href="http://twitter.com/rene_kapusta"><img src="http://www.gravatar.com/avatar/1b9509152c6e76062860a80bdfa02529.jpg" /><br />Rene Kapusta</a></p>
<p><a href="http://petrosalema.com"><img src="http://www.gravatar.com/avatar/2087327e79d09b56ce8572e6f363abff.jpg" /><br />Petro Salema</a></p>
<p><a href="http://bergie.iki.fi"><img src="http://nemein.com/en/midcom-serveattachmentguid-1df22b90b65b14422b911df835f25030ee37b967b96/thumbnail_bergie_haydarpasa3.jpg" /><br />Henri Bergius</a></p>
<p><a href="http://twitter.com/webcms"><img src="http://www.gravatar.com/avatar/7f3f1e000b09a2314b5261de53de0733.jpg" /><br />Klaus-M. Schremser</a></p>
<p><a href="http://twitter.com/medenhofer"><img src="http://www.gravatar.com/avatar/986577dceaa4a3a534b0832b8c2c4471.jpg" /><br />Martin Edenhofer</a></p>
<p><a href="http://twitter.com/rworth"><img src="http://www.gravatar.com/avatar/d92ea7772f465256ad836de1ce642b37.jpg" /><br />Richard D. Worth</a></p>
<p><a href="http://twitter.com/hlubek"><img src="http://www.gravatar.com/avatar/2a244c5ed94d92d288444604360a919a.jpg" /><br />Christopher Hlubek</a></p>
<p><a href="http://twitter.com/berit_jensen"><img src="http://www.gravatar.com/avatar/fcc2ab2f32e0da536e0620ab0820c88d.jpg" /><br />Berit Jensen</a></p>
<p><a href="http://twitter.com/scott_gonzalez"><img src="http://www.gravatar.com/avatar/35da631954825179143c86fa42a10954.jpg" /><br />Scott González</a></p>
<p><a href="http://twitter.com/bassistance"><img src="http://www.gravatar.com/avatar/a9d4d2558b560b0ef168ced0f6c5198c.jpg" /><br />Jörn Zaefferer</a></p>
<p><a href="http://gentics.com"><img src="http://www.gravatar.com/avatar/92df2d6cd31e77059362aabbf9bbc543.jpg" /><br />Norbert Pomaroli</a></p>
<p><a href="http://www.salzburgresearch.at"><img src="http://www.gravatar.com/avatar/225267813448c9526a9875cc98a95137.jpg" /><br />Szaby Grünwald</a></p>
<p><a href="http://www.netural.com"><img src="http://www.gravatar.com/avatar/81d3137c1fdc6f61fc450a3484b82d69.jpg" /><br />Gernot Bernkopf</a></p>
<p><a href="http://tapo-it.at"><img src="" /><br />Herbert Poul</a></p>
<p><a href="http://gentics.com"><img src="" /><br />Christian Peschta </a></p>
<p><a href="http://twitter.com/#!/ufufuo"><img src="http://www.gravatar.com/avatar/f5170db042f5011c63e9a3cc1b03f9d7.jpg" /><br />Daniel Scherrer</a></p> 
<p><a href="http://score.loria.fr"><img src="" /><br />Bogdan Flueras</a></p>
<p><a href="http://www.dfki.de/~germesin"><img src="" /><br />Sebastian Germesin</a></p>
<p><a href="http://www.fb-berlin.de"><img src="" /><br />Jan Koch</a></p>
<p><a href="http://www.intergraph.com/global/at/"><img src="" /><br />Franz Buchinger</a></p>
<p><a href=""><img src="" /><br />Stefan Dotti</a></p>
<p><a href="http://www.segments.at"><img src="" /><br />Ivo Radulovski</a></p></div>

<!--
<script src="scripts/MacStyleDock.js"></script>
-->

<div id="spacing"></div>
<div id="test">
	<div id="cube">
		<div class="face one" id="face1">
			<div class="content editable">
				<h1>Easier.</h1>
				You can edit any website content instantaneously. You see the changes the moment you type. No training necessary to edit content of a website, wiki, blog or any other application. <a href="#easier">Learn more.</a>
			</div>
		</div>
		<div class="face two" id="face2">
			<div class="content">
				<canvas id="indicator" width="512" height="512"></canvas>
			</div>
			<div class="container">
				<div id="startEl">

				</div>
			</div>
		</div>
		<div id="frontfloat" class="editable">

		</div>
		<div id="trigger_canvas">turn canvas on</div>
		<!-- should use webworker for this but they don't have access to DOM :-/ -->
		<div class="info" id="infobox">JavaScript animated Canvas-elements use a large amount of processor power!<br>(only for fast devices)</div>
		<div class="face three" id="face3">
			<video src="vid/haymodance.mp4" loop="1" controls="1" autoplay></video>
			<div class="comment editable">dancing <a href="http://twitter.com/draftkraft">Haymo Meran</a><br>laughing by <a href="http://twitter.com/balupton">Benjamin Lupton</a></div>
		</div>
		<div class="face four" id="face4">
			<div class="content editable">
			<h1><a href="http://aloha-editor.org/">Aloha Editor</a></h1>is the world's most advanced browser based semantic Editor.
			</div>
		</div>
		<div class="face five" id="face5">
			<div class="content editable">

			</div>
		</div>
		<div class="face six" id="face6">
			<div class="ls_leged">Write in this box. When you come back you will find the same content ;-)</div>
			<div class="content editable" id="local_storage">

			</div>
			<div id="savels">save</div>
			<div id="dells">reset</div>
		</div>
	</div>
</div>

<div id="navigate">
	click write, arrow-keys, alt, ctrl, cabs
</div>

<footer>
	Program and Idea by <a href="http://twitter.com/ufufuo">Daniel Scherrer</a><br>
	<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Design for <a href="http://typo3.com/">TYPO3</a> by <a href="https://twitter.com/#!/WrYBiT">Jens Hoffmann</a><br>
	<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Design Implementation by <a href="http://twitter.com/#!/berit_jensen">Berit Jensen</a>
</footer>

<script src="js/cube.js"></script>

</body>
</html>
