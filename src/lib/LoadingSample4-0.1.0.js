function LoadingSample4(height,background,color){
	base(this,LSprite,[]);
	var s = this,c = LGlobal.canvas;
	s.backgroundColor = background==null?"#000000":background;
	s.graphics.drawRect(1,s.backgroundColor,[0,0,LGlobal.width,LGlobal.height],true,s.backgroundColor);
	if(color==null)color = "#FFFFFF";
	s.arc = new LSprite();
	s.arc.x = LGlobal.width*0.5;
	s.arc.y = LGlobal.height*0.5;
	s.addChild(s.arc);
	for(var i=0;i<360;i++){
		s.arc.graphics.drawArc(1+i/36,color,[0,0,50,(2*Math.PI/360)*i,(2*Math.PI/360)*(i+2)]);
	}
	s.progress = 0;
	s.label = new LTextField();
	s.label.color=color;
	s.label.weight="bolder";
	s.label.size = 18;
	s.label.x = LGlobal.width*0.5;
	s.label.y = LGlobal.height*0.5-s.label.getHeight()*0.5;
	s.addChild(s.label);
	var shadow = new LDropShadowFilter(0,0,"#FFFFFF",30);
	s.arc.filters = [shadow];
	s.addEventListener(LEvent.ENTER_FRAME,s.onframe);
	s.setProgress(s.progress);
}
LoadingSample4.prototype.onframe = function(event){
	event.target.arc.rotate += 20;
};
LoadingSample4.prototype.setProgress = function (value){
	var s = this;
	if(value > 100)value=100;
	s.progress = value;
	s.label.text = value + "%";
	s.label.x = LGlobal.width*0.5-s.label.getWidth()*0.5;
};