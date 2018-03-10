(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ski_atlas_", frames: [[0,0,1280,1074],[1282,0,640,640]]}
];


// symbols:



(lib.hill = function() {
	this.spriteSheet = ss["ski_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ski_1 = function() {
	this.spriteSheet = ss["ski_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Ski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ski_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.256,0.256);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ski, new cjs.Rectangle(0,0,164,164), null);


(lib.Scene_1_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.hill();
	this.instance.parent = this;
	this.instance.setTransform(-456,-86,0.675,0.675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Ski();
	this.instance.parent = this;
	this.instance.setTransform(-26,-42.9,0.5,0.5,0,0,0,82,82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-0.7,x:-14.7,y:-25},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-1.5,x:-3.2,y:-7.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-2.2,x:8.6,y:10.3},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-2.9,x:20.5,y:27.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-3.7,x:32.7,y:45.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-4.4,x:45,y:62.3},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-5.1,x:57.7,y:79.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-5.9,x:70.5,y:95.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-6.6,x:83.8,y:112.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-7.3,x:97.6,y:128.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-8.1,x:111.8,y:144.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-8.8,x:126.7,y:159.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-9.5,x:142.6,y:173.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-10.3,x:160,y:185.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-11,x:179.7,y:192.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-11.7,x:199,y:186.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-12.5,x:208,y:197.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-13.2,x:217.9,y:208.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:-13.9,x:228.4,y:218.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-14.7,x:239.6,y:227.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-15.4,x:251.4,y:236.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:-16.1,x:263.6,y:244.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:-16.8,x:276.2,y:251.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:-17.6,x:289.2,y:258.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:-18.3,x:302.3,y:264.9},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-19,x:315.8,y:270.6},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-19.8,x:329.5,y:275.7},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:-20.5,x:343.3,y:280.5},0).wait(1).to({scaleX:1.36,scaleY:1.36,rotation:-21.2,x:357.3,y:284.8},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-22,x:371.4,y:288.7},0).wait(1).to({scaleX:1.42,scaleY:1.42,rotation:-22.7,x:385.6,y:292.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,rotation:-23.4,x:399.8,y:295.3},0).wait(1).to({scaleX:1.48,scaleY:1.48,rotation:-24.2,x:414.2,y:298.2},0).wait(1).to({scaleX:1.51,scaleY:1.51,rotation:-24.9,x:428.5,y:300.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,rotation:-25.6,x:443,y:303},0).wait(1).to({scaleX:1.57,scaleY:1.57,rotation:-26.4,x:457.5,y:305},0).wait(1).to({scaleX:1.6,scaleY:1.6,rotation:-27.1,x:472,y:306.7},0).wait(1).to({scaleX:1.63,scaleY:1.63,rotation:-27.8,x:486.5,y:308.3},0).wait(1).to({scaleX:1.66,scaleY:1.66,rotation:-28.6,x:501.1,y:309.5},0).wait(1).to({scaleX:1.69,scaleY:1.69,rotation:-29.3,x:515.6,y:310.6},0).wait(1).to({scaleX:1.72,scaleY:1.72,rotation:-30,x:530.2,y:311.5},0).wait(1).to({scaleX:1.75,scaleY:1.75,rotation:-30.8,x:544.8,y:312.2},0).wait(1).to({scaleX:1.78,scaleY:1.78,rotation:-31.5,x:559.4,y:312.7},0).wait(1).to({scaleX:1.81,scaleY:1.81,rotation:-32.2,x:574,y:313.1},0).wait(1).to({scaleX:1.84,scaleY:1.84,rotation:-33,x:588.6,y:313.3},0).wait(1).to({scaleX:1.87,scaleY:1.87,rotation:-33.7,x:603.2,y:313.4},0).wait(1).to({scaleX:1.9,scaleY:1.9,x:617.9,y:313.3},0).wait(1).to({scaleX:1.93,scaleY:1.93,x:632.4,y:313},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:647.1,y:312.7},0).wait(1).to({scaleX:1.99,scaleY:1.99,x:661.6,y:312.2},0).wait(1).to({scaleX:2.02,scaleY:2.02,x:676.3,y:311.6},0).wait(1).to({scaleX:2.05,scaleY:2.05,x:690.9,y:311},0).wait(1).to({scaleX:2.08,scaleY:2.08,x:705.5,y:310.1},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:720.1,y:309.3},0).wait(1).to({scaleX:2.14,scaleY:2.14,x:734.7,y:308.4},0).wait(1).to({scaleX:2.17,scaleY:2.17,x:749.2,y:307.3},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:763.8,y:306.3},0).wait(1).to({scaleX:2.23,scaleY:2.23,x:778.3,y:305.2},0).wait(1).to({scaleX:2.26,scaleY:2.26,x:792.9,y:304.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.ski = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		playSound("iceskatingdaniel_simon");
	}
	this.frame_59 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(-26,-43,1,1,0,0,0,-26,-43);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1).to({regX:491.3,regY:238.4,x:491.3,y:238.4},0).wait(59));

	// Layer_5_obj_
	this.Layer_5 = new lib.Scene_1_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.setTransform(-23.8,276.7,1,1,0,0,0,-23.8,276.7);
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 1
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,114,864.4,725.3);
// library properties:
lib.properties = {
	id: '44A8033C8BCD754CA354B0C9BBA3DF04',
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ski_atlas_.png", id:"ski_atlas_"},
		{src:"sounds/iceskatingdaniel_simon.mp3", id:"iceskatingdaniel_simon"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['44A8033C8BCD754CA354B0C9BBA3DF04'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;