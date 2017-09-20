(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._728x90holidaymainssidesdessertsbackground = function() {
	this.initialize(img._728x90holidaymainssidesdessertsbackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.wellcookyoufeastgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgFAGQgCgDAAgDQgBgDADgCQACgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape.setTransform(81.1,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AACAsIgDAAIgEgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAhAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgHAAIgHAAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgBgEIAAgDIABgDIABgCIADgBIA8AAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABIABADIAAADIgBADIgBADIgCABIgSAAIgDABQgBAAAAAAQAAABAAAAQgBABAAAAQAAABAAAAIAABAIgBADIgCABg");
	this.shape_1.setTransform(75.6,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgTAqQgKgDgHgHIgBgCIAAgBIABgDIADgDIADgCIADgBIAEABIAGAEIAHAEQAEABAGAAIAGAAIAHgCIAFgEQACgDAAgEQAAgDgCgCQgDgDgDgBIgKgBIgJgCIgKgCQgFgBgEgCQgEgDgDgEQgCgFAAgGQAAgHADgFQAEgFAFgEQAFgDAHgBIALgCIAJABIAIACIAJADIAHAFIAAACIABABIgBADIgDADIgDACIgEABIgCAAQgFgEgFgDQgFgCgGAAIgGAAIgGACIgEAEQgCACAAAEQAAAFAEACIAKADIANACQAHABAHACQAGADAEADQAFAFAAAJQgBAIgDAGQgEAFgFAEQgGADgHACIgMACQgKAAgJgEg");
	this.shape_2.setTransform(67.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AAjAsIgDAAIgEAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQAAgBgBAAIgFgMIgBgCIgDgBIgdAAIgBABIgBAAIgBABIgBABIgFAMIgCACIgCAAIgDABIgCAAIgCAAIgDAAIgCgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAlhSIACgCIACgBIAEAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAIAjBSIAAABIgBABIgDABgAAAgNIgBABIgBACIgCAEIgCAFIgCAFIgCADIAAACIAAACIACABIARAAIACgBIABgCIgCgDIgDgHIgDgHIgCgEIgCgBg");
	this.shape_3.setTransform(59.1,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIADgBIA9AAIACACIABACIAAAEIAAACIgBADIgCACIgtAAIgDACIgBADIAAALIABAEIADABIAdAAIABABIABACIABAEIAAACQAAAEgDAAIgcAAIgEACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABAAIAtAAQACABAAADIABAEIgBADIgBADIgCABg");
	this.shape_4.setTransform(51,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgaAtIgCAAQgEAAgCgDIAAhRQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAAAAABAAIA7AAIADABIABADIABADIAAACIgBAEQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAgBABIgqAAIgEABIgBADIAAALIABADIADABIAcAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIAAADIAAADIAAACIAAADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgbAAIgCAAIgCABIgBACIgBABIAAAgIgBACIgDABg");
	this.shape_5.setTransform(43.3,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgOArQgHgDgGgFQgFgFgDgHIgCgHIgBgIIAAgXIAAgZIABgCIADgCIAEAAIACAAIAEABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIAAAtQAAAFACAEQABAFADAEQADADAEACQAFACAEAAQAGAAAEgCQAEgCADgDQADgEABgFQACgEAAgFIAAgtQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgBIADgBIADABIADABIABADIAAAwIgBAIIgCAHQgDAHgFAFQgGAFgHADQgHADgIAAQgHAAgHgDg");
	this.shape_6.setTransform(29.9,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_7.setTransform(19.8,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AgBAuIgBAAIgCAAIgDgCIAAgCIAAgeIgBgGIgCgEIgagnIAAgBIABgCIADgCIAEgCIACgBIAEABIACACIARAdIABABIACAAIACAAIACgBIASgdIACgCIACgBIAEAAIADACIACACIABACIAAABIAAABIgZAnIgDAFIAAADIAAABIAAAfQgCADgCABg");
	this.shape_8.setTransform(10.6,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgFAGQgCgDAAgDQgBgDADgCQACgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEgBQgDABgCgDg");
	this.shape_9.setTransform(1,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AAVAtIgEgCIgVghIgDgCIgEgBIgEABQgBABAAAAQgBAAAAABQAAAAgBABQAAABAAABIAAAbIgBADIgDABIgEAAIgDAAQgFAAAAgDIAAhTIACgCIADgBIADAAIADAAQAEAAABADIAAAcQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAIAEABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIAYgeIABgBIACAAIADABIADACIADACIABACIgBACIgVAZIgBACIAAADIAAACIAAACIAcAlIABABIAAACIgBADIgDABIgEABIgDABg");
	this.shape_10.setTransform(-4.7,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_11.setTransform(-14.6,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgIAtIgJgDIgIgEIgHgGQgHgFgDgJIgDgIIgBgKIABgIIADgJQADgJAHgGIAHgFIAIgEIAJgDIAIgBIAKABIAJADQAIAEAGAFQAHAGAEAJQADAIAAAJIgBAKIgCAIQgEAJgHAFQgGAHgIADIgJADIgKABIgIgBgAgKgbQgGACgEAEQgEAFgDAFQgCAGAAAFQAAAHACAFQADAGAEADQAEAEAGADQAFACAFABQAGgBAFgCQAGgDAEgEQAEgDADgGQACgFAAgHQAAgFgCgGQgDgFgEgFQgEgEgGgCQgFgCgGgBQgFABgFACg");
	this.shape_12.setTransform(-25,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgDAtIgJgDIgIgEQgEgCgDgEIgGgGIgEgIQgEgIAAgKQAAgJAEgIIAEgIIAGgHQAGgGAJgDIAJgDIAIgBIAKABIAKADIAJAGIAHAGIABADQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDACIgDACIgDACQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBIgFgDIgHgFQgEgCgHAAQgFABgFACQgGACgEAEQgEAFgCAFQgDAGAAAFQAAAGADAGQACAFAEAEQAEAEAGADQAFACAFABQAHAAAGgDQAGgDAEgFIADAAIADAAIAEACIADADIABADIAAACIgIAHIgJAEIgJAEIgLABIgIgBg");
	this.shape_13.setTransform(-34.8,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgeAtIgDgCIgBgCIAAhQIABgDIADgBIADgBIADAAIAEABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAIAAA+IABADIABACQACACADABIAnAAIADABIACACIABACIAAAEIgBAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAg");
	this.shape_14.setTransform(-46.9,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgeAtIgCgCIgBgCIAAhQIABgDIACgBIADgBIADAAIAEABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAIAAA+IABADIABACQACACADABIAoAAIACABIACACIAAACIAAAEIgBAEQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_15.setTransform(-55.2,-0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AgdAsIgDgBIgCgCIAAhRQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIACgBIA9AAIADACIABACIAAAEIAAACIgBADIgDACIgtAAIgCACIgBADIAAALIABAEIADABIAdAAIACABIABACIAAAEIAAACQAAAEgDAAIgdAAIgDACQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAAMIABAEQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAIAsAAQADABAAADIABAEIgBADIgBADIgCABg");
	this.shape_16.setTransform(-66.7,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AATAtIgBgBIgOglIgBgCIgDgCIgCACIgCACIgOAkIgBABIgBABIgBgBIgBgBIgCgGIgEgKIgFgMIgGgPIgGgNIgEgMIgDgJIgCgEIABgDIADgCIADgBIADgBIADACIACACIAQApIACACIACABIACgBIABgCIAOgdIABgBIABgCIACABIABACIAOAeIABABIACABIACgBIABgCIARgqQACgCADAAIADAAIADABIADACIABADIgCAEIgDAJIgFANIgFAMIgGAPIgFAMIgFAKIgCAHIgBAAIgBABg");
	this.shape_17.setTransform(-77.3,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.1,-8.4,170.3,16.9);


(lib.ordernowgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVArIgVhEIAAAAIgUBEIgMAAIgZhVIANAAIATBDIAUhDIAMAAIAUBDIAThDIAMAAIgZBVg");
	this.shape.setTransform(31.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJAsIgIgCQgJgEgFgGQgHgGgCgIQgEgJAAgJQAAgJAEgJQACgHAHgGQAFgGAJgDIAIgDIAJgBQAJAAAJAEIAHADIAHAGQAGAGADAHQAEAJAAAJQAAAJgEAJQgDAIgGAGIgHAFIgHAFQgJACgJAAIgJAAgAgMgeQgGACgEAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGAEQAFACAHAAQAHAAAGgCQAGgEAEgEQAEgEADgHQACgGAAgHQAAgGgCgGQgDgHgEgEQgEgFgGgCQgFgDgIAAQgHAAgFADg");
	this.shape_1.setTransform(20.7,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAVArIgshFIAAAAIAABFIgMAAIAAhVIAPAAIArBEIABAAIAAhEIAMAAIAABVg");
	this.shape_2.setTransform(11,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQArIgVgmIgNAAIAAAmIgLAAIAAhVIAbAAQAFAAAFACQAGABAEADQAEADADAEQACAFAAAGQAAAJgGAGIgGAEIgJADIAYAngAgSgEIAOAAIAHgBQAEgBACgCIAFgDQABgDAAgEQAAgEgBgDIgFgDIgGgCIgGgBIgPAAg");
	this.shape_3.setTransform(0.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbArIAAhVIA2AAIAAALIgrAAIAAAZIAoAAIAAAKIgoAAIAAAcIAsAAIAAALg");
	this.shape_4.setTransform(-7.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglArIAAhVIAdAAQAIAAAIADQAIACAHAGQAGAEAEAIQADAFAAAEIABAKIgBAKQAAAFgDAEIgFAHIgFAGQgHAGgIACQgKACgGABgAgZAgIAPAAQAIAAAGgCQAGgCAFgEQAEgFADgFIACgHIAAgHIAAgHIgCgGQgDgGgEgEQgFgEgGgCQgGgCgIAAIgPAAg");
	this.shape_5.setTransform(-15.5,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAQArIgVgmIgNAAIAAAmIgLAAIAAhVIAbAAQAFAAAFACQAGABAEADQAEADADAEQACAFAAAGQAAAJgGAGIgGAEIgJADIAYAngAgSgEIAOAAIAHgBQAEgBACgCIAFgDQABgDAAgEQAAgEgBgDIgFgDIgGgCIgGgBIgPAAg");
	this.shape_6.setTransform(-23.6,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAsIgIgCQgJgEgFgGQgHgGgCgIQgEgJAAgJQAAgJAEgJQACgHAHgGQAFgGAJgDIAIgDIAJgBQAJAAAJAEIAHADIAHAGQAGAGAEAHQADAJAAAJQAAAJgDAJQgEAIgGAGIgHAFIgHAFQgJACgJAAIgJAAgAgMgeQgHACgDAFQgEAEgDAHQgCAGAAAGQAAAHACAGQADAHAEAEQAEAEAGAEQAFACAHAAQAHAAAGgCQAGgEAFgEQAEgEACgHQACgGAAgHQAAgGgCgGQgCgHgEgEQgFgFgFgCQgHgDgHAAQgHAAgFADg");
	this.shape_7.setTransform(-32.7,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-9.3,79.6,18.8);


(lib.logokale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(130.4,59.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgUgDgIgEQgJgFAAgNQAAgKAGgHQAFgHAJAAIARAAQAKAAAFgLQADgKgBgXIAAl5QABgXgDgKQgFgLgKAAIgRAAQgJAAgFgHQgGgHAAgKQAAgNAJgFQAIgEAUgDQBegNBrAAQBNAAA1ASQA1ASAnAoQAlAlAVA5QATA4AABEQAABNgZA9QgZA+gwAlQglAegvAOQgxAOhEAAQhrAAhegNgAgvjrQgcAFgKALQgKAMAAAhIAAFjQAAAhAVALQANAHAnADQBNAEAshAQAqg/ABhwQAAhwgrg/Qgrg/hKAAIgdADg");
	this.shape_1.setTransform(62.2,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(81.2,88.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(52.4,88.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(22.6,88.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIghgxQgFgJgKAAIgtAAQgEAAgDADQgDACgBAFIABAwQAAAHgKACIgPAAQgNAAAAgLIAAi6QAAgIAJAAIBrAAQAgAAAUASQAVAUgBAgQAAAXgOAPQgIAJgPAJQgHAIAEAFIAiAyQAFAHgFAFQgEAEgPAAQgRAAgFgJgAg5g4IAAAuQABAFAEADQAEACAFAAIA+AAQAQAAALgHQALgKAAgPQAAgRgLgJQgLgJgQAAIg+AAQgOAAAAALg");
	this.shape_5.setTransform(-11.1,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-44.3,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBlQgFgDAAgFIgOhrQgCgHgFAAQgDAAgDAEIgxA+QgEAFgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBpQgCAKgTAAQgGAAgFgCQgGgDAAgGIAVixQACgJADgCQAEgFALAAQAKAAAFAIIA4BPQAFAIAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAJIAVC1QABAKgXAAQgFAAgFgCg");
	this.shape_7.setTransform(-78.1,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(14.6,-54.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDxQhFg2gYheIgBgDQgCgLgHABQgGgBgCALIgBABQgYBghGA2QhIA2hoAAQh+AAhMhQQhMhRAAiFQAAiGBMhRQBLhQCAAAQBpAABHA2QBHA3AXBgQACALAGgBQAHAAACgLIABAAQAXhgBGg2QBHg2BoAAQB/AABNBPQBMBQAACGQAACHhMBRQhNBQiBAAQhmAAhHg2gACniqQgpA/AABtQAABtApA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/gAmFiqQgoA/AABtQAABtAoA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/g");
	this.shape_9.setTransform(-21,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-98.4,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIQAKgHAIAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(110.1,30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAIQgNAIgQABQgTgBgKgIQgLgKgJgYIimm+QgKgZgHgIQgHgHgUgFQgOgBgFgGQgFgFAAgKQAAgXAdAAICvAAQAcAAAAAXQAAAMgHAEQgHAFgRABQgOACgGAEQgGAFAAALQAAAIADALIBzFGQACAFAFAAQAEgBACgFIA/i1QAIgZgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgEgGgEQgFgGAAgJQAAgaAdAAICnAAQAdAAAAAXQAAATgcAFQgRABgFAFQgGAFAAALQAAALAIAZIBfEsQACAFAEAAQAFgBABgFIBdk6QAEgLAAgJQAAgTgdgDQgbgCAAgWQAAgMAHgGQAIgGARAAIElAAQAVAAAIAGQAIAFAAAOQAAAKgGAHQgGAHgJAAIgQAAQgLAAgFAKQgCAJAAAZIAABuQAAAdAFAHQAGAGAXAAIB0AAQAXAAAHgHQADgEAAgGIABgfIAAhoQAAgbgDgHQgFgKgKAAIgQAAQgKAAgHgHQgGgHAAgKQAAgOAIgFQAJgGAWAAICaAAQAWAAAJAGQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBADQgDAKAAAYIAAF8QAAAYADALQABADAFAEQAEACAEAAIASAAQAJAAAGAIQAHAGAAAKQAAAOgJAGQgIAEgXAAIiaAAQgWAAgIgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIAQAAQAKABAFgKQADgIAAgbIAAh8IgBgdQAAgHgDgDQgHgIgXAAIh0AAQgXAAgGAHQgFAGAAAeIAACAQAAAZACAKQAFAKALgBIAQAAQAJAAAGAIQAGAGAAALQAAANgIAGQgIAEgVAAIiaAAQgWAAgJgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIARAAQAEAAAFgCQAEgEABgDQADgIAAgbIAAl8QAAgwgkAEQgLABgHAJQgIAKgGAVIiHGzQgJAfgKAMQgLAKgTABQgTAAgLgKg");
	this.shape_12.setTransform(-74.6,-36.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDACgEQADgIAAgXIAAmAQAAgZgDgHQgDgMgLAAIgRAAQgKABgGgHQgHgHAAgKQAAgOAJgFQAJgGAWAAICcAAQAWAAAJAGQAJAFAAAOQAAAKgGAHQgHAHgJgBIgSAAQgOAAgDAMQgDAFAAAbIAAFkQAAAdACAJQACAJAIAFQAGAFALABQALACAaAAIAwAAQAvAAAPggIAIgQQAIgPAPAAQAMgBAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(69.2,-37.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgaAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(114.4,-37.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZMQk7iEjyjzQjxjxiFk6QiKlGAAljQAAljCKlGQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE7CFDxDxQDyDzCFE6QCKFGAAFjQAAFjiKFGQiFE6jyDxQjxDzk7CEQlFCKlkAAQljAAlFiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175,-175,350,350);


(lib.holidaymainssidesdessertsgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("AgIA9IgMgCIgEACIgEABIgCgBIgDgBQgDgDgEgKQgDgKgBgIQAAgEACgDQACgCAEAAQAFAAAFAJIAFAIQADAEAHADQAGADAGAAQAIAAAFgEQAEgEAAgHQAAgKgTgJIgHgEQgTgJgGgHQgHgHABgMQAAgPALgKQAKgJASAAIAHAAIAIABIAGgCIAEAAQAFAAAGAJQAGAJAAALQAAAEgDACQgBACgEAAQgDAAgCgCIgGgIQgFgHgEgDQgFgDgHAAQgGAAgEAEQgEAEAAAGQAAAFAEAFQAFAEANAHIABABQAiAPgBATQAAARgMALQgNALgTAAg");
	this.shape.setTransform(176.5,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006F46").s().p("AgGBHQgFgCgFgEQgEgEgCgGQgBgHAAgRIAAg/IgLAAIgDgBIgCgDIAAgDQAAgEANgKIAFgEIAFgEQAMgLAEAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIAAAWIAbAAIAEABIABAEIAAADIgBAFQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgYAAIgDABIAAADIAAA6QAAAPADAEQACAEAHAAIAKgCIAIgCQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAABAAAAQABAHgLAGQgKAGgMAAQgHAAgGgCg");
	this.shape_1.setTransform(166.8,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006F46").s().p("AgjA6QgGgBABgFQgBgFAGgCIADgBQADgBABgFIABgMIAAgIIAAgKIAAgHQAAgVgBgGQAAgHgDgCIgGgBQgGgDgBgEQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAIAHgFIAQgFIAKgCQAHAAABAQIAAACIAAABQAGgKAIgEQAGgGAGAAQAJAAAFAGQAFAEgBAIQABAJgEAFQgEAEgGAAIgHgBIgEgDIgDgFQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgIAAgDALQgDALAAAjQAAALABAFQACAGACABIAFABQAIACgBAGQABAEgHABQgHADgPAAQgSAAgGgDg");
	this.shape_2.setTransform(157.9,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006F46").s().p("AgmAsQgRgRAAgZQAAgbASgSQARgSAaAAQAXAAANANQAOANAAAWQAAAIgDACQgCACgJAAIgsAAQgEAAgCgCQgCgCAAgDQAAgDACgCQACgBAEAAIAYAAIAGgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgLgIgIQgHgIgLAAQgOAAgGANQgHAMAAARQAAASAJANQAKAOAOAAQAJAAAGgCQAGgCAFgEIAFgDQAGgFADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAADgDAFIgIAIQgKAIgKAEQgKAEgLAAQgYAAgRgSg");
	this.shape_3.setTransform(146.3,2.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006F46").s().p("AgIA9IgNgCIgDACIgEABIgDgBIgCgBQgEgDgDgKQgDgKAAgIQAAgEABgDQACgCAEAAQAFAAAGAJIAEAIQAEAEAGADQAGADAGAAQAIAAAEgEQAFgEAAgHQAAgKgTgJIgHgEQgTgJgGgHQgHgHAAgMQAAgPAMgKQAKgJASAAIAHAAIAIABIAGgCIAEAAQAGAAAFAJQAGAJgBALQAAAEgCACQgCACgDAAQgCAAgDgCIgHgIQgEgHgFgDQgEgDgHAAQgGAAgEAEQgEAEAAAGQAAAFAEAFQAFAEANAHIABABQAiAPAAATQAAARgNALQgNALgTAAg");
	this.shape_4.setTransform(134.4,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006F46").s().p("AgIA9IgMgCIgEACIgEABIgDgBIgCgBQgEgDgDgKQgDgKgBgIQAAgEACgDQADgCADAAQAFAAAFAJIAFAIQAEAEAGADQAGADAGAAQAIAAAEgEQAFgEAAgHQAAgKgTgJIgHgEQgTgJgGgHQgHgHAAgMQAAgPAMgKQAKgJASAAIAHAAIAIABIAGgCIAEAAQAFAAAGAJQAGAJAAALQgBAEgCACQgCACgDAAQgCAAgDgCIgHgIQgEgHgFgDQgEgDgHAAQgGAAgEAEQgEAEAAAGQAAAFAEAFQAEAEAOAHIABABQAiAPAAATQAAARgNALQgNALgTAAg");
	this.shape_5.setTransform(123.7,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006F46").s().p("AgmAsQgRgRAAgZQAAgbASgSQARgSAaAAQAXAAANANQAOANAAAWQAAAIgDACQgCACgJAAIgsAAQgEAAgCgCQgCgCAAgDQAAgDACgCQACgBAEAAIAYAAIAGgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgLgIgIQgHgIgLAAQgOAAgGANQgHAMAAARQAAASAJANQAKAOAOAAQAJAAAGgCQAGgCAFgEIAFgDQAGgFADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAADgDAFIgIAIQgKAIgKAEQgKAEgLAAQgYAAgRgSg");
	this.shape_6.setTransform(112,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006F46").s().p("AgZBVIgOAAIgKAAIgLAAQgOAAgFgBQgEgDAAgFQAAgEAHgDIAHgDQACgDABgSIABgtIgBgrQgCgTgBgCIgHgEQgHgDAAgFQAAgFAFgCQAFgCAPAAIAKABIALAAIAQgBIANAAQAsAAAYAXQAYAXAAApQAAApgYAWQgZAUguAAgAgZhDQgGACgBAEQgCAFgBANIAAAlIAAAsQABASACAEQABADAIADQAIADALgBQAaABAOgRQAOgQAAghQAAgigQgTQgQgSgcAAQgKAAgFABg");
	this.shape_7.setTransform(96,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006F46").s().p("AhHBHQgWgQAAgcQAAgPAHgMQAHgKAQgLIAAgBQgFgGgCgFQgDgGAAgGQAAgTAOgLQANgNAWAAQAOAAAKAGQAKAGAAAHQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBABQgCABgDAAIgJgCQgJgDgHgBQgJABgGAFQgFAHAAAKIABAIQABAEAEADQACACAGACIAHADIACABIABACQAAACgEAGQgFAEgEAAIgFgBIgIgDQgHAGgDAHQgEAJAAALQAAAXAPAOQAPAOAXAAQATAAALgJQAMgKAAgQQAAgKgFgGQgFgGgIAAQgIAAgFAFQgFAFAAAHIAAADIAAAAIgBABIgCAAQgFAAgCgDQgDgDAAgGQAAgRA0gYIADgBQAOgHAHgHQAHgHAAgIQAAgGgDgCQgDgDgGgBIgFABIgEABQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgFAHgEQAGgDAKAAQANAAAHAGQAIAIAAALQAAAQgNALQgNANgaAJQALAEAFAJQAGAJAAAMQAAAIgDAJQgEAJgHAHQgLAMgQAFQgQAHgUAAQgkgBgWgRg");
	this.shape_8.setTransform(70.1,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006F46").s().p("AgIA9IgMgCIgEACIgEABIgDgBIgCgBQgEgDgDgKQgDgKgBgIQABgEABgDQADgCADAAQAFAAAFAJIAFAIQAEAEAGADQAGADAGAAQAIAAAEgEQAFgEAAgHQAAgKgTgJIgHgEQgTgJgGgHQgHgHAAgMQAAgPAMgKQAKgJASAAIAHAAIAIABIAGgCIAEAAQAFAAAGAJQAGAJAAALQgBAEgCACQgCACgDAAQgCAAgDgCIgHgIQgEgHgFgDQgEgDgHAAQgGAAgEAEQgEAEAAAGQAAAFAEAFQAEAEAOAHIABABQAiAPAAATQAAARgNALQgNALgTAAg");
	this.shape_9.setTransform(46.8,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006F46").s().p("AgmAsQgRgRAAgZQAAgbASgSQARgSAaAAQAXAAANANQAOANAAAWQAAAIgDACQgCACgJAAIgsAAQgEAAgCgCQgCgCAAgDQAAgDACgCQACgBAEAAIAYAAIAGgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgLgIgIQgHgIgLAAQgOAAgGANQgHAMAAARQAAASAJANQAKAOAOAAQAJAAAGgCQAGgCAFgEIAFgDQAGgFADAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIACAEQAAADgDAFIgIAIQgKAIgKAEQgKAEgLAAQgYAAgRgSg");
	this.shape_10.setTransform(35,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006F46").s().p("AAXBVQgCgBAAgFIAAgFIAAgCIAAgBIgEADIgFADQgHAFgGADQgHACgHAAQgWAAgOgPQgOgRAAgZQAAgdAQgRQAQgSAZAAIAIABQAEABACACQACADAAADQAAAHgIAAIgDgBIgDAAQgNAAgIALQgIAJAAATQAAAUAJANQAIAMANAAQANAAAGgHQAHgGAAgOIAAghIAAg1QAAgJgCgDQgBgDgEgCIgEgBQgHgCAAgDQAAgEADgCQACgDAJgDIAOgEIALAAQAEAAACABQACADAAAFIAAAGIgCBJIABAxQABAMACABIAIADQAGABAAAEQAAAGgRAFIgMADIgJABQgEAAgBgCg");
	this.shape_11.setTransform(21.7,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#006F46").s().p("AgUBUQgGgBAAgFQAAgFAGgCIADgBQADgBABgFQABgEAAgIIAAgIIAAgKIAAgNIgBgWQgBgHgCgBIgGgBQgHgDAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAIgFIARgGIAMgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQABADAAAFIAAAHIAAAGIgBAdIAAAAIAAAdIABAQQABAFACACIAFABQAGADAAAFQAAAEgGACQgGACgPAAQgSAAgFgDgAgOg7QgFgEAAgGQAAgHAGgFQAFgEAIgBQAHAAAFAFQAFAFAAAGQAAAGgFAFQgGAEgHABQgIgBgFgEg");
	this.shape_12.setTransform(10.3,0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006F46").s().p("AgcBVQgOgDgIgEQgFgDgDgKQgDgLAAgNQAAgFACgDQACgDAEAAQAGAAAGALIACAFQAIANAJAGQAJAGAMAAQAMAAAJgIQAJgIAAgLQAAgQgigQIgEgBQgdgMgJgLQgKgKAAgRQAAgVAQgOQAQgNAZAAIANABIAQADIAFgDIAEgBQADAAACACIAFAGIAHAPQACAIAAAGQAAAEgCACQgCADgDAAQgGAAgGgJIgCgCQgHgJgIgEQgIgEgJAAQgNAAgIAGQgHAGAAALQAAAJAGAHQAGAGAZALIAFACQAVAJAKAIQAGAFAEAJQADAIAAAJQAAAYgRAOQgRANgdAAQgOAAgNgDg");
	this.shape_13.setTransform(-0.4,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006F46").s().p("AgMAkQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIACgEIACgEIAHgNIADgIIgBgDIgEgCQgGgCgDgFQgDgEAAgGQAAgIAFgFQAFgFAHAAQAHAAAGAHQAFAGAAALQAAAIgDAIQgDAIgIANIgGAJQgCADgCAAIgGgBg");
	this.shape_14.setTransform(-17.7,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006F46").s().p("AgIA9IgMgCIgEACIgEABIgCgBIgDgBQgDgDgEgKQgDgKgBgIQAAgEACgDQACgCAEAAQAFAAAFAJIAFAIQADAEAHADQAGADAGAAQAIAAAFgEQAEgEAAgHQAAgKgTgJIgHgEQgTgJgGgHQgHgHABgMQAAgPALgKQAKgJASAAIAHAAIAIABIAGgCIAEAAQAFAAAGAJQAGAJAAALQAAAEgDACQgBACgEAAQgDAAgCgCIgGgIQgFgHgEgDQgFgDgHAAQgGAAgEAEQgEAEAAAGQAAAFAEAFQAFAEANAHIABABQAiAPgBATQAAARgMALQgNALgTAAg");
	this.shape_15.setTransform(-26.9,2.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006F46").s().p("AAPA6QgFgBAAgEQAAgFAGgDIAFgBQACgCABgFQABgFAAgNQAAglgEgJQgFgKgNAAQgFAAgGAEQgGAEgDAGQgDAFgBAKIgBAfIABAPQABAFADABIAEABQAHADAAAFQAAAEgHACQgFACgPAAQgTAAgGgDQgFgBgBgFQABgFAFgCIADgBQAEgBABgFQABgEAAgIIAAgIIgBgKIAAgMIAAgXQgBgHgCgBIgGgBQgHgDAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAHgFIARgFIAMgDQAEAAABACQACADAAADIAAAIIAAABIABAAIAAAAIABAAIADgCIACgCQANgMAOgBQAIABAJADQAHADAGAHQAFAHACAIQADAJAAAUIAAAOIAAAIIgBAHQAAAJACADQABADADACIADABQAGACAAAFQAAAEgGACQgFADgSAAQgRAAgGgDg");
	this.shape_16.setTransform(-39.5,2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006F46").s().p("AgUBUQgGgBAAgFQAAgFAGgCIADgBQADgBABgFQABgEAAgIIAAgIIAAgKIAAgNIgBgWQgBgHgCgBIgGgBQgHgDAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAIgFIARgGIAMgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQABADAAAFIAAAHIAAAGIgBAdIAAAAIAAAdIABAQQABAFACACIAFABQAGADAAAFQAAAEgGACQgGACgPAAQgSAAgFgDgAgOg7QgFgEAAgGQAAgHAGgFQAFgEAIgBQAHAAAFAFQAFAFAAAGQAAAGgFAFQgGAEgHABQgIgBgFgEg");
	this.shape_17.setTransform(-50.4,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#006F46").s().p("AAVA4IgGgHIgGADQgOAKgOAAQgRAAgLgKQgLgKAAgRQAAgTAOgJQAOgLAYAAQAGAAADACQADACAAAEQAAAGgIAAQgMAAgGAGQgIAGABAKQAAAJAFAGQAHAFAKAAQALAAAFgFQAFgFAAgMIAAgsQAAgLgFgFQgFgGgHAAQgFAAgFADQgGACgFAFIgCADQgHAKgIAAQgFAAgCgDQgEgDAAgGQAAgLAPgHQANgIAWAAQAMAAAJAEQAKADAFAHQAEAEABAHQACAIAAARIAAAlIABAKQABADACABIAEABQAIACgBAEQAAAGgHAEQgIAFgLAAQgFAAgGgGg");
	this.shape_18.setTransform(-60.3,2.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#006F46").s().p("AAsBTQgGgCAAgEQAAgGAHgCIAFgDQACgBABgGIABgVIAAgGIAAgyIgBgdIgPAmQgiBbgHgBQgEABgHgMQgHgNgRgnIgZg6IgBAuIgBAfIABAXQABAEABACIAGADQAHACAAAGQAAAEgGACQgGADgOAAQgNAAgGgDQgGgCAAgFQAAgEAGgDQAHgDAAgDQACgFACgfQABgeAAgkIAAgFQAAgMgBgEQgBgEgCgCIgGgDQgHgCAAgFQAAgFAFgBQAFgCARAAIARAAIAFABQACABAJAWIAGAQIAEAJQAcBGACAAQADABAKgaQALgYAPgqIACgIQAEgNAEgEQACgBAEgBIARgBQAPAAAGACQAFABAAAFQAAAFgHACIgDACQgEACgBAEQgBAFAAASIABBDQABAeACAEQAAADAGACIACABIAFADQAAAAAAABQABAAAAABQAAAAAAABQAAABAAABQAAAEgHACQgGADgUAAQgRAAgHgDg");
	this.shape_19.setTransform(-78,0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#006F46").s().p("Ag2BOQgFgFAAgHQAAgGAEgEQAEgFAGAAIAFABIADADIAEAEQADAFACAAQAGAAAHgJQAFgIAAgKQAAgKgHgTIgCgCIgTgpIgLgXQgCgEgHgDIAAAAQgEgCgCgCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgFAGgCQAGgCASAAQARAAAGACQAGACAAAEIgBAEIgCACIgFACQgEACAAACIADAJIAJAYIAJAWQADAGACAAQABAAADgGIAIgTIAIgXIADgLQAAgEgHgEQgGgDAAgDQgBgFAGgBQAFgCAOAAQAOAAAFACQAFACAAAEQAAAFgHABIgEACQgIAEgHAUIgDAJIgQAlQgTAygMAOQgMAPgSAAQgIAAgGgFg");
	this.shape_20.setTransform(-102,5.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#006F46").s().p("AAVA4IgHgHIgEADQgOAKgPAAQgRAAgLgKQgLgKAAgRQAAgTAOgJQAOgLAZAAQAFAAADACQADACAAAEQAAAGgIAAQgLAAgIAGQgGAGgBAKQABAJAFAGQAHAFAKAAQALAAAFgFQAFgFgBgMIAAgsQABgLgFgFQgEgGgIAAQgGAAgFADQgFACgFAFIgCADQgHAKgIAAQgFAAgDgDQgDgDAAgGQABgLAOgHQANgIAWAAQAMAAAJAEQAKADAFAHQADAEACAHQABAIAAARIAAAlIABAKQACADADABIADABQAHACAAAEQABAGgJAEQgIAFgKAAQgGAAgFgGg");
	this.shape_21.setTransform(-114.6,2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#006F46").s().p("AAXBVQgCgBABgFIAAgFIAAgCIgBgBIgEADIgFADQgHAFgGADQgHACgHAAQgWAAgOgPQgOgRAAgZQAAgdAQgRQAQgSAZAAIAIABQADABACACQACADAAADQAAAHgHAAIgDgBIgDAAQgNAAgIALQgIAJAAATQAAAUAJANQAJAMANAAQALAAAHgHQAHgGAAgOIAAghIAAg1QAAgJgBgDQgCgDgFgCIgDgBQgHgCAAgDQAAgEADgCQADgDAIgDIAOgEIALAAQAEAAACABQABADAAAFIAAAGIgBBJIABAxQAAAMACABIAIADQAHABAAAEQAAAGgRAFIgMADIgJABQgDAAgCgCg");
	this.shape_22.setTransform(-128.2,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006F46").s().p("AgUBUQgGgBAAgFQAAgFAGgCIADgBQADgBABgFQABgEAAgIIAAgIIAAgKIAAgNIgBgWQgBgHgCgBIgGgBQgHgDAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAIAIgFIARgGIAMgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAQABADAAAFIAAAHIAAAGIgBAdIAAAAIAAAdIABAQQABAFACACIAFABQAGADAAAFQAAAEgGACQgGACgPAAQgSAAgFgDgAgOg7QgFgEAAgGQAAgHAGgFQAFgEAIgBQAHAAAFAFQAFAFAAAGQAAAGgFAFQgGAEgHABQgIgBgFgEg");
	this.shape_23.setTransform(-139.5,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006F46").s().p("AgTBVQgGgCAAgFQAAgEAFgCIAGgDQACgCABgHIABgXIAAgTIAAgWIAAgJQAAgdgBgJQgCgIgCgCIgHgDQgIgCAAgEQAAgDADgCQACgCAIgDIAQgEIALgCQAEAAABACQACACAAAGIAAAJQgCArAAApIABApQABAJACABIAHAEQAFACAAAFQAAAEgGADQgGABgPAAQgRAAgGgCg");
	this.shape_24.setTransform(-146.8,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006F46").s().p("AgqAsQgRgRAAgbQAAgZARgSQATgSAZAAQAaAAAQARQAQAQAAAaQAAAbgRASQgSATgZAAQgaAAgQgSgAgWgjQgHAKAAAQQAAAWAKAQQAKAQANAAQAMAAAHgKQAIgKgBgQQAAgWgKgQQgKgPgNAAQgLAAgIAJg");
	this.shape_25.setTransform(-157.1,2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006F46").s().p("AAaBTQgGgCAAgEQAAgGAHgCIAGgDQACgBAAgIIABgcIAAgQIgBgFQgCgCgFgBQgGgBgWAAIgZABQgGAAgCACIgCADIAAAJIAAAKIABAcQABAIABABIAGADQAHACAAAGQAAAEgHACQgGADgTAAQgSAAgHgDQgGgCAAgEQAAgGAHgCIAFgDQADgCABgPIABgxIgBgtQgBgRgCgCIgHgFQgGgDAAgEQgBgFAGgBQAFgCAVAAQAVAAAFACQAGABAAAFQAAAEgHADIgGADQgCACgBAHIAAAjQAAAEAFACQADACASAAIAJAAIAZgBQAHgBADgBIAAgCIABgFIAAgFIgBgdQAAgHgCgBIgGgDQgHgDAAgEQAAgFAGgBQAFgCAVAAQAVAAAFACQAGABgBAFQABAFgIACIgFADQgDACgBAQIgBAwIABAsQABASACADIAHAEQAHADgBAFQABAEgHACQgHADgSAAQgTAAgHgDg");
	this.shape_26.setTransform(-173.2,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.1,-16,368.3,32.1);


(lib.ctarectanglegfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D83900").s().p("AqdCuIAAlbIU7AAIAAFbg");
	this.shape.setTransform(0,0,0.895,0.863);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-15,120,30);


(lib.backgroundgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._728x90holidaymainssidesdessertsbackground();
	this.instance.parent = this;
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


(lib.logogfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logokale("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.329,0.329,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.5,-57.5,115,115);


// stage content:
(lib._728x90holidaymainssidesdesserts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// we'll cook. you feast.
	this.instance = new lib.wellcookyoufeastgfx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.2,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// holiday-mains-sides-desserts
	this.instance_1 = new lib.holidaymainssidesdessertsgfx("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(218.3,34.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// order-now
	this.instance_2 = new lib.ordernowgfx("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(95,67.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// cta-rectangle
	this.instance_3 = new lib.ctarectanglegfx("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.5,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// logo
	this.instance_4 = new lib.logogfx("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(660.5,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

	// background
	this.instance_5 = new lib.backgroundgfx("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,32,728,115);
// library properties:
lib.properties = {
	id: 'B05D975968914DB498A86529549E84B3',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_728x90holidaymainssidesdessertsbackground.jpg", id:"_728x90holidaymainssidesdessertsbackground"}
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
an.compositions['B05D975968914DB498A86529549E84B3'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;