<?php

/*******************************************************************************
*                                                                              *
*   Aloha Editor developer conference at Gentics in Vienna 2011                *
*                                                                              *
*   created and idea by Daniel Scherrer 2011                                   *
*   edited Haymo Meran (http://twitter.com/draftkraft)
*   Aloha Editor Menu Desgin for TYPO3 by Jens Hoffmann                        *
*   Aloha Editor Menu Desgin Implementation by Berit Jensen                    *
*                                                                              *
*******************************************************************************/

?><!DOCTYPE html>
<html lang="en-US" id="aloha-cube">
<head>
	<meta http-equiv=content-type content='text/html; charset=utf-8' />
	<meta http-equiv="author" content="Daniel Scherrer (http://twitter.com/ufufuo)" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<title>the Aloha Cube</title>

	<script src="http://code.jquery.com/jquery-1.5.1.js"></script>
	<script src="scripts/jquery-ui-1.8.9.custom.min.js"></script>
	<script>GENTICS_Aloha_base="/workspace/Aloha-Editor-test/The_Aloha_cube/aloha/";</script>

	<!-- load Aloha Editor core. You may need to adjust the base path. -->
	<script>GENTICS_Aloha_base="/workspace/Aloha-Editor-test/The_Aloha_cube/aloha/";</script>
	<script src="aloha/aloha.js"></script>

	<!-- We did not concatenate the script to give you an overview about what is loaded. -->
	<script src="aloha/plugins/com.gentics.aloha.plugins.Format/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.Table/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.List/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.Link/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.Ribbon/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.HighlightEditables/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.Media/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.DragAndDropFiles/plugin.js"></script>
	<script src="aloha/plugins/com.gentics.aloha.plugins.Image/plugin.js"></script>
	<link rel="stylesheet" type="text/css" href="styles/cube.css" />

</head>
<body id="chbg">
<!--
<div id="twitterbar"></div>
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
		<div id="trigger_canvas" onmouseover="ShowContent('infobox'); return true;" onmouseout="HideContent('infobox'); return true;">turn canvas on</div>
		<div class="info" id="infobox">JavaScript animated Canvas-elements use a large amount of processor power!<br>(only for fast computers)</div>
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
			<div class="content editable" id="local_storage" onchange="setStorageElement();">

			</div>
			<div id="savels">save storage</div>
			<div id="dells">clear storage</div>
		</div>
	</div>
</div>
<div id="navigate">
	arrow-keys, alt, ctrl, click, cabs
</div>

<footer>
Program and Idea by <a href="http://twitter.com/ufufuo">Daniel Scherrer</a><br>
<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Design for <a href="http://typo3.com/">TYPO3</a> by <a href="https://twitter.com/#!/WrYBiT">Jens Hoffmann</a><br>
<a href="http://aloha-editor.org/">Aloha Editor</a> Menu Design Implementation by <a href="http://twitter.com/#!/berit_jensen">Berit Jensen</a>
</footer>

<script src="scripts/cube.js"></script>

</body>
</html>
