var myViewerDiv = document.getElementById('MyViewerDiv');
var myViewerDiv1 = document.getElementById('MyViewerDiv1');
var myViewerDiv2 = document.getElementById('MyViewerDiv2');
var myViewerDiv3 = document.getElementById('MyViewerDiv3');

var viewer = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv);
var viewer1 = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv1);
var viewer2 = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv2);
var viewer3 = new Autodesk.Viewing.Private.GuiViewer3D(myViewerDiv3);

var options = {
    'env' : 'Local',
    'document' : './svfs/test2/Resource/3D вид/3D/3D.svf'
};
var options1 = {
    'env' : 'Local',
    'document' : './svfs/test3/{3D} 2431/{3D}.svf'
};
var options2 = {
    'env' : 'Local',
    'document' : './svfs/test1/{3D} 3969217/{3D}.svf'
};
var options3 = {
  'env' : 'Local',
  'document' : './svfs/test4/{3D} 6742053/{3D}.svf'
};

Autodesk.Viewing.Initializer(options, function() {
  viewer.start(options.document, options);
});
Autodesk.Viewing.Initializer(options1, function() {
  viewer1.start(options1.document, options1);
});
Autodesk.Viewing.Initializer(options2, function() {
  viewer2.start(options2.document, options2);
});
Autodesk.Viewing.Initializer(options3, function() {
  viewer3.start(options3.document, options3);
});

let win = myViewerDiv.querySelector('.adsk-viewing-viewer');
win.style= "height: 540px; width: 640px; overflow: hidden;";

let win1 = myViewerDiv1.querySelector('.adsk-viewing-viewer');
win1.style= "height: 540px; width: 640px; overflow: hidden;";

let win2 = myViewerDiv2.querySelector('.adsk-viewing-viewer');
win2.style= "height: 540px; width: 640px; overflow: hidden;";

let win3 = myViewerDiv3.querySelector('.adsk-viewing-viewer');
win3.style= "height: 540px; width: 640px; overflow: hidden;";
      