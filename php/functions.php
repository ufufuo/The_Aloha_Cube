<?php

/*************************/
/*                       */
/*    PHP - Functions    */
/*                       */
/*************************/


function twitterDock($node, $personsXML){	// Build Twitter Dock
	$persones = "";
	foreach ($personsXML->person as $person){
		$persones .= "\n\t\t\t\t\t{name:'".$person->name."',avatar:'".$person->avatar."',onclick:function(){window.location='".$person->link."'}},";
	}
	if ($persones != ""){
		$script = "\t\tfunction initTwitterDock(){\n\t\t\tvar dock = new twitterDock(\n\t\t\t\tdocument.getElementById('".$node."'),\n\t\t\t\t[".substr($persones,0,-1)."\n\t\t\t\t],\n\t\t\t\t32,\n\t\t\t\t80,\n\t\t\t\t2\n\t\t\t);\n\t\t}";
		$trigger = "\n\t\tsetTimeout( function(){ initTwitterDock(); }, 2000);";
		return "<script type=\"text/javascript\">\n".$script.$trigger."\n\t</script>\n";
	}else{ return; }
}

function filterFiles($filesArr){		// make clean file array
	$i = 0;
	foreach ($filesArr as $file){
		if (substr($file, 0, 1) != "."){
			$returnArr[$i++] = $file;
		}
	}
	if (isset($returnArr)){ return $returnArr; }else{ return ""; }
}

/*** not yet done ***/
function getMediaRepository(){			// Read out Media Storage for Aloha Media Plugin
	// read out the folders
	//$srcArrAll = filterFiles(scandir(mappath(1).'data/files'));
	return;
}

/*** not yet done ***/
function cssMediaRepository(){			// Create CSS for Aloha Media Plugin
	$dataArr = getMediaRepository();
	if (is_array($dataArr)){
		$defineDocs = array('pdf'=>'0','doc'=>'-52','docx'=>'-52','xls'=>'-104','xslx'=>'-104','pps'=>'-156','ppsx'=>'-156','txt'=>'-208');
		foreach ($dataArr as $key => $object){
			/*
			if ($fileArr[2] == 'img'){
				if (file_exists(mappath(1).'data/storage/thumbs/'.$fileArr[0])){
					$csssrc .= "\t\t.MAITEM_Fil".$fileArr[2].$fileArr[0]."{\n\t\t\tbackground-image:url(../appl/file.php?tn=x&id=".$fileArr[0].");\n\t\t\tbackground-repeat:no-repeat;\n\t\t\theight:44px;\n\t\t\twidth:54px;\n\t\t}\n";
				}else{
					$csssrc .= "\t\t.MAITEM_Fil".$fileArr[2].$fileArr[0]."{\n\t\t\tbackground-image:url(plugins/aloha/plugins/com.contria.aloha.plugins.Media/resources/media_tnna.png);\n\t\t\tbackground-repeat:no-repeat;\n\t\t\theight:44px;\n\t\t\twidth:54px;\n\t\t}\n";
				}
			}elseif ($fileArr[2] == 'doc'){
				$csssrc .= "\t\t.MAITEM_Fil".$fileArr[2].$fileArr[0]."{\n\t\t\tbackground-image:url(plugins/aloha/plugins/com.contria.aloha.plugins.Media/resources/media_doc.png);\n\t\t\tbackground-repeat:no-repeat;\n\t\t\theight:44px;\n\t\t\twidth:54px;\n\t\t\tbackground-position: ".$defineDocs[$fileArr[1]]."px 0px;\n\t\t}\n";
			}elseif ($fileArr[2] == 'audio' || $fileArr[2] == 'video'){
				$csssrc .= "\t\t.MAITEM_Fil".$fileArr[2].$fileArr[0]."{\n\t\t\tbackground-image:url(plugins/aloha/plugins/com.contria.aloha.plugins.Media/resources/media_".$fileArr[2].".jpg);\n\t\t\tbackground-repeat:no-repeat;\n\t\t\theight:44px;\n\t\t\twidth:54px;\n\t\t}\n";
			}
			*/
		}
		return "<style type=\"text/css\"></style>";
	}
	return;
}

?>
