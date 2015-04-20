﻿/*    Start porky data source access by launching this script from the InDesign scripts panel.        OS-X:    This JavaScript launches an AppleScript which launches a Terminal script which launches another JavaScript file with Apple's built-in Node.Js interpreter :-)        Windows:    This JavaScript launches a command line script which launches another JavaScript file with the Node.Js interpreter which can be downloaded at http://nodejs.org/download/    Installation:    in order to run correctly, porky needs the following npm modules to be installed via terminal (Mac) or command line (Win):    npm install request    npm install sqlite3    npm install mysql    npm install pg    npm install xml2js    npm install htmlparser    npm install markdown    npm install brucedown    npm install html-entities*/// Definition of relative paths// No changes necessary here// Use only local paths, no network paths allowedvar thisParentFolder = File($.fileName).parent;var thisRootFolder = File("~").fsName;var thisAbsolutePath = thisParentFolder.toString().replace("~", thisRootFolder);	thisAbsolutePath = Folder.decode(thisAbsolutePath).toString();	thisAbsolutePath = thisAbsolutePath.replace(/\\/, "/");var executeThis = "";if(File.fs == "Windows"){    alert("Attention Windows Users:\n\nThis launcher needs custom entries!\n\n-> download & install Node.Js binaries first\n-> install missing packages correctly.\n\nIf Node doesn't find its modules, check http://stackoverflow.com/questions/9587665/nodejs-cannot-find-installed-module-on-windows");	var porkyExecutableFilePathWin = thisAbsolutePath + "/bin/node-win/porky.bat";    executeThis = new File(porkyExecutableFilePathWin);    executeThis.execute();}else if(File.fs == "Macintosh"){    var porkyExecutableFilePathMac = '';    porkyExecutableFilePathMac = "'" + thisAbsolutePath + "/bin/porky-data-source-access.js" + "'";    executeThis = "tell application \"Terminal\"\r do script with command \"node " + porkyExecutableFilePathMac + "\"\r activate\r end tell";    app.doScript(executeThis, ScriptLanguage.applescriptLanguage);}