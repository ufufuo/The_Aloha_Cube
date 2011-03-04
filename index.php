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

<!--
<div id="twitterbar"></div>
<script src="js/MacStyleDock.js"></script>
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
			<video src="media/haymodance.mp4" loop="1" controls="1" autoplay></video>
			<div class="comment editable">dancing <a href="http://twitter.com/#!/draftkraft">Haymo Meran</a><br>laughing by <a href="http://twitter.com/#!/balupton">Benjamin Lupton</a></div>
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
