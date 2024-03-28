// Garden Gnome Software - Skin
// Pano2VR 7.0.10/20025
// Filename: ??VR ?? - ?????.ggsk
// Generated 2024-03-28T17:35:34

function pano2vrSkin(player,base) {
	player.addVariable('vis_dropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_icon', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mdropdown', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_dropdown_b', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileA', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mobileb', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_type', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_bigfloor', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_cartagory', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_mdropdown_m', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__58=document.createElement('div');
		el.ggId="\ud5e4\ub4dc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__58.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__58.ggUpdatePosition=function (useTransition) {
		}
		el=me.__64=document.createElement('div');
		el.ggId="\ub85c\uace0";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__64.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__64.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me._image_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 19px;';
		hs+='left : 34px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((19px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me._rectangle_2);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 44px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 800;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("FORTUNE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me.__64.appendChild(me._text_2);
		me.__58.appendChild(me.__64);
		el=me.__62=document.createElement('div');
		el.ggId="\ud0c0\uc785";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 165px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__62.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__62.onclick=function (e) {
			player.setVariableValue('vis_dropdown', true);
			player.setVariableValue('vis_dropdown_b', false);
		}
		me.__62.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._text_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._text_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._text_1.style.transition='border-color 0s, color 0s';
				if (me._text_1.ggCurrentLogicStateBorderColor == 0) {
					me._text_1.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._text_1.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._text_1.logicBlock_bordercolor();
		me._text_1.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_1.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_1.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_1.style.transition='border-color 0s, color 0s';
				if (me._text_1.ggCurrentLogicStateTextColor == 0) {
					me._text_1.style.color="rgba(34,30,31,1)";
				}
				else {
					me._text_1.style.color="rgba(161,161,161,1)";
				}
			}
		}
		me._text_1.logicBlock_textcolor();
		me._text_1.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__63=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__63.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__63.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__63.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__63.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__63.style.transition='background-color 0s';
				if (me.__63.ggCurrentLogicStateBackgroundColor == 0) {
					me.__63.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__63.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__63.logicBlock_backgroundcolor();
		me.__63.ggUpdatePosition=function (useTransition) {
		}
		me._text_1.appendChild(me.__63);
		me.__62.appendChild(me._text_1);
		me.__58.appendChild(me.__62);
		el=me._b5=document.createElement('div');
		el.ggId="\ud0c0\uc785-b";
		el.ggDy=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 225px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 2px);';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b5.onclick=function (e) {
			player.setVariableValue('vis_dropdown_b', true);
			player.setVariableValue('vis_dropdown', false);
		}
		me._b5.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1b=document.createElement('div');
		els=me._text_1b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(0,0,0,0);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 30px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1b.ggUpdateText=function() {
			var params = [];
			var hs = player._("84B", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1b.ggUpdateText();
		el.appendChild(els);
		me._text_1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1b.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._text_1b.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._text_1b.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._text_1b.style.transition='border-color 0s, color 0s';
				if (me._text_1b.ggCurrentLogicStateBorderColor == 0) {
					me._text_1b.style.borderColor="rgba(0,0,0,1)";
				}
				else {
					me._text_1b.style.borderColor="rgba(0,0,0,0)";
				}
			}
		}
		me._text_1b.logicBlock_bordercolor();
		me._text_1b.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_1b.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_1b.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_1b.style.transition='border-color 0s, color 0s';
				if (me._text_1b.ggCurrentLogicStateTextColor == 0) {
					me._text_1b.style.color="rgba(34,30,31,1)";
				}
				else {
					me._text_1b.style.color="rgba(161,161,161,1)";
				}
			}
		}
		me._text_1b.logicBlock_textcolor();
		me._text_1b.onclick=function (e) {
			player.openNext("{node17}","");
		}
		me._text_1b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b10=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 2px;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__b10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b10.style.transition='background-color 0s';
				if (me.__b10.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b10.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b10.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b10.logicBlock_backgroundcolor();
		me.__b10.ggUpdatePosition=function (useTransition) {
		}
		me._text_1b.appendChild(me.__b10);
		me._b5.appendChild(me._text_1b);
		me.__58.appendChild(me._b5);
		el=me._text_8=document.createElement('div');
		els=me._text_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8";
		el.ggDy=3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(2,109,243,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 3px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("TYPE", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8.ggUpdateText();
		el.appendChild(els);
		me._text_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me._text_8);
		el=me._css_clalc_=document.createElement('div');
		el.ggId="CSS\uc5d0\uc11c clalc \uc0ac\uc6a9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 1px;';
		hs+='left : 185px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 185px);;';
		hs+='pointer-events:none;';
		hs+='min-width:230px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._css_clalc_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._css_clalc_.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #a1a1a1;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 30px);;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._css_clalc_.appendChild(me._rectangle_1);
		me.__58.appendChild(me._css_clalc_);
		el=me.__61=document.createElement('div');
		el.ggId="\ub77c\uc778";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__61.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__61.ggUpdatePosition=function (useTransition) {
		}
		me.__58.appendChild(me.__61);
		el=me.__60=document.createElement('div');
		el.ggId="\uc635\uc158\uc120\ud0dd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__60.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__60.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__60.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__60.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__60.style.transition='right 0s, top 0s';
				if (me.__60.ggCurrentLogicStatePosition == 0) {
					me.__60.style.right='10px';
					me.__60.style.top = 'calc(50% - (50px / 2))';
				}
				else {
					me.__60.style.right='30px';
					me.__60.style.top='calc(50% - ((50px + 0px) / 2) + 0px)';
				}
			}
		}
		me.__60.logicBlock_position();
		me.__60.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__60.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__60.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__60.style.transition='right 0s, top 0s';
				if (me.__60.ggCurrentLogicStateVisible == 0) {
					me.__60.style.visibility="hidden";
					me.__60.ggVisible=false;
				}
				else {
					me.__60.style.visibility=(Number(me.__60.style.opacity)>0||!me.__60.style.opacity)?'inherit':'hidden';
					me.__60.ggVisible=true;
				}
			}
		}
		me.__60.logicBlock_visible();
		me.__60.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7=document.createElement('div');
		els=me._text_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7.ggUpdateText();
		el.appendChild(els);
		me._text_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7.onclick=function (e) {
			player.setVariableValue('vis_mdropdown', !player.getVariableValue('vis_mdropdown'));
		}
		me._text_7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__map=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-map";
		el.ggDx=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : calc(50% - ((11px + 0px) / 2) + 9px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__map.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mdropdown') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__map.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__map.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__map.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__map.ggCurrentLogicStatePosition == 0) {
					me.__map.style.left = 'calc(50% - (11px / 2) + (0px / 2) + 9px)';
					me.__map.style.bottom='-8px';
				}
				else {
					me.__map.style.left='calc(50% - ((11px + 0px) / 2) + 9px)';
					me.__map.style.bottom='0px';
				}
			}
		}
		me.__map.logicBlock_position();
		me.__map.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_mdropdown') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__map.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__map.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__map.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__map.ggCurrentLogicStateAngle == 0) {
					me.__map.ggParameter.a = 180;
					me.__map.style.transform=parameterToTransform(me.__map.ggParameter);
				}
				else {
					me.__map.ggParameter.a = 0;
					me.__map.style.transform=parameterToTransform(me.__map.ggParameter);
				}
			}
		}
		me.__map.logicBlock_angle();
		me.__map.ggUpdatePosition=function (useTransition) {
		}
		me._text_7.appendChild(me.__map);
		me._rectangle_6.appendChild(me._text_7);
		me.__60.appendChild(me._rectangle_6);
		me.__58.appendChild(me.__60);
		el=me.__59=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 90px;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__59.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__59.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__59.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__59.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__59.style.transition='';
				if (me.__59.ggCurrentLogicStateVisible == 0) {
					me.__59.style.visibility="hidden";
					me.__59.ggVisible=false;
				}
				else {
					me.__59.style.visibility=(Number(me.__59.style.opacity)>0||!me.__59.style.opacity)?'inherit':'hidden';
					me.__59.ggVisible=true;
				}
			}
		}
		me.__59.logicBlock_visible();
		me.__59.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6pc=document.createElement('div');
		el.ggId="Rectangle 6-PC";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7pc=document.createElement('div');
		els=me._text_7pc__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-PC";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7pc.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce74\ud14c\uace0\ub9ac \ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7pc.ggUpdateText();
		el.appendChild(els);
		me._text_7pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7pc.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_7pc.ggCurrentLogicStateText != newLogicStateText) {
				me._text_7pc.ggCurrentLogicStateText = newLogicStateText;
				me._text_7pc.style.transition='';
				if (me._text_7pc.ggCurrentLogicStateText == 0) {
					if (me._text_7pc.ggUpdateText) {
					me._text_7pc.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce74\ud14c\uace0\ub9ac \ucf1c\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7pc.ggUpdateText();
					} else {
						if (me._text_7pc.ggUpdatePosition) me._text_7pc.ggUpdatePosition();
					}
				}
				else {
					if (me._text_7pc.ggUpdateText) {
					me._text_7pc.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce74\ud14c\uace0\ub9ac \ub044\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7pc.ggUpdateText();
					} else {
						if (me._text_7pc.ggUpdatePosition) me._text_7pc.ggUpdatePosition();
					}
				}
			}
		}
		me._text_7pc.logicBlock_text();
		me._text_7pc.onclick=function (e) {
			player.setVariableValue('vis_cartagory', !player.getVariableValue('vis_cartagory'));
		}
		me._text_7pc.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mappc=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-map-PC";
		el.ggDx=9;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -8px;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : calc(50% - ((11px + 0px) / 2) + 9px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__mappc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mappc.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__mappc.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__mappc.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__mappc.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__mappc.ggCurrentLogicStatePosition == 0) {
					me.__mappc.style.left = 'calc(50% - (11px / 2) + (0px / 2) + 9px)';
					me.__mappc.style.bottom='0px';
				}
				else {
					me.__mappc.style.left='calc(50% - ((11px + 0px) / 2) + 9px)';
					me.__mappc.style.bottom='-8px';
				}
			}
		}
		me.__mappc.logicBlock_position();
		me.__mappc.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__mappc.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__mappc.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__mappc.style.transition='left 0s, bottom 0s, transform 0s';
				if (me.__mappc.ggCurrentLogicStateAngle == 0) {
					me.__mappc.ggParameter.a = 0;
					me.__mappc.style.transform=parameterToTransform(me.__mappc.ggParameter);
				}
				else {
					me.__mappc.ggParameter.a = 180;
					me.__mappc.style.transform=parameterToTransform(me.__mappc.ggParameter);
				}
			}
		}
		me.__mappc.logicBlock_angle();
		me.__mappc.ggUpdatePosition=function (useTransition) {
		}
		me._text_7pc.appendChild(me.__mappc);
		me._rectangle_6pc.appendChild(me._text_7pc);
		me.__59.appendChild(me._rectangle_6pc);
		me.__58.appendChild(me.__59);
		me.divSkin.appendChild(me.__58);
		el=me._footer=document.createElement('div');
		el.ggId="Footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._footer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._footer.ggCurrentLogicStateSize = newLogicStateSize;
				me._footer.style.transition='width 0s, height 0s';
				if (me._footer.ggCurrentLogicStateSize == 0) {
					me._footer.style.width='100%';
					me._footer.style.height='110px';
					skin.updateSize(me._footer);
				}
				else if (me._footer.ggCurrentLogicStateSize == 1) {
					me._footer.style.width='100%';
					me._footer.style.height='100px';
					skin.updateSize(me._footer);
				}
				else {
					me._footer.style.width='100%';
					me._footer.style.height='70px';
					skin.updateSize(me._footer);
				}
			}
		}
		me._footer.logicBlock_size();
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_bg=document.createElement('div');
		el.ggId="Footer_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._footer_box=document.createElement('div');
		el.ggId="Footer_box";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer_box.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._footer_box.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 11px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 5px 10px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \uc704 VR\uc740 \uc2e4\uc81c \uacac\ubcf8\uc8fc\ud0dd\uc744 \ucd2c\uc601\ud55c \uc601\uc0c1\uc73c\ub85c \uc2dc\uacf5 \ud6c4, \ub2e4\uc18c \ucc28\uc774\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\u203b \uc704 VR\uc740 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac01\uc885 \uc804\uc2dc\ubb3c, \uc5f0\ucd9c\uc6a9 \uc870\uba85 \ub4f1\uc744 \ud65c\uc6a9\ud574 \uc2dc\uacf5\ud55c \ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \n\u203b \uacac\ubcf8\uc8fc\ud0dd\uc5d0 \uc2dc\uacf5\ub41c, \ubc14\ub2e5\uc7ac, \ubcbd\uc9c0\ub958, \ud0c0\uc77c\ub958, \uae30\uae30\ub958 \ubc0f \uae30\ud0c0 \uc81c\ud488\uc740 \uc785\uc8fc \uc2dc \ub3d9\uc9c8, \ub3d9\uac00\uc758 \uc81c\ud488\uc73c\ub85c \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_3.style.transition='';
				if (me._text_3.ggCurrentLogicStateVisible == 0) {
					me._text_3.style.visibility=(Number(me._text_3.style.opacity)>0||!me._text_3.style.opacity)?'inherit':'hidden';
					me._text_3.ggVisible=true;
				}
				else {
					me._text_3.style.visibility="hidden";
					me._text_3.ggVisible=false;
				}
			}
		}
		me._text_3.logicBlock_visible();
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me._footer_box.appendChild(me._text_3);
		el=me._text_3m=document.createElement('div');
		els=me._text_3m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3-M";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(161,161,161,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:16px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 9px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 5px 10px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_3m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u203b \uc704 VR\uc740 \uc2e4\uc81c \uacac\ubcf8\uc8fc\ud0dd\uc744 \ucd2c\uc601\ud55c \uc601\uc0c1\uc73c\ub85c \uc2dc\uacf5 \ud6c4, \ub2e4\uc18c \ucc28\uc774\uac00 \ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\u203b \uc704 VR\uc740 \uc785\uc8fc\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud574 \uac01\uc885 \uc804\uc2dc\ubb3c, \uc5f0\ucd9c\uc6a9 \uc870\uba85 \ub4f1\uc744 \ud65c\uc6a9\ud574 \uc2dc\uacf5\ud55c \ubd80\ubd84\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \n\u203b \uacac\ubcf8\uc8fc\ud0dd\uc5d0 \uc2dc\uacf5\ub41c, \ubc14\ub2e5\uc7ac, \ubcbd\uc9c0\ub958, \ud0c0\uc77c\ub958, \uae30\uae30\ub958 \ubc0f \uae30\ud0c0 \uc81c\ud488\uc740 \uc785\uc8fc \uc2dc \ub3d9\uc9c8, \ub3d9\uac00\uc758 \uc81c\ud488\uc73c\ub85c \ubcc0\uacbd\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3m.ggUpdateText();
		el.appendChild(els);
		me._text_3m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._text_3m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._text_3m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._text_3m.style.transition='';
				if (me._text_3m.ggCurrentLogicStateVisible == 0) {
					me._text_3m.style.visibility=(Number(me._text_3m.style.opacity)>0||!me._text_3m.style.opacity)?'inherit':'hidden';
					me._text_3m.ggVisible=true;
				}
				else {
					me._text_3m.style.visibility="hidden";
					me._text_3m.ggVisible=false;
				}
			}
		}
		me._text_3m.logicBlock_visible();
		me._text_3m.ggUpdatePosition=function (useTransition) {
		}
		me._footer_box.appendChild(me._text_3m);
		me._footer_bg.appendChild(me._footer_box);
		me._footer.appendChild(me._footer_bg);
		me.divSkin.appendChild(me._footer);
		el=me.__49=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4-\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50%;';
		hs+='left : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__49.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__49.ggUpdatePosition=function (useTransition) {
		}
		el=me.__51=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(34,30,31,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__51.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__51.ggUpdatePosition=function (useTransition) {
		}
		el=me.__52=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__52.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__52.ggUpdatePosition=function (useTransition) {
		}
		el=me.__54=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__54.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__54.ggUpdatePosition=function (useTransition) {
		}
		el=me.__56=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__56.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__56.ggUpdatePosition=function (useTransition) {
		}
		el=me._text2=document.createElement('div');
		els=me._text2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0bc\uc131 \uc2dc\uc2a4\ud15c \uc5d0\uc5b4\ucee8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text2.ggUpdateText();
		el.appendChild(els);
		me._text2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text2.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me._text2);
		el=me._text_40=document.createElement('div');
		els=me._text_40__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 25px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_40.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_40.ggUpdateText();
		el.appendChild(els);
		me._text_40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_40.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_40.ggCurrentLogicStateText != newLogicStateText) {
				me._text_40.ggCurrentLogicStateText = newLogicStateText;
				me._text_40.style.transition='';
				if (me._text_40.ggCurrentLogicStateText == 0) {
					if (me._text_40.ggUpdateText) {
					me._text_40.ggUpdateText=function() {
						var params = [];
						var hs = player._("84B", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_40.ggUpdateText();
					} else {
						if (me._text_40.ggUpdatePosition) me._text_40.ggUpdatePosition();
					}
				}
				else {
					if (me._text_40.ggUpdateText) {
					me._text_40.ggUpdateText=function() {
						var params = [];
						var hs = player._("84A", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_40.ggUpdateText();
					} else {
						if (me._text_40.ggUpdatePosition) me._text_40.ggUpdatePosition();
					}
				}
			}
		}
		me._text_40.logicBlock_text();
		me._text_40.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me._text_40);
		el=me.__57=document.createElement('div');
		els=me.__57__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc720\uc0c1\uc635\uc158";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(0,85,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : -35px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__57.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc720\uc0c1\uc635\uc158", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__57.ggUpdateText();
		el.appendChild(els);
		me.__57.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__57.ggUpdatePosition=function (useTransition) {
		}
		me.__56.appendChild(me.__57);
		me.__54.appendChild(me.__56);
		el=me.__55=document.createElement('div');
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 111%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__55.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__55.ggUpdatePosition=function (useTransition) {
		}
		el=me._text1=document.createElement('div');
		els=me._text1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\xb6 \uc124\uce58 \ub300\uc218 : 4\ub300 (\uac70\uc2e4, \uce68\uc2e41, \uce68\uc2e42, \uce68\uc2e43)\n\xb6 \uae30\ub2a5 : \ub0c9\/\ub09c\ubc29, \uacf5\uae30\uccad\uc815\n\xb6 \uc5d0\uc5b4\ucee8 \uc124\uce58 \ub300\uc218\ub294 \uacc4\uc57d\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text1.ggUpdateText();
		el.appendChild(els);
		me._text1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text1.ggUpdatePosition=function (useTransition) {
		}
		me.__55.appendChild(me._text1);
		me.__54.appendChild(me.__55);
		me.__52.appendChild(me.__54);
		el=me.__53=document.createElement('div');
		el.ggId="\uc0c1\ud488 \uc0ac\uc9c4";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 10%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__53.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__53.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 800%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 66%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me._image_6);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me._image_7);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs=basePath + 'images/image_8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -100px;';
		hs+='height : 77px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me.__53.appendChild(me._image_8);
		me.__52.appendChild(me.__53);
		el=me._text_50=document.createElement('div');
		els=me._text_50__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_50.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 \uc774\ubbf8\uc9c0\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc2e4\uc81c \uc640 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_50.ggUpdateText();
		el.appendChild(els);
		me._text_50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_50.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYWxlcnQtY2lyY2xlIiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz4KIDxsaW5lIHkxPSI4IiB4MT0iMTIiIHkyPSIxMiIgeDI9IjEyIi8+CiA8bGluZSB5MT0iMTYiIHgxPSIxMiIgeTI9IjE2IiB4Mj0iMTIuMDEiLz'+
			'4KPC9zdmc+Cg==';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me._text_50.appendChild(me._svg_10);
		me.__52.appendChild(me._text_50);
		me.__51.appendChild(me.__52);
		me.__49.appendChild(me.__51);
		el=me.__50=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__50.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__50.onclick=function (e) {
			me.__49.style.transition='none';
			me.__49.style.visibility='hidden';
			me.__49.ggVisible=false;
		}
		me.__50.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_21=document.createElement('div');
		els=me._svg_21__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzIiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTE9IjUiIHgxPSIxMiIgeTI9IjE5IiB4Mj0iMTIiLz4KIDxsaW5lIHkxPSIxMiIgeDE9IjUiIHkyPSIxMiIgeDI9IjE5Ii8+Cjwvc3ZnPgo=';
		me._svg_21__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_21.ggUpdatePosition=function (useTransition) {
		}
		me.__50.appendChild(me._svg_21);
		me.__49.appendChild(me.__50);
		me.divSkin.appendChild(me.__49);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=false;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 141px;';
		hs+='position : absolute;';
		hs+='top : 73px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me.__38=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4-\uc5d0\uc5b4\ucee8-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 70%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((70% + 0px) / 2) + 10px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\ubc30\uacbd-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 8px solid rgba(34,30,31,0.392157);';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4 -\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 95%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\uc0c1\ud488\uc815\ubcf4\uc81c\ubaa9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='border-bottom-style:dashed; border-bottom-width:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me._text0=document.createElement('div');
		els=me._text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\uc81c\ubaa9-text-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.627451);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 800;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc0bc\uc131 \uc2dc\uc2a4\ud15c \uc5d0\uc5b4\ucee8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text0.ggUpdateText();
		el.appendChild(els);
		me._text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text0.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._text0);
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(34,30,31,0.705882);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 700;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='bottom: 0px;';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 10px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("84A", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_4.ggCurrentLogicStateText != newLogicStateText) {
				me._text_4.ggCurrentLogicStateText = newLogicStateText;
				me._text_4.style.transition='';
				if (me._text_4.ggCurrentLogicStateText == 0) {
					if (me._text_4.ggUpdateText) {
					me._text_4.ggUpdateText=function() {
						var params = [];
						var hs = player._("84B", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4.ggUpdateText();
					} else {
						if (me._text_4.ggUpdatePosition) me._text_4.ggUpdatePosition();
					}
				}
				else {
					if (me._text_4.ggUpdateText) {
					me._text_4.ggUpdateText=function() {
						var params = [];
						var hs = player._("84A", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_4.ggUpdateText();
					} else {
						if (me._text_4.ggUpdatePosition) me._text_4.ggUpdatePosition();
					}
				}
			}
		}
		me._text_4.logicBlock_text();
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me._text_4);
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc720\uc0c1\uc635\uc158-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 999;';
		hs+='background : rgba(0,85,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc720\uc0c1\uc635\uc158", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		me.__43.appendChild(me.__45);
		el=me.__44=document.createElement('div');
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 110%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 111%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		el=me._text=document.createElement('div');
		els=me._text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc0c1\ud488\ub0b4\uc6a9-tex-\ubaa8\ubc14\uc77ct";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='line-height:20px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 10px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text.ggUpdateText=function() {
			var params = [];
			var hs = player._("\xb6 \uc124\uce58 \ub300\uc218 : 4\ub300 (\uac70\uc2e4, \uce68\uc2e41, \uce68\uc2e42, \uce68\uc2e43)\n\xb6 \uae30\ub2a5 : \ub0c9\/\ub09c\ubc29, \uacf5\uae30\uccad\uc815\n\xb6 \uc5d0\uc5b4\ucee8 \uc124\uce58 \ub300\uc218\ub294 \uacc4\uc57d\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text.ggUpdateText();
		el.appendChild(els);
		me._text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text.ggUpdatePosition=function (useTransition) {
		}
		me.__44.appendChild(me._text);
		me.__43.appendChild(me.__44);
		me.__41.appendChild(me.__43);
		el=me.__42=document.createElement('div');
		el.ggId="\uc0c1\ud488 \uc0ac\uc9c4-\ubaa8\ubc14\uc77c";
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 10%);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggDx=0;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 975%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((975% + 0px) / 2) + 18px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me.__42.appendChild(me._image_5);
		me.__41.appendChild(me.__42);
		el=me._text_5=document.createElement('div');
		els=me._text_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 5-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 0px;';
		hs+='color : #000000;';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf8 \uc774\ubbf8\uc9c0\ub294 \uc18c\ube44\uc790\uc758 \uc774\ud574\ub97c \ub3d5\uae30 \uc704\ud55c \uac83\uc73c\ub85c \uc2e4\uc81c \uc640 \ub2e4\ub97c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_5.ggUpdateText();
		el.appendChild(els);
		me._text_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9ImN1cnJlbnRDb2xvciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYWxlcnQtY2lyY2xlIiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTAiLz4KIDxsaW5lIHkxPSI4IiB4MT0iMTIiIHkyPSIxMiIgeDI9IjEyIi8+CiA8bGluZSB5MT0iMTYiIHgxPSIxMiIgeTI9IjE2IiB4Mj0iMTIuMDEiLz'+
			'4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1-\ubaa8\ubc14\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._text_5.appendChild(me._svg_1);
		me.__41.appendChild(me._text_5);
		me.__40.appendChild(me.__41);
		me.__38.appendChild(me.__40);
		el=me.__39=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.onclick=function (e) {
			me.__38.style.transition='none';
			me.__38.style.visibility='hidden';
			me.__38.ggVisible=false;
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_20=document.createElement('div');
		els=me._svg_20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzIiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTE9IjUiIHgxPSIxMiIgeTI9IjE5IiB4Mj0iMTIiLz4KIDxsaW5lIHkxPSIxMiIgeDE9IjUiIHkyPSIxMiIgeDI9IjE5Ii8+Cjwvc3ZnPgo=';
		me._svg_20__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2-\ubaa8\ubc14\uc77c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_20.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._svg_20);
		me.__38.appendChild(me.__39);
		me.divSkin.appendChild(me.__38);
		el=me.__5=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 26%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((26% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 155px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__5.style.transition='opacity 500ms linear 0ms';
				if (me.__5.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me.__5.style.opacity == 0.0) { me.__5.style.visibility="hidden"; } }, 505);
					me.__5.style.opacity=0;
				}
				else {
					me.__5.style.visibility=me.__5.ggVisible?'inherit':'hidden';
					me.__5.style.opacity=1;
				}
			}
		}
		me.__5.logicBlock_alpha();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__6=document.createElement('div');
		el.ggId="\uacf5\uac04 \uce74\ud14c\uace0\ub9ac";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\uc0ac\uc774\ub4dc\ubc14 \ub77c\uc778";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 6%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		me.__6.appendChild(me.__37);
		el=me.__7=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac\uc2a4\ud06c\ub864";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 3%;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__7.style.transition='';
				if (me.__7.ggCurrentLogicStateVisible == 0) {
					me.__7.style.visibility=(Number(me.__7.style.opacity)>0||!me.__7.style.opacity)?'inherit':'hidden';
					me.__7.ggVisible=true;
				}
				else {
					me.__7.style.visibility="hidden";
					me.__7.ggVisible=false;
				}
			}
		}
		me.__7.logicBlock_visible();
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 330px;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 155px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.65;
				me._scrollarea_1.ggDragInertiaY *= 0.65;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 0px; height: 97.344px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 0px; height: 97.344px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.65;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 78%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : calc(50% - ((78% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = 155;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = 330;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight - 0) || (!me._scrollarea_1.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 0;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 0;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me.__35=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__35;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud604\uad00";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_3.style.transition='background-color 0s';
				if (me._rectangle_3.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_3.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me._rectangle_3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rectangle_3.logicBlock_backgroundcolor();
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_9=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_9;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9.ggUpdateText();
		el.appendChild(els);
		me._text_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_9.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_9.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_9.style.transition='color 0s';
				if (me._text_9.ggCurrentLogicStateTextColor == 0) {
					me._text_9.style.color="rgba(255,255,255,1)";
				}
				else {
					me._text_9.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me._text_9.logicBlock_textcolor();
		me._text_9.onclick=function (e) {
			if (me._text_9.isDragging()) return;
			player.openNext("{node11}","");
		}
		me._text_9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__36=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__36;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ud604\uad00";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__36.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__36.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__36.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__36.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__36.style.transition='background-color 0s';
				if (me.__36.ggCurrentLogicStateBackgroundColor == 0) {
					me.__36.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__36.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__36.logicBlock_backgroundcolor();
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		me._text_9.appendChild(me.__36);
		me._rectangle_3.appendChild(me._text_9);
		me.__35.appendChild(me._rectangle_3);
		me._scrollarea_1__content.appendChild(me.__35);
		el=me.__29=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__29;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uac70\uc2e4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me.__32=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__32;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uac70\uc2e4\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__32.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__32.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__32.style.transition='background-color 0s';
				if (me.__32.ggCurrentLogicStateBackgroundColor == 0) {
					me.__32.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__32.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__32.logicBlock_backgroundcolor();
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		el=me.__33=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__33;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__33__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__33.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__33.ggUpdateText();
		el.appendChild(els);
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__33.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__33.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__33.style.transition='color 0s';
				if (me.__33.ggCurrentLogicStateTextColor == 0) {
					me.__33.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__33.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__33.logicBlock_textcolor();
		me.__33.onclick=function (e) {
			if (me.__33.isDragging()) return;
			player.openNext("{node2}","");
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me.__34=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__34;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uac70\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__34.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__34.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__34.style.transition='background-color 0s';
				if (me.__34.ggCurrentLogicStateBackgroundColor == 0) {
					me.__34.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__34.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__34.logicBlock_backgroundcolor();
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me.__33.appendChild(me.__34);
		me.__32.appendChild(me.__33);
		me.__29.appendChild(me.__32);
		me._scrollarea_1__content.appendChild(me.__29);
		el=me.__25=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__25;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubcf5\ub3c4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__26;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubcf5\ub3c4\ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__26.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__26.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__26.style.transition='background-color 0s';
				if (me.__26.ggCurrentLogicStateBackgroundColor == 0) {
					me.__26.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__26.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__26.logicBlock_backgroundcolor();
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me.__27=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__27;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__27__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubcf5\ub3c4 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__27.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ubcf5\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__27.ggUpdateText();
		el.appendChild(els);
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__27.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__27.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__27.style.transition='color 0s';
				if (me.__27.ggCurrentLogicStateTextColor == 0) {
					me.__27.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__27.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__27.logicBlock_textcolor();
		me.__27.onclick=function (e) {
			if (me.__27.isDragging()) return;
			player.openNext("{node1}","");
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me.__28=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__28;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ubcf5\ub3c4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ubcf5\ub3c4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__28.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__28.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__28.style.transition='background-color 0s';
				if (me.__28.ggCurrentLogicStateBackgroundColor == 0) {
					me.__28.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__28.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__28.logicBlock_backgroundcolor();
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me.__28);
		me.__26.appendChild(me.__27);
		me.__25.appendChild(me.__26);
		me._scrollarea_1__content.appendChild(me.__25);
		el=me.__110=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__110;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e41";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e41 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_3.style.transition='background-color 0s';
				if (me.__1_3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_3.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_3.logicBlock_backgroundcolor();
		me.__1_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_4.ggUpdateText();
		el.appendChild(els);
		me.__1_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_4.style.transition='color 0s';
				if (me.__1_4.ggCurrentLogicStateTextColor == 0) {
					me.__1_4.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_4.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_4.logicBlock_textcolor();
		me.__1_4.onclick=function (e) {
			if (me.__1_4.isDragging()) return;
			player.openNext("{node4}","");
		}
		me.__1_4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__24=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__24;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc695\uc2e4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__24.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__24.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__24.style.transition='background-color 0s';
				if (me.__24.ggCurrentLogicStateBackgroundColor == 0) {
					me.__24.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__24.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__24.logicBlock_backgroundcolor();
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me.__1_4.appendChild(me.__24);
		me.__1_3.appendChild(me.__1_4);
		me.__110.appendChild(me.__1_3);
		me._scrollarea_1__content.appendChild(me.__110);
		el=me.__16=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__16;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc8fc\ubc29";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me.__17=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__17;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc8fc\ubc29 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__17.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__17.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__17.style.transition='background-color 0s';
				if (me.__17.ggCurrentLogicStateBackgroundColor == 0) {
					me.__17.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__17.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__17.logicBlock_backgroundcolor();
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__18.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18.ggUpdateText();
		el.appendChild(els);
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__18.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__18.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__18.style.transition='color 0s';
				if (me.__18.ggCurrentLogicStateTextColor == 0) {
					me.__18.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__18.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__18.logicBlock_textcolor();
		me.__18.onclick=function (e) {
			if (me.__18.isDragging()) return;
			player.openNext("{node6}","");
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__19;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc8fc\ubc29";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__19.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__19.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__19.style.transition='background-color 0s';
				if (me.__19.ggCurrentLogicStateBackgroundColor == 0) {
					me.__19.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__19.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__19.logicBlock_backgroundcolor();
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me.__16.appendChild(me.__17);
		me._scrollarea_1__content.appendChild(me.__16);
		el=me.__14=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__14;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud32c\ud2b8\ub9ac1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud32c\ud2b8\ub9ac1 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac1"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_1.style.transition='background-color 0s';
				if (me.__1_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_1.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_1.logicBlock_backgroundcolor();
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac1 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud32c\ud2b8\ub9ac1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_2.ggUpdateText();
		el.appendChild(els);
		me.__1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac1"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_2.style.transition='color 0s';
				if (me.__1_2.ggCurrentLogicStateTextColor == 0) {
					me.__1_2.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_2.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_2.logicBlock_textcolor();
		me.__1_2.onclick=function (e) {
			if (me.__1_2.isDragging()) return;
			player.openNext("{node10}","");
		}
		me.__1_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__15=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__15;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ud32c\ud2b8\ub9ac";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__15.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac1"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__15.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__15.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__15.style.transition='background-color 0s';
				if (me.__15.ggCurrentLogicStateBackgroundColor == 0) {
					me.__15.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__15.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__15.logicBlock_backgroundcolor();
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		me.__1_2.appendChild(me.__15);
		me.__1_1.appendChild(me.__1_2);
		me.__14.appendChild(me.__1_1);
		me._scrollarea_1__content.appendChild(me.__14);
		el=me.__12=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__12;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e41";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e41 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_.style.transition='background-color 0s';
				if (me.__1_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_.logicBlock_backgroundcolor();
		me.__1_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_0.ggUpdateText();
		el.appendChild(els);
		me.__1_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_0.style.transition='color 0s';
				if (me.__1_0.ggCurrentLogicStateTextColor == 0) {
					me.__1_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_0.logicBlock_textcolor();
		me.__1_0.onclick=function (e) {
			if (me.__1_0.isDragging()) return;
			player.openNext("{node7}","");
		}
		me.__1_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__13;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e41";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__13.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__13.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__13.style.transition='background-color 0s';
				if (me.__13.ggCurrentLogicStateBackgroundColor == 0) {
					me.__13.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__13.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__13.logicBlock_backgroundcolor();
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		me.__1_0.appendChild(me.__13);
		me.__1_.appendChild(me.__1_0);
		me.__12.appendChild(me.__1_);
		me._scrollarea_1__content.appendChild(me.__12);
		el=me.__8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 210px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__9;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__9.style.transition='background-color 0s';
				if (me.__9.ggCurrentLogicStateBackgroundColor == 0) {
					me.__9.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__9.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__9.logicBlock_backgroundcolor();
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me.__10=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__10;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__10.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ub4dc\ub808\uc2a4\ub8f8", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__10.ggUpdateText();
		el.appendChild(els);
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__10.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__10.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__10.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__10.style.transition='color 0s';
				if (me.__10.ggCurrentLogicStateTextColor == 0) {
					me.__10.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__10.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__10.logicBlock_textcolor();
		me.__10.onclick=function (e) {
			if (me.__10.isDragging()) return;
			player.openNext("{node3}","");
		}
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__11;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ub4dc\ub808\uc2a4\ub8f8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__11.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__11.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__11.style.transition='background-color 0s';
				if (me.__11.ggCurrentLogicStateBackgroundColor == 0) {
					me.__11.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__11.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__11.logicBlock_backgroundcolor();
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		me.__10.appendChild(me.__11);
		me.__9.appendChild(me.__10);
		me.__8.appendChild(me.__9);
		me._scrollarea_1__content.appendChild(me.__8);
		el=me.__22=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__22;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e42";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e42 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_1.style.transition='background-color 0s';
				if (me.__2_1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_1.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__2_1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_1.logicBlock_backgroundcolor();
		me.__2_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_2.ggUpdateText();
		el.appendChild(els);
		me.__2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2_2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2_2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2_2.style.transition='color 0s';
				if (me.__2_2.ggCurrentLogicStateTextColor == 0) {
					me.__2_2.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2_2.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_2.logicBlock_textcolor();
		me.__2_2.onclick=function (e) {
			if (me.__2_2.isDragging()) return;
			player.openNext("{node5}","");
		}
		me.__2_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__23;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc695\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__23.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__23.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__23.style.transition='background-color 0s';
				if (me.__23.ggCurrentLogicStateBackgroundColor == 0) {
					me.__23.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__23.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__23.logicBlock_backgroundcolor();
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__2_2.appendChild(me.__23);
		me.__2_1.appendChild(me.__2_2);
		me.__22.appendChild(me.__2_1);
		me._scrollarea_1__content.appendChild(me.__22);
		el=me.__20=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__20;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e42";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 270px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e42 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_.style.transition='background-color 0s';
				if (me.__2_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__2_.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_.logicBlock_backgroundcolor();
		me.__2_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_0.ggUpdateText();
		el.appendChild(els);
		me.__2_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2_0.style.transition='color 0s';
				if (me.__2_0.ggCurrentLogicStateTextColor == 0) {
					me.__2_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2_0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_0.logicBlock_textcolor();
		me.__2_0.onclick=function (e) {
			if (me.__2_0.isDragging()) return;
			player.openNext("{node8}","");
		}
		me.__2_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__21;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e42";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__21.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__21.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__21.style.transition='background-color 0s';
				if (me.__21.ggCurrentLogicStateBackgroundColor == 0) {
					me.__21.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__21.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__21.logicBlock_backgroundcolor();
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		me.__2_0.appendChild(me.__21);
		me.__2_.appendChild(me.__2_0);
		me.__20.appendChild(me.__2_);
		me._scrollarea_1__content.appendChild(me.__20);
		el=me.__30=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__30;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e43";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3_;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e43 \ubc30\uacbd";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_.style.transition='background-color 0s';
				if (me.__3_.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__3_.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3_.logicBlock_backgroundcolor();
		me.__3_.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3_0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__3_0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43 \ud14d\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3_0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3_0.ggUpdateText();
		el.appendChild(els);
		me.__3_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3_0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3_0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3_0.style.transition='color 0s';
				if (me.__3_0.ggCurrentLogicStateTextColor == 0) {
					me.__3_0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__3_0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__3_0.logicBlock_textcolor();
		me.__3_0.onclick=function (e) {
			if (me.__3_0.isDragging()) return;
			player.openNext("{node9}","");
		}
		me.__3_0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__31=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__31;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e43";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__31.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__31.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__31.style.transition='background-color 0s';
				if (me.__31.ggCurrentLogicStateBackgroundColor == 0) {
					me.__31.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__31.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__31.logicBlock_backgroundcolor();
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__3_0.appendChild(me.__31);
		me.__3_.appendChild(me.__3_0);
		me.__30.appendChild(me.__3_);
		me._scrollarea_1__content.appendChild(me.__30);
		me.__7.appendChild(me._scrollarea_1);
		me.__6.appendChild(me.__7);
		el=me._b=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac\uc2a4\ud06c\ub864-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 3%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._b.style.transition='';
				if (me._b.ggCurrentLogicStateVisible == 0) {
					me._b.style.visibility=(Number(me._b.style.opacity)>0||!me._b.style.opacity)?'inherit':'hidden';
					me._b.ggVisible=true;
				}
				else {
					me._b.style.visibility="hidden";
					me._b.ggVisible=false;
				}
			}
		}
		me._b.logicBlock_visible();
		me._b.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1b=document.createElement('div');
		els=me._scrollarea_1b__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 330px;';
		hs+='left : 0px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 155px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1b.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1b.ggHorScrollVisible || diffX == 0 || me._scrollarea_1b.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1b.ggScrollPosX = (me._scrollarea_1b__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1b.ggScrollPosX = Math.max(me._scrollarea_1b.ggScrollPosX, 0);
			me._scrollarea_1b.ggScrollPosX = Math.min(me._scrollarea_1b.ggScrollPosX, me._scrollarea_1b__horScrollBg.offsetWidth - me._scrollarea_1b__horScrollFg.offsetWidth);
			me._scrollarea_1b__horScrollFg.style.left = me._scrollarea_1b.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1b.ggScrollPosX / (me._scrollarea_1b__horScrollBg.offsetWidth - me._scrollarea_1b__horScrollFg.offsetWidth);
			me._scrollarea_1b__content.style.left = -(Math.round((me._scrollarea_1b.ggContentWidth * (1.0 - me._scrollarea_1b.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1b.ggContentLeftOffset + 'px';
			me._scrollarea_1b.ggScrollPosXPercent = (me._scrollarea_1b__horScrollFg.offsetLeft / me._scrollarea_1b__horScrollBg.offsetWidth);
		}
		me._scrollarea_1b.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1b.ggHorScrollVisible || diffX == 0 || me._scrollarea_1b.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1b.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1b.ggScrollPosX >= me._scrollarea_1b__horScrollBg.offsetWidth - me._scrollarea_1b__horScrollFg.offsetWidth)) {
					me._scrollarea_1b.ggScrollPosX = Math.min(me._scrollarea_1b.ggScrollPosX, me._scrollarea_1b__horScrollBg.offsetWidth - me._scrollarea_1b__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1b.ggScrollPosX <= 0)) {
					me._scrollarea_1b.ggScrollPosX = Math.max(me._scrollarea_1b.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1b__horScrollFg.style.left = me._scrollarea_1b.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1b.ggScrollPosX / (me._scrollarea_1b__horScrollBg.offsetWidth - me._scrollarea_1b__horScrollFg.offsetWidth);
			me._scrollarea_1b__content.style.left = -(Math.round((me._scrollarea_1b.ggContentWidth * (1.0 - me._scrollarea_1b.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1b.ggContentLeftOffset + 'px';
			me._scrollarea_1b.ggScrollPosXPercent = (me._scrollarea_1b__horScrollFg.offsetLeft / me._scrollarea_1b__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1b.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1b.ggVertScrollVisible || diffY == 0 || me._scrollarea_1b.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1b.ggScrollPosY = (me._scrollarea_1b__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1b.ggScrollPosY = Math.max(me._scrollarea_1b.ggScrollPosY, 0);
			me._scrollarea_1b.ggScrollPosY = Math.min(me._scrollarea_1b.ggScrollPosY, me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
			me._scrollarea_1b__vertScrollFg.style.top = me._scrollarea_1b.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1b.ggScrollPosY / (me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
			me._scrollarea_1b__content.style.top = -(Math.round((me._scrollarea_1b.ggContentHeight * (1.0 - me._scrollarea_1b.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1b.ggContentTopOffset + 'px';
			me._scrollarea_1b.ggScrollPosYPercent = (me._scrollarea_1b__vertScrollFg.offsetTop / me._scrollarea_1b__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1b.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1b.ggVertScrollVisible || diffY == 0 || me._scrollarea_1b.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1b.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1b.ggScrollPosY >= me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight)) {
					me._scrollarea_1b.ggScrollPosY = Math.min(me._scrollarea_1b.ggScrollPosY, me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1b.ggScrollPosY <= 0)) {
					me._scrollarea_1b.ggScrollPosY = Math.max(me._scrollarea_1b.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1b__vertScrollFg.style.top = me._scrollarea_1b.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1b.ggScrollPosY / (me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
			me._scrollarea_1b__content.style.top = -(Math.round((me._scrollarea_1b.ggContentHeight * (1.0 - me._scrollarea_1b.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1b.ggContentTopOffset + 'px';
			me._scrollarea_1b.ggScrollPosYPercent = (me._scrollarea_1b__vertScrollFg.offsetTop / me._scrollarea_1b__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1b.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1b.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1b.ggHPercentVisible);
					me._scrollarea_1b.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1b.clientWidth - (me._scrollarea_1b.ggVertScrollVisible ? 0 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1b.clientWidth - (me._scrollarea_1b.ggVertScrollVisible ? 0 : 0))) * me._scrollarea_1b.ggHPercentVisible);
					me._scrollarea_1b.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1b.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1b.ggVPercentVisible);
					me._scrollarea_1b.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1b.clientHeight - (me._scrollarea_1b.ggHorScrollVisible ? 0 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1b.clientHeight - (me._scrollarea_1b.ggHorScrollVisible ? 0 : 0))) * me._scrollarea_1b.ggVPercentVisible);
					me._scrollarea_1b.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1b__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1b.ggDragInertiaX *= 0.65;
				me._scrollarea_1b.ggDragInertiaY *= 0.65;
				me._scrollarea_1b.ggScrollByX(me._scrollarea_1b.ggDragInertiaX);
				me._scrollarea_1b.ggScrollByY(me._scrollarea_1b.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1b.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1b.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 50);
			me._scrollarea_1b__content.onmouseup = null;
			me._scrollarea_1b__content.onmousemove = null;
			me._scrollarea_1b__content.ontouchend = null;
			me._scrollarea_1b__content.ontouchmove = null;
			me._scrollarea_1b__content.onpointerup = null;
			me._scrollarea_1b__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1b.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1b__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1b.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1b.ggDragStartY) > 10) me._scrollarea_1b.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1b.ggDragLastX) * me._scrollarea_1b.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1b.ggDragLastY) * me._scrollarea_1b.ggVPercentVisible;
			me._scrollarea_1b.ggDragInertiaX = -diffX;
			me._scrollarea_1b.ggDragInertiaY = -diffY;
			me._scrollarea_1b.ggDragLastX = eventX;
			me._scrollarea_1b.ggDragLastY = eventY;
			me._scrollarea_1b.ggScrollByX(-diffX);
			me._scrollarea_1b.ggScrollByY(-diffY);
		}
		me._scrollarea_1b__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1b.ggDragLastX = me._scrollarea_1b.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1b.ggDragLastY = me._scrollarea_1b.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1b__content.onmouseup = me._scrollarea_1b__content.mousetouchend;
			me._scrollarea_1b__content.ontouchend = me._scrollarea_1b__content.mousetouchend;
			me._scrollarea_1b__content.onmousemove = me._scrollarea_1b__content.mousetouchmove;
			me._scrollarea_1b__content.ontouchmove = me._scrollarea_1b__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1b__content.onpointerup = me._scrollarea_1b__content.ontouchend;
				me._scrollarea_1b__content.onpointermove = me._scrollarea_1b__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1b__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1b__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1b__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1b__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 0px; height: 97.344px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1b__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 0px; height: 97.344px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1b.ggScrollPosY = 0;
		me._scrollarea_1b.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1b.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1b.ggDragInertiaY *= 0.65;
					me._scrollarea_1b.ggScrollByY(me._scrollarea_1b.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1b.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1b.ggDragLastY;
				me._scrollarea_1b.ggDragInertiaY = diffY;
				me._scrollarea_1b.ggDragLastY = e.clientY;
				me._scrollarea_1b.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1b.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1b.ggDragInertiaY *= 0.65;
					me._scrollarea_1b.ggScrollByY(me._scrollarea_1b.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1b.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1b.ggDragLastY;
				me._scrollarea_1b.ggDragInertiaY = diffY;
				me._scrollarea_1b.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1b.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1b.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1b.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1b.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1b__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1b.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1b.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1b.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1b.ggScrollByYSmooth(30 * me._scrollarea_1b.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1b__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 0px; height: 0px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 78%;';
		hs+='left : 0%;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((78% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1b.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = 155;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = 330;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1b.ggScrollPosY / me._scrollarea_1b.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1b.ggHorScrollVisible && contentHeight > this.clientHeight - 0) || (!me._scrollarea_1b.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1b__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1b__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1b.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1b__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1b__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1b.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1b.ggVertScrollVisible) {
					me._scrollarea_1b.ggAvailableWidth = me._scrollarea_1b.clientWidth - 0;
					if (me._scrollarea_1b.ggHorScrollVisible) {
						me._scrollarea_1b.ggAvailableHeight = me._scrollarea_1b.clientHeight - 0;
						me._scrollarea_1b.ggAvailableHeightWithScale = me._scrollarea_1b.getBoundingClientRect().height - me._scrollarea_1b__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1b__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1b.ggAvailableHeight = me._scrollarea_1b.clientHeight;
						me._scrollarea_1b.ggAvailableHeightWithScale = me._scrollarea_1b.getBoundingClientRect().height;
						me._scrollarea_1b__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1b__vertScrollBg.style.height = me._scrollarea_1b.ggAvailableHeight + 'px';
					me._scrollarea_1b.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1b.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1b.ggVPercentVisible > 1.0) me._scrollarea_1b.ggVPercentVisible = 1.0;
					me._scrollarea_1b.ggScrollHeight =  Math.round(me._scrollarea_1b__vertScrollBg.offsetHeight * me._scrollarea_1b.ggVPercentVisible);
					me._scrollarea_1b__vertScrollFg.style.height = me._scrollarea_1b.ggScrollHeight + 'px';
					me._scrollarea_1b.ggScrollPosY = me._scrollarea_1b.ggScrollPosYPercent * me._scrollarea_1b.ggAvailableHeight;
					me._scrollarea_1b.ggScrollPosY = Math.min(me._scrollarea_1b.ggScrollPosY, me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
					me._scrollarea_1b__vertScrollFg.style.top = me._scrollarea_1b.ggScrollPosY + 'px';
					if (me._scrollarea_1b.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1b.ggScrollPosY / (me._scrollarea_1b__vertScrollBg.offsetHeight - me._scrollarea_1b__vertScrollFg.offsetHeight);
						me._scrollarea_1b__content.style.top = -(Math.round((me._scrollarea_1b.ggContentHeight * (1.0 - me._scrollarea_1b.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1b.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1b.ggAvailableWidth = me._scrollarea_1b.clientWidth;
					me._scrollarea_1b.ggScrollPosY = 0;
					me._scrollarea_1b.ggScrollPosYPercent = 0.0;
					me._scrollarea_1b__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1b__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1b.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1b.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1b);
					me._scrollarea_1b.ggUpdatePosition();
				}
			}
		}
		el=me._b4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._b4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud604\uad00-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b4.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_3b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="Rectangle 3-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_3b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_3b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_3b.style.transition='background-color 0s';
				if (me._rectangle_3b.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_3b.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me._rectangle_3b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rectangle_3b.logicBlock_backgroundcolor();
		me._rectangle_3b.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_9b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._text_9b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._text_9b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 9-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_9b.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud604\uad00", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_9b.ggUpdateText();
		el.appendChild(els);
		me._text_9b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_9b.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._text_9b.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._text_9b.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._text_9b.style.transition='color 0s';
				if (me._text_9b.ggCurrentLogicStateTextColor == 0) {
					me._text_9b.style.color="rgba(255,255,255,1)";
				}
				else {
					me._text_9b.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me._text_9b.logicBlock_textcolor();
		me._text_9b.onclick=function (e) {
			if (me._text_9b.isDragging()) return;
			player.openNext("{node21}","");
		}
		me._text_9b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b9=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b9;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ud604\uad00-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud604\uad00"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b9.style.transition='background-color 0s';
				if (me.__b9.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b9.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b9.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b9.logicBlock_backgroundcolor();
		me.__b9.ggUpdatePosition=function (useTransition) {
		}
		me._text_9b.appendChild(me.__b9);
		me._rectangle_3b.appendChild(me._text_9b);
		me._b4.appendChild(me._rectangle_3b);
		me._scrollarea_1b__content.appendChild(me._b4);
		el=me._b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uac70\uc2e4-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b2.ggUpdatePosition=function (useTransition) {
		}
		el=me._b3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._b3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uac70\uc2e4\ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._b3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._b3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._b3.style.transition='background-color 0s';
				if (me._b3.ggCurrentLogicStateBackgroundColor == 0) {
					me._b3.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me._b3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._b3.logicBlock_backgroundcolor();
		me._b3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b7=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b7;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__b7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uac70\uc2e4 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__b7.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uac70\uc2e4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__b7.ggUpdateText();
		el.appendChild(els);
		me.__b7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b7.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__b7.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__b7.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__b7.style.transition='color 0s';
				if (me.__b7.ggCurrentLogicStateTextColor == 0) {
					me.__b7.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__b7.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__b7.logicBlock_textcolor();
		me.__b7.onclick=function (e) {
			if (me.__b7.isDragging()) return;
			player.openNext("{node12}","");
		}
		me.__b7.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b8=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b8;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uac70\uc2e4-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b8.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uac70\uc2e4"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b8.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b8.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b8.style.transition='background-color 0s';
				if (me.__b8.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b8.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b8.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b8.logicBlock_backgroundcolor();
		me.__b8.ggUpdatePosition=function (useTransition) {
		}
		me.__b7.appendChild(me.__b8);
		me._b3.appendChild(me.__b7);
		me._b2.appendChild(me._b3);
		me._scrollarea_1b__content.appendChild(me._b2);
		el=me.__1b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e41-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1b2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e41 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_b3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_b3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_b3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_b3.style.transition='background-color 0s';
				if (me.__1_b3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_b3.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_b3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_b3.logicBlock_backgroundcolor();
		me.__1_b3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_b4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e41 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_b4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_b4.ggUpdateText();
		el.appendChild(els);
		me.__1_b4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_b4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_b4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_b4.style.transition='color 0s';
				if (me.__1_b4.ggCurrentLogicStateTextColor == 0) {
					me.__1_b4.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_b4.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_b4.logicBlock_textcolor();
		me.__1_b4.onclick=function (e) {
			if (me.__1_b4.isDragging()) return;
			player.openNext("{node14}","");
		}
		me.__1_b4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b6=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b6;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc695\uc2e4-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b6.style.transition='background-color 0s';
				if (me.__b6.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b6.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b6.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b6.logicBlock_backgroundcolor();
		me.__b6.ggUpdatePosition=function (useTransition) {
		}
		me.__1_b4.appendChild(me.__b6);
		me.__1_b3.appendChild(me.__1_b4);
		me.__1b2.appendChild(me.__1_b3);
		me._scrollarea_1b__content.appendChild(me.__1b2);
		el=me._b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc8fc\ubc29-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 90px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b3=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b3;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc8fc\ubc29 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__b3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b3.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b3.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b3.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b3.style.transition='background-color 0s';
				if (me.__b3.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b3.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__b3.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__b3.logicBlock_backgroundcolor();
		me.__b3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b4=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b4;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__b4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc8fc\ubc29 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__b4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc8fc\ubc29", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__b4.ggUpdateText();
		el.appendChild(els);
		me.__b4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b4.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__b4.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__b4.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__b4.style.transition='color 0s';
				if (me.__b4.ggCurrentLogicStateTextColor == 0) {
					me.__b4.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__b4.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__b4.logicBlock_textcolor();
		me.__b4.onclick=function (e) {
			if (me.__b4.isDragging()) return;
			player.openNext("{node16}","");
		}
		me.__b4.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b5=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b5;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc8fc\ubc29-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b5.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc8fc\ubc29"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b5.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b5.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b5.style.transition='background-color 0s';
				if (me.__b5.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b5.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b5.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b5.logicBlock_backgroundcolor();
		me.__b5.ggUpdatePosition=function (useTransition) {
		}
		me.__b4.appendChild(me.__b5);
		me.__b3.appendChild(me.__b4);
		me._b1.appendChild(me.__b3);
		me._scrollarea_1b__content.appendChild(me._b1);
		el=me.__1b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud32c\ud2b8\ub9ac1-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1b1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud32c\ud2b8\ub9ac1 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_b1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_b1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_b1.style.transition='background-color 0s';
				if (me.__1_b1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_b1.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_b1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_b1.logicBlock_backgroundcolor();
		me.__1_b1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_b2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud32c\ud2b8\ub9ac1 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_b2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud32c\ud2b8\ub9ac", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_b2.ggUpdateText();
		el.appendChild(els);
		me.__1_b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_b2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_b2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_b2.style.transition='color 0s';
				if (me.__1_b2.ggCurrentLogicStateTextColor == 0) {
					me.__1_b2.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_b2.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_b2.logicBlock_textcolor();
		me.__1_b2.onclick=function (e) {
			if (me.__1_b2.isDragging()) return;
			player.openNext("{node20}","");
		}
		me.__1_b2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ud32c\ud2b8\ub9ac-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ud32c\ud2b8\ub9ac"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b2.style.transition='background-color 0s';
				if (me.__b2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b2.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b2.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b2.logicBlock_backgroundcolor();
		me.__b2.ggUpdatePosition=function (useTransition) {
		}
		me.__1_b2.appendChild(me.__b2);
		me.__1_b1.appendChild(me.__1_b2);
		me.__1b1.appendChild(me.__1_b1);
		me._scrollarea_1b__content.appendChild(me.__1b1);
		el=me.__1b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e41-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e41 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1_b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1_b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1_b.style.transition='background-color 0s';
				if (me.__1_b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1_b.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__1_b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__1_b.logicBlock_backgroundcolor();
		me.__1_b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1_b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1_b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1_b0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e41 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__1_b0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1_b0.ggUpdateText();
		el.appendChild(els);
		me.__1_b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_b0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__1_b0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__1_b0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__1_b0.style.transition='color 0s';
				if (me.__1_b0.ggCurrentLogicStateTextColor == 0) {
					me.__1_b0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__1_b0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__1_b0.logicBlock_textcolor();
		me.__1_b0.onclick=function (e) {
			if (me.__1_b0.isDragging()) return;
			player.openNext("{node17}","");
		}
		me.__1_b0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e41-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__1b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1b0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e41"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__1b0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__1b0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__1b0.style.transition='background-color 0s';
				if (me.__1b0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__1b0.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__1b0.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__1b0.logicBlock_backgroundcolor();
		me.__1b0.ggUpdatePosition=function (useTransition) {
		}
		me.__1_b0.appendChild(me.__1b0);
		me.__1_b.appendChild(me.__1_b0);
		me.__1b.appendChild(me.__1_b);
		me._scrollarea_1b__content.appendChild(me.__1b);
		el=me._b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 180px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._b0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b.style.transition='background-color 0s';
				if (me.__b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__b.logicBlock_backgroundcolor();
		me.__b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__b0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub4dc\ub808\uc2a4\ub8f8 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__b0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e41", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__b0.ggUpdateText();
		el.appendChild(els);
		me.__b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__b0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__b0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__b0.style.transition='color 0s';
				if (me.__b0.ggCurrentLogicStateTextColor == 0) {
					me.__b0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__b0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__b0.logicBlock_textcolor();
		me.__b0.onclick=function (e) {
			if (me.__b0.isDragging()) return;
			player.openNext("{node13}","");
		}
		me.__b0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\ub4dc\ub808\uc2a4\ub8f8-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__b1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\ub4dc\ub808\uc2a4\ub8f8"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__b1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__b1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__b1.style.transition='background-color 0s';
				if (me.__b1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__b1.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__b1.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__b1.logicBlock_backgroundcolor();
		me.__b1.ggUpdatePosition=function (useTransition) {
		}
		me.__b0.appendChild(me.__b1);
		me.__b.appendChild(me.__b0);
		me._b0.appendChild(me.__b);
		me._scrollarea_1b__content.appendChild(me._b0);
		el=me.__2b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e42-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 210px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2b1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_b1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_b1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uc695\uc2e42 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_b1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_b1.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_b1.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_b1.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_b1.style.transition='background-color 0s';
				if (me.__2_b1.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_b1.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__2_b1.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_b1.logicBlock_backgroundcolor();
		me.__2_b1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_b2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc695\uc2e42 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_b2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc695\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_b2.ggUpdateText();
		el.appendChild(els);
		me.__2_b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_b2.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2_b2.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2_b2.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2_b2.style.transition='color 0s';
				if (me.__2_b2.ggCurrentLogicStateTextColor == 0) {
					me.__2_b2.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2_b2.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_b2.logicBlock_textcolor();
		me.__2_b2.onclick=function (e) {
			if (me.__2_b2.isDragging()) return;
			player.openNext("{node15}","");
		}
		me.__2_b2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2b2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2b2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uc695\uc2e42-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__2b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2b2.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uc695\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2b2.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2b2.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2b2.style.transition='background-color 0s';
				if (me.__2b2.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2b2.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__2b2.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__2b2.logicBlock_backgroundcolor();
		me.__2b2.ggUpdatePosition=function (useTransition) {
		}
		me.__2_b2.appendChild(me.__2b2);
		me.__2_b1.appendChild(me.__2_b2);
		me.__2b1.appendChild(me.__2_b1);
		me._scrollarea_1b__content.appendChild(me.__2b1);
		el=me.__2b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e42-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 240px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e42 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2_b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2_b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2_b.style.transition='background-color 0s';
				if (me.__2_b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2_b.style.backgroundColor="rgba(34,30,31,0.627451)";
				}
				else {
					me.__2_b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__2_b.logicBlock_backgroundcolor();
		me.__2_b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2_b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2_b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2_b0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e42 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__2_b0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e42", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2_b0.ggUpdateText();
		el.appendChild(els);
		me.__2_b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2_b0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__2_b0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__2_b0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__2_b0.style.transition='color 0s';
				if (me.__2_b0.ggCurrentLogicStateTextColor == 0) {
					me.__2_b0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__2_b0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__2_b0.logicBlock_textcolor();
		me.__2_b0.onclick=function (e) {
			if (me.__2_b0.isDragging()) return;
			player.openNext("{node18}","");
		}
		me.__2_b0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e42-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__2b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2b0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e42"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__2b0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__2b0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__2b0.style.transition='background-color 0s';
				if (me.__2b0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__2b0.style.backgroundColor="rgba(34,30,31,1)";
				}
				else {
					me.__2b0.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__2b0.logicBlock_backgroundcolor();
		me.__2b0.ggUpdatePosition=function (useTransition) {
		}
		me.__2_b0.appendChild(me.__2b0);
		me.__2_b.appendChild(me.__2_b0);
		me.__2b.appendChild(me.__2_b);
		me._scrollarea_1b__content.appendChild(me.__2b);
		el=me.__3b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e43-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 270px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_b=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3_b;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\uce68\uc2e43 \ubc30\uacbd-b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((40% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_b.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3_b.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3_b.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3_b.style.transition='background-color 0s';
				if (me.__3_b.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3_b.style.backgroundColor="rgba(2,109,243,0.627451)";
				}
				else {
					me.__3_b.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me.__3_b.logicBlock_backgroundcolor();
		me.__3_b.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3_b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3_b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__3_b0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uce68\uc2e43 \ud14d\uc2a4\ud2b8-b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__3_b0.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce68\uc2e43", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3_b0.ggUpdateText();
		el.appendChild(els);
		me.__3_b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3_b0.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me.__3_b0.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me.__3_b0.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me.__3_b0.style.transition='color 0s';
				if (me.__3_b0.ggCurrentLogicStateTextColor == 0) {
					me.__3_b0.style.color="rgba(255,255,255,1)";
				}
				else {
					me.__3_b0.style.color="rgba(34,30,31,1)";
				}
			}
		}
		me.__3_b0.logicBlock_textcolor();
		me.__3_b0.onclick=function (e) {
			if (me.__3_b0.isDragging()) return;
			player.openNext("{node19}","");
		}
		me.__3_b0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__3b0=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3b0;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-\uce68\uc2e43-b";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(170,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 9px;';
		hs+='position : absolute;';
		hs+='right : -39px;';
		hs+='top : calc(50% - ((9px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__3b0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3b0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player._(me.ggUserdata.title) == "\uce68\uc2e43"))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me.__3b0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me.__3b0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me.__3b0.style.transition='background-color 0s';
				if (me.__3b0.ggCurrentLogicStateBackgroundColor == 0) {
					me.__3b0.style.backgroundColor="rgba(2,109,243,1)";
				}
				else {
					me.__3b0.style.backgroundColor="rgba(170,0,0,0)";
				}
			}
		}
		me.__3b0.logicBlock_backgroundcolor();
		me.__3b0.ggUpdatePosition=function (useTransition) {
		}
		me.__3_b0.appendChild(me.__3b0);
		me.__3_b.appendChild(me.__3_b0);
		me.__3b.appendChild(me.__3_b);
		me._scrollarea_1b__content.appendChild(me.__3b);
		me._b.appendChild(me._scrollarea_1b);
		me.__6.appendChild(me._b);
		me.__5.appendChild(me.__6);
		me.divSkin.appendChild(me.__5);
		el=me.__3=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : 72px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__3.style.transition='right 0s, top 0s';
				if (me.__3.ggCurrentLogicStatePosition == 0) {
					me.__3.style.right='10px';
					me.__3.style.top='58px';
				}
				else {
					me.__3.style.right='30px';
					me.__3.style.top='72px';
				}
			}
		}
		me.__3.logicBlock_position();
		me.__3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bigfloor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_mdropdown') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3.style.transition='right 0s, top 0s';
				if (me.__3.ggCurrentLogicStateVisible == 0) {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
				else if (me.__3.ggCurrentLogicStateVisible == 1) {
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				else {
					me.__3.style.visibility="hidden";
					me.__3.ggVisible=false;
				}
			}
		}
		me.__3.logicBlock_visible();
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,161,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 120%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._rectangle_4);
		el=me._map_10=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_10.style.transition='';
				if (me._map_10.ggCurrentLogicStateVisible == 0) {
					me._map_10.style.visibility=(Number(me._map_10.style.opacity)>0||!me._map_10.style.opacity)?'inherit':'hidden';
					if (me._map_10.ggMapNotLoaded && me._map_10.ggInitMap) {
						me._map_10.ggInitMap(false);
						me._map_10.ggInitMapMarkers(true);
					}
					me._map_10.ggVisible=true;
				}
				else {
					me._map_10.style.visibility="hidden";
					if (me._map_10.ggClearMap) me._map_10.ggClearMap();
					me._map_10.ggVisible=false;
				}
			}
		}
		me._map_10.logicBlock_visible();
		me._map_10.ggCurrentLogicStateVisible = -1;
		me._map_10.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
		}
		me._map_10.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_10.ggUpdateConditionResize();
		}
		me.__3.appendChild(me._map_10);
		el=me._map_20=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_20.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_20.style.transition='';
				if (me._map_20.ggCurrentLogicStateVisible == 0) {
					me._map_20.style.visibility=(Number(me._map_20.style.opacity)>0||!me._map_20.style.opacity)?'inherit':'hidden';
					if (me._map_20.ggMapNotLoaded && me._map_20.ggInitMap) {
						me._map_20.ggInitMap(false);
						me._map_20.ggInitMapMarkers(true);
					}
					me._map_20.ggVisible=true;
				}
				else {
					me._map_20.style.visibility="hidden";
					if (me._map_20.ggClearMap) me._map_20.ggClearMap();
					me._map_20.ggVisible=false;
				}
			}
		}
		me._map_20.logicBlock_visible();
		me._map_20.ggCurrentLogicStateVisible = -1;
		me._map_20.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
		}
		me._map_20.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_20.ggUpdateConditionResize();
		}
		me.__3.appendChild(me._map_20);
		el=me.__4=document.createElement('div');
		els=me.__4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -24px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__4.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__4.ggUpdateText();
		el.appendChild(els);
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.onclick=function (e) {
			player.setVariableValue('vis_bigfloor', true);
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me.__4);
		me.divSkin.appendChild(me.__3);
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
			me._markertemplate__normalInst.ggEvent_sizechanged();
			me._markertemplate__activeInst.ggEvent_sizechanged();
		}
		me.divSkin.appendChild(me._markertemplate);
		el=me.__0=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 443px;';
		hs+='left : calc(50% - ((650px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((443px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 650px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 720))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__0.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__0.ggCurrentLogicStateSize = newLogicStateSize;
				me.__0.style.transition='width 0s, height 0s';
				if (me.__0.ggCurrentLogicStateSize == 0) {
					me.__0.style.width='340px';
					me.__0.style.height='231px';
					me.__0.style.left = 'calc(50% - (340px / 2))';
					me.__0.style.top = 'calc(50% - (231px / 2))';
					skin.updateSize(me.__0);
				}
				else {
					me.__0.style.width='650px';
					me.__0.style.height='443px';
					me.__0.style.left = 'calc(50% - (650px / 2))';
					me.__0.style.top = 'calc(50% - (443px / 2))';
					skin.updateSize(me.__0);
				}
			}
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_bigfloor') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__0.style.transition='width 0s, height 0s';
				if (me.__0.ggCurrentLogicStateVisible == 0) {
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
				else {
					me.__0.style.visibility="hidden";
					me.__0.ggVisible=false;
				}
			}
		}
		me.__0.logicBlock_visible();
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87.8104%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.8104% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1.style.transition='';
				if (me._map_1.ggCurrentLogicStateVisible == 0) {
					me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
					if (me._map_1.ggMapNotLoaded && me._map_1.ggInitMap) {
						me._map_1.ggInitMap(false);
						me._map_1.ggInitMapMarkers(true);
					}
					me._map_1.ggVisible=true;
				}
				else {
					me._map_1.style.visibility="hidden";
					if (me._map_1.ggClearMap) me._map_1.ggClearMap();
					me._map_1.ggVisible=false;
				}
			}
		}
		me._map_1.logicBlock_visible();
		me._map_1.ggCurrentLogicStateVisible = -1;
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1.ggUpdateConditionResize();
		}
		me.__0.appendChild(me._map_1);
		el=me._map_2=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87.8104%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((87.8104% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2.style.transition='';
				if (me._map_2.ggCurrentLogicStateVisible == 0) {
					me._map_2.style.visibility=(Number(me._map_2.style.opacity)>0||!me._map_2.style.opacity)?'inherit':'hidden';
					if (me._map_2.ggMapNotLoaded && me._map_2.ggInitMap) {
						me._map_2.ggInitMap(false);
						me._map_2.ggInitMapMarkers(true);
					}
					me._map_2.ggVisible=true;
				}
				else {
					me._map_2.style.visibility="hidden";
					if (me._map_2.ggClearMap) me._map_2.ggClearMap();
					me._map_2.ggVisible=false;
				}
			}
		}
		me._map_2.logicBlock_visible();
		me._map_2.ggCurrentLogicStateVisible = -1;
		me._map_2.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
		}
		me._map_2.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2.ggUpdateConditionResize();
		}
		me.__0.appendChild(me._map_2);
		el=me.__2=document.createElement('div');
		el.ggId="\ucde8\uc18c\ubc15\uc2a4-\ud3c9\uba74\ub3c4-\ud655\ub300";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -55px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:0px 3px 10px rgba(0,0,0,0.3);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.onclick=function (e) {
			player.setVariableValue('vis_bigfloor', false);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzIiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPGxpbmUgeTE9IjUiIHgxPSIxMiIgeTI9IjE5IiB4Mj0iMTIiLz4KIDxsaW5lIHkxPSIxMiIgeDE9IjUiIHkyPSIxMiIgeDI9IjE5Ii8+Cjwvc3ZnPgo=';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2-\ud3c9\uba74\ub3c4-\ud655\ub300";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:45,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 90%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._svg_2);
		me.__0.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5 \ud655\ub300 \ubc30\uacbd";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : rgba(161,161,161,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me.__1);
		me.divSkin.appendChild(me.__0);
		el=me._mobile_catagory=document.createElement('div');
		el.ggId="mobile catagory";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 79px;';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile_catagory.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mobile_catagory.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 480))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mobile_catagory.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mobile_catagory.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mobile_catagory.style.transition='left 0s, bottom 0s';
				if (me._mobile_catagory.ggCurrentLogicStatePosition == 0) {
					me._mobile_catagory.style.left='0px';
					me._mobile_catagory.style.bottom='110px';
				}
				else {
					me._mobile_catagory.style.left='0px';
					me._mobile_catagory.style.bottom='79px';
				}
			}
		}
		me._mobile_catagory.logicBlock_position();
		me._mobile_catagory.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile_catagory.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile_catagory.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile_catagory.style.transition='left 0s, bottom 0s';
				if (me._mobile_catagory.ggCurrentLogicStateVisible == 0) {
					me._mobile_catagory.style.visibility=(Number(me._mobile_catagory.style.opacity)>0||!me._mobile_catagory.style.opacity)?'inherit':'hidden';
					me._mobile_catagory.ggVisible=true;
				}
				else {
					me._mobile_catagory.style.visibility="hidden";
					me._mobile_catagory.ggVisible=false;
				}
			}
		}
		me._mobile_catagory.logicBlock_visible();
		me._mobile_catagory.ggUpdatePosition=function (useTransition) {
		}
		el=me.__=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c \ud558\ubd80 \ub77c\uc778";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 1px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		me._mobile_catagory.appendChild(me.__);
		el=me._m2=document.createElement('div');
		el.ggId="\uc635\uc158\uc120\ud0dd-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 420))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m2.style.transition='right 0s, top 0s';
				if (me._m2.ggCurrentLogicStatePosition == 0) {
					me._m2.style.right='10px';
					me._m2.style.top = 'calc(50% - (44px / 2))';
				}
				else {
					me._m2.style.right='30px';
					me._m2.style.top='calc(50% - ((44px + 0px) / 2) + 0px)';
				}
			}
		}
		me._m2.logicBlock_position();
		me._m2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6m=document.createElement('div');
		el.ggId="Rectangle 6-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6m.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_8m=document.createElement('div');
		els=me._text_8m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 8-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_8m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud3c9\uba74\ub3c4", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_8m.ggUpdateText();
		el.appendChild(els);
		me._text_8m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_8m.onclick=function (e) {
			player.setVariableValue('vis_mdropdown_m', !player.getVariableValue('vis_mdropdown_m'));
			player.setVariableValue('vis_cartagory', true);
		}
		me._text_8m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mapm=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-map-m";
		el.ggDx=9;
		el.ggParameter={ rx:0,ry:0,a:180,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : calc(50% - ((11px + 0px) / 2) + 9px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__mapm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mapm.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_mdropdown_m') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__mapm.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__mapm.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__mapm.style.transition='left 0s, top 0s, transform 0s';
				if (me.__mapm.ggCurrentLogicStatePosition == 0) {
					me.__mapm.style.left = 'calc(50% - (11px / 2) + (0px / 2) + 9px)';
					me.__mapm.style.top='-8px';
				}
				else {
					me.__mapm.style.left='calc(50% - ((11px + 0px) / 2) + 9px)';
					me.__mapm.style.top='0px';
				}
			}
		}
		me.__mapm.logicBlock_position();
		me.__mapm.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_mdropdown_m') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__mapm.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__mapm.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__mapm.style.transition='left 0s, top 0s, transform 0s';
				if (me.__mapm.ggCurrentLogicStateAngle == 0) {
					me.__mapm.ggParameter.a = 0;
					me.__mapm.style.transform=parameterToTransform(me.__mapm.ggParameter);
				}
				else {
					me.__mapm.ggParameter.a = 180;
					me.__mapm.style.transform=parameterToTransform(me.__mapm.ggParameter);
				}
			}
		}
		me.__mapm.logicBlock_angle();
		me.__mapm.ggUpdatePosition=function (useTransition) {
		}
		me._text_8m.appendChild(me.__mapm);
		me._rectangle_6m.appendChild(me._text_8m);
		me._m2.appendChild(me._rectangle_6m);
		me._mobile_catagory.appendChild(me._m2);
		el=me._m1=document.createElement('div');
		el.ggId="\uce74\ud14c\uace0\ub9ac-m";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 44px;';
		hs+='position : absolute;';
		hs+='right : 90px;';
		hs+='top : calc(50% - ((44px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6mm=document.createElement('div');
		el.ggId="Rectangle 6-mm";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6mm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6mm.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_7m=document.createElement('div');
		els=me._text_7m__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 7-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(34,30,31,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 15px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_7m.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uce74\ud14c\uace0\ub9ac \ub044\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_7m.ggUpdateText();
		el.appendChild(els);
		me._text_7m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_7m.logicBlock_text = function() {
			var newLogicStateText;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStateText = 0;
			}
			else {
				newLogicStateText = -1;
			}
			if (me._text_7m.ggCurrentLogicStateText != newLogicStateText) {
				me._text_7m.ggCurrentLogicStateText = newLogicStateText;
				me._text_7m.style.transition='';
				if (me._text_7m.ggCurrentLogicStateText == 0) {
					if (me._text_7m.ggUpdateText) {
					me._text_7m.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce74\ud14c\uace0\ub9ac \ucf1c\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7m.ggUpdateText();
					} else {
						if (me._text_7m.ggUpdatePosition) me._text_7m.ggUpdatePosition();
					}
				}
				else {
					if (me._text_7m.ggUpdateText) {
					me._text_7m.ggUpdateText=function() {
						var params = [];
						var hs = player._("\uce74\ud14c\uace0\ub9ac \ub044\uae30", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
					me._text_7m.ggUpdateText();
					} else {
						if (me._text_7m.ggUpdatePosition) me._text_7m.ggUpdatePosition();
					}
				}
			}
		}
		me._text_7m.logicBlock_text();
		me._text_7m.onclick=function (e) {
			player.setVariableValue('vis_cartagory', !player.getVariableValue('vis_cartagory'));
			player.setVariableValue('vis_mdropdown_m', false);
		}
		me._text_7m.ggUpdatePosition=function (useTransition) {
		}
		el=me.__mapmm=document.createElement('div');
		el.ggId="\ud0c0\uc785 \ub9c8\ucee4-map-mm";
		el.ggDx=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 8px;';
		hs+='left : calc(50% - ((11px + 0px) / 2) + 9px);';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 11px;';
		hs+='pointer-events:auto;';
		hs+='clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__mapmm.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__mapmm.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__mapmm.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__mapmm.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__mapmm.style.transition='left 0s, top 0s, transform 0s';
				if (me.__mapmm.ggCurrentLogicStatePosition == 0) {
					me.__mapmm.style.left = 'calc(50% - (11px / 2) + (0px / 2) + 9px)';
					me.__mapmm.style.top='0px';
				}
				else {
					me.__mapmm.style.left='calc(50% - ((11px + 0px) / 2) + 9px)';
					me.__mapmm.style.top='-8px';
				}
			}
		}
		me.__mapmm.logicBlock_position();
		me.__mapmm.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_cartagory') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me.__mapmm.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me.__mapmm.ggCurrentLogicStateAngle = newLogicStateAngle;
				me.__mapmm.style.transition='left 0s, top 0s, transform 0s';
				if (me.__mapmm.ggCurrentLogicStateAngle == 0) {
					me.__mapmm.ggParameter.a = 180;
					me.__mapmm.style.transform=parameterToTransform(me.__mapmm.ggParameter);
				}
				else {
					me.__mapmm.ggParameter.a = 0;
					me.__mapmm.style.transform=parameterToTransform(me.__mapmm.ggParameter);
				}
			}
		}
		me.__mapmm.logicBlock_angle();
		me.__mapmm.ggUpdatePosition=function (useTransition) {
		}
		me._text_7m.appendChild(me.__mapmm);
		me._rectangle_6mm.appendChild(me._text_7m);
		me._m1.appendChild(me._rectangle_6mm);
		me._mobile_catagory.appendChild(me._m1);
		me.divSkin.appendChild(me._mobile_catagory);
		el=me._m=document.createElement('div');
		el.ggId="\ubbf8\ub2c8\ub9f5-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 190px;';
		hs+='height : 150px;';
		hs+='position : absolute;';
		hs+='right : 30px;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._m.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._m.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._m.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._m.style.transition='right 0s, bottom 0s';
				if (me._m.ggCurrentLogicStatePosition == 0) {
					me._m.style.right='10px';
					me._m.style.bottom='220px';
				}
				else {
					me._m.style.right='30px';
					me._m.style.bottom='190px';
				}
			}
		}
		me._m.logicBlock_position();
		me._m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mdropdown_m') == true)) && 
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_bigfloor') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._m.style.transition='right 0s, bottom 0s';
				if (me._m.ggCurrentLogicStateVisible == 0) {
					me._m.style.visibility=(Number(me._m.style.opacity)>0||!me._m.style.opacity)?'inherit':'hidden';
					me._m.ggVisible=true;
				}
				else if (me._m.ggCurrentLogicStateVisible == 1) {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
				else {
					me._m.style.visibility="hidden";
					me._m.ggVisible=false;
				}
			}
		}
		me._m.logicBlock_visible();
		me._m.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4m=document.createElement('div');
		el.ggId="Rectangle 4-m";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(161,161,161,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 120%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4m.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me._rectangle_4m);
		el=me._map_1m=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map 1-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84a") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_1m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_1m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_1m.style.transition='';
				if (me._map_1m.ggCurrentLogicStateVisible == 0) {
					me._map_1m.style.visibility=(Number(me._map_1m.style.opacity)>0||!me._map_1m.style.opacity)?'inherit':'hidden';
					if (me._map_1m.ggMapNotLoaded && me._map_1m.ggInitMap) {
						me._map_1m.ggInitMap(false);
						me._map_1m.ggInitMapMarkers(true);
					}
					me._map_1m.ggVisible=true;
				}
				else {
					me._map_1m.style.visibility="hidden";
					if (me._map_1m.ggClearMap) me._map_1m.ggClearMap();
					me._map_1m.ggVisible=false;
				}
			}
		}
		me._map_1m.logicBlock_visible();
		me._map_1m.ggCurrentLogicStateVisible = -1;
		me._map_1m.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
		}
		me._map_1m.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_1m.ggUpdateConditionResize();
		}
		me._m.appendChild(me._map_1m);
		el=me._map_2m=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan02';
		el.ggId="Map 2-m";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 88%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_2m.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_2m.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("84b") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_2m.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_2m.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_2m.style.transition='';
				if (me._map_2m.ggCurrentLogicStateVisible == 0) {
					me._map_2m.style.visibility=(Number(me._map_2m.style.opacity)>0||!me._map_2m.style.opacity)?'inherit':'hidden';
					if (me._map_2m.ggMapNotLoaded && me._map_2m.ggInitMap) {
						me._map_2m.ggInitMap(false);
						me._map_2m.ggInitMapMarkers(true);
					}
					me._map_2m.ggVisible=true;
				}
				else {
					me._map_2m.style.visibility="hidden";
					if (me._map_2m.ggClearMap) me._map_2m.ggClearMap();
					me._map_2m.ggVisible=false;
				}
			}
		}
		me._map_2m.logicBlock_visible();
		me._map_2m.ggCurrentLogicStateVisible = -1;
		me._map_2m.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2m.ggCalculateFloorplanSize(mapDetails);
				me._map_2m.ggShowSimpleFloorplan(mapDetails);
				me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2m.ggRadar) me._map_2m.ggRadar.update();
		}
		me._map_2m.ggUpdatePosition=function (useTransition) {
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_sizechanged();
			}
			me._map_2m.ggUpdateConditionResize();
		}
		me._m.appendChild(me._map_2m);
		el=me._m0=document.createElement('div');
		els=me._m0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud06c\uac8c\ubcf4\uae30-m";
		el.ggDx=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -24px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 10px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._m0.ggUpdateText=function() {
			var params = [];
			var hs = player._("+ \ud06c\uac8c\ubcf4\uae30", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._m0.ggUpdateText();
		el.appendChild(els);
		me._m0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m0.onclick=function (e) {
			player.setVariableValue('vis_bigfloor', true);
			player.setVariableValue('vis_mdropdown_m', false);
		}
		me._m0.ggUpdatePosition=function (useTransition) {
		}
		me._m.appendChild(me._m0);
		me.divSkin.appendChild(me._m);
		me._text_1.logicBlock_bordercolor();
		me._text_1.logicBlock_textcolor();
		me.__63.logicBlock_backgroundcolor();
		me._text_1b.logicBlock_bordercolor();
		me._text_1b.logicBlock_textcolor();
		me.__b10.logicBlock_backgroundcolor();
		me.__60.logicBlock_position();
		me.__60.logicBlock_visible();
		me.__map.logicBlock_position();
		me.__map.logicBlock_angle();
		me.__59.logicBlock_visible();
		me._text_7pc.logicBlock_text();
		me.__mappc.logicBlock_position();
		me.__mappc.logicBlock_angle();
		me._footer.logicBlock_size();
		me._text_3.logicBlock_visible();
		me._text_3m.logicBlock_visible();
		me._text_40.logicBlock_text();
		me._timer_1.logicBlock_visible();
		me._text_4.logicBlock_text();
		me.__5.logicBlock_alpha();
		me.__7.logicBlock_visible();
		me._rectangle_3.logicBlock_backgroundcolor();
		me._text_9.logicBlock_textcolor();
		me.__36.logicBlock_backgroundcolor();
		me.__32.logicBlock_backgroundcolor();
		me.__33.logicBlock_textcolor();
		me.__34.logicBlock_backgroundcolor();
		me.__26.logicBlock_backgroundcolor();
		me.__27.logicBlock_textcolor();
		me.__28.logicBlock_backgroundcolor();
		me.__1_3.logicBlock_backgroundcolor();
		me.__1_4.logicBlock_textcolor();
		me.__24.logicBlock_backgroundcolor();
		me.__17.logicBlock_backgroundcolor();
		me.__18.logicBlock_textcolor();
		me.__19.logicBlock_backgroundcolor();
		me.__1_1.logicBlock_backgroundcolor();
		me.__1_2.logicBlock_textcolor();
		me.__15.logicBlock_backgroundcolor();
		me.__1_.logicBlock_backgroundcolor();
		me.__1_0.logicBlock_textcolor();
		me.__13.logicBlock_backgroundcolor();
		me.__9.logicBlock_backgroundcolor();
		me.__10.logicBlock_textcolor();
		me.__11.logicBlock_backgroundcolor();
		me.__2_1.logicBlock_backgroundcolor();
		me.__2_2.logicBlock_textcolor();
		me.__23.logicBlock_backgroundcolor();
		me.__2_.logicBlock_backgroundcolor();
		me.__2_0.logicBlock_textcolor();
		me.__21.logicBlock_backgroundcolor();
		me.__3_.logicBlock_backgroundcolor();
		me.__3_0.logicBlock_textcolor();
		me.__31.logicBlock_backgroundcolor();
		me._b.logicBlock_visible();
		me._rectangle_3b.logicBlock_backgroundcolor();
		me._text_9b.logicBlock_textcolor();
		me.__b9.logicBlock_backgroundcolor();
		me._b3.logicBlock_backgroundcolor();
		me.__b7.logicBlock_textcolor();
		me.__b8.logicBlock_backgroundcolor();
		me.__1_b3.logicBlock_backgroundcolor();
		me.__1_b4.logicBlock_textcolor();
		me.__b6.logicBlock_backgroundcolor();
		me.__b3.logicBlock_backgroundcolor();
		me.__b4.logicBlock_textcolor();
		me.__b5.logicBlock_backgroundcolor();
		me.__1_b1.logicBlock_backgroundcolor();
		me.__1_b2.logicBlock_textcolor();
		me.__b2.logicBlock_backgroundcolor();
		me.__1_b.logicBlock_backgroundcolor();
		me.__1_b0.logicBlock_textcolor();
		me.__1b0.logicBlock_backgroundcolor();
		me.__b.logicBlock_backgroundcolor();
		me.__b0.logicBlock_textcolor();
		me.__b1.logicBlock_backgroundcolor();
		me.__2_b1.logicBlock_backgroundcolor();
		me.__2_b2.logicBlock_textcolor();
		me.__2b2.logicBlock_backgroundcolor();
		me.__2_b.logicBlock_backgroundcolor();
		me.__2_b0.logicBlock_textcolor();
		me.__2b0.logicBlock_backgroundcolor();
		me.__3_b.logicBlock_backgroundcolor();
		me.__3_b0.logicBlock_textcolor();
		me.__3b0.logicBlock_backgroundcolor();
		me.__3.logicBlock_position();
		me.__3.logicBlock_visible();
		me._map_10.ggMarkerInstances=[];
		me._map_10.ggLastNodeId=null;
		me._map_10.ggSimpleFloorplanMarkerArray=[];
		me._map_10.ggFloorplanWidth=0;
		me._map_10.ggFloorplanHeight=0;
		me._map_10__mapdiv=document.createElement('div');
		me._map_10__mapdiv.className='ggskin ggskin_map';
		me._map_10.appendChild(me._map_10__mapdiv);
		me._map_10__img=document.createElement('img');
		me._map_10__img.className='ggskin ggskin_map';
		me._map_10__mapdiv.appendChild(me._map_10__img);
		me._map_10.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_10.ggRadar.update=function() {
			var radar=me._map_10.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_10.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_10.ggFilteredIds.length > 0 && me._map_10.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_10.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_10__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_10__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_10.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_10__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_10.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_10.clientWidth;
			var mapHeight = me._map_10.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_10.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_10__img.setAttribute('src', imageFilename);
		me._map_10__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_10.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_10.ggFloorplanHeight / 2 + 'px;width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_10__img.setAttribute('style','width:' + me._map_10.ggFloorplanWidth + 'px;height:' + me._map_10.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_10.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_10.clientWidth / me._map_10.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_10.ggFloorplanHeight = me._map_10.clientHeight;
				me._map_10.ggFloorplanWidth = me._map_10.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_10.ggFloorplanWidth = me._map_10.clientWidth;
				me._map_10.ggFloorplanHeight = me._map_10.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_10.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_10.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_10.ggPermeableMap = true;
			} else {
				me._map_10.ggPermeableMap = false;
			}
			me._map_10.ggCalculateFloorplanSize(mapDetails);
			me._map_10.ggShowSimpleFloorplan(mapDetails);
			me._map_10.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_10.ggMapNotLoaded = false;
		}
		me._map_10.ggClearMap=function() {
			me._map_10.ggClearMapMarkers();
			me._map_10.ggMapNotLoaded = true;
		}
		me._map_10.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_10.ggMapId = mapId;
			if (!me._map_10.ggMapNotLoaded) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap();
				me._map_10.ggInitMapMarkers();
			}
		}
		me._map_10.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_10.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
					var xPos = (me._map_10.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_10.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_10.ggHMarkerAnchorOffset;
					yPos -= me._map_10.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_10.style['z-index'] + 2;
				}
			}
		}
		me._map_10.ggInitMapMarkers=function() {
			me._map_10.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_10.ggFilteredIds = [];
			if (me._map_10.ggFilter != '') {
				var filter = me._map_10.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_10.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_10.ggFilteredIds.length > 0) ids = me._map_10.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_10.ggMapId);
				if (coords.length>=2) {
					me._map_10.ggHMarkerAnchorOffset = 12;
					me._map_10.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_10.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_10.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_10__mapdiv.appendChild(marker);
				}
			}
			me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_10);
		}
		me._map_10.ggClearMapMarkers=function() {
			for (id in me._map_10.ggSimpleFloorplanMarkerArray) {
				if (me._map_10.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_10__mapdiv.removeChild(me._map_10.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_10.ggMarkerInstances=[];
			me._map_10.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_10.logicBlock_visible();
		me._map_20.ggMarkerInstances=[];
		me._map_20.ggLastNodeId=null;
		me._map_20.ggSimpleFloorplanMarkerArray=[];
		me._map_20.ggFloorplanWidth=0;
		me._map_20.ggFloorplanHeight=0;
		me._map_20__mapdiv=document.createElement('div');
		me._map_20__mapdiv.className='ggskin ggskin_map';
		me._map_20.appendChild(me._map_20__mapdiv);
		me._map_20__img=document.createElement('img');
		me._map_20__img.className='ggskin ggskin_map';
		me._map_20__mapdiv.appendChild(me._map_20__img);
		me._map_20.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_20.ggRadar.update=function() {
			var radar=me._map_20.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_20.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_20.ggFilteredIds.length > 0 && me._map_20.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_20.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_20__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_20__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_20.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_20__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_20.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_20.clientWidth;
			var mapHeight = me._map_20.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_20.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_20__img.setAttribute('src', imageFilename);
		me._map_20__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_20.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_20.ggFloorplanHeight / 2 + 'px;width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_20__img.setAttribute('style','width:' + me._map_20.ggFloorplanWidth + 'px;height:' + me._map_20.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_20.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_20.clientWidth / me._map_20.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_20.ggFloorplanHeight = me._map_20.clientHeight;
				me._map_20.ggFloorplanWidth = me._map_20.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_20.ggFloorplanWidth = me._map_20.clientWidth;
				me._map_20.ggFloorplanHeight = me._map_20.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_20.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_20.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_20.ggPermeableMap = true;
			} else {
				me._map_20.ggPermeableMap = false;
			}
			me._map_20.ggCalculateFloorplanSize(mapDetails);
			me._map_20.ggShowSimpleFloorplan(mapDetails);
			me._map_20.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_20.ggMapNotLoaded = false;
		}
		me._map_20.ggClearMap=function() {
			me._map_20.ggClearMapMarkers();
			me._map_20.ggMapNotLoaded = true;
		}
		me._map_20.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_20.ggMapId = mapId;
			if (!me._map_20.ggMapNotLoaded) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap();
				me._map_20.ggInitMapMarkers();
			}
		}
		me._map_20.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_20.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
					var xPos = (me._map_20.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_20.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_20.ggHMarkerAnchorOffset;
					yPos -= me._map_20.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_20.style['z-index'] + 2;
				}
			}
		}
		me._map_20.ggInitMapMarkers=function() {
			me._map_20.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_20.ggFilteredIds = [];
			if (me._map_20.ggFilter != '') {
				var filter = me._map_20.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_20.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_20.ggFilteredIds.length > 0) ids = me._map_20.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_20.ggMapId);
				if (coords.length>=2) {
					me._map_20.ggHMarkerAnchorOffset = 12;
					me._map_20.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_20.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_20.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_20__mapdiv.appendChild(marker);
				}
			}
			me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_20);
		}
		me._map_20.ggClearMapMarkers=function() {
			for (id in me._map_20.ggSimpleFloorplanMarkerArray) {
				if (me._map_20.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_20__mapdiv.removeChild(me._map_20.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_20.ggMarkerInstances=[];
			me._map_20.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_20.logicBlock_visible();
		var clonedNormalElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._map_pin;
		me._markertemplate__normalInst = clonedNormalElement;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='-12px';
		me._markertemplate__normal.style.top='-20px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_map_pin_Class(this,me._markertemplate);
		me._markertemplate__active = clonedActiveElement._map_pin;
		me._markertemplate__activeInst = clonedActiveElement;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='-12px';
		me._markertemplate__active.style.top='-20px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me.__0.logicBlock_size();
		me.__0.logicBlock_visible();
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 12;
					me._map_1.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1.logicBlock_visible();
		me._map_2.ggMarkerInstances=[];
		me._map_2.ggLastNodeId=null;
		me._map_2.ggSimpleFloorplanMarkerArray=[];
		me._map_2.ggFloorplanWidth=0;
		me._map_2.ggFloorplanHeight=0;
		me._map_2__mapdiv=document.createElement('div');
		me._map_2__mapdiv.className='ggskin ggskin_map';
		me._map_2.appendChild(me._map_2__mapdiv);
		me._map_2__img=document.createElement('img');
		me._map_2__img.className='ggskin ggskin_map';
		me._map_2__mapdiv.appendChild(me._map_2__img);
		me._map_2.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2.ggRadar.update=function() {
			var radar=me._map_2.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2.ggFilteredIds.length > 0 && me._map_2.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#221e1f');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#221e1f');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2.clientWidth;
			var mapHeight = me._map_2.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2__img.setAttribute('src', imageFilename);
		me._map_2__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2.ggFloorplanHeight / 2 + 'px;width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2__img.setAttribute('style','width:' + me._map_2.ggFloorplanWidth + 'px;height:' + me._map_2.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2.clientWidth / me._map_2.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2.ggFloorplanHeight = me._map_2.clientHeight;
				me._map_2.ggFloorplanWidth = me._map_2.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2.ggFloorplanWidth = me._map_2.clientWidth;
				me._map_2.ggFloorplanHeight = me._map_2.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2.ggPermeableMap = true;
			} else {
				me._map_2.ggPermeableMap = false;
			}
			me._map_2.ggCalculateFloorplanSize(mapDetails);
			me._map_2.ggShowSimpleFloorplan(mapDetails);
			me._map_2.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2.ggMapNotLoaded = false;
		}
		me._map_2.ggClearMap=function() {
			me._map_2.ggClearMapMarkers();
			me._map_2.ggMapNotLoaded = true;
		}
		me._map_2.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2.ggMapId = mapId;
			if (!me._map_2.ggMapNotLoaded) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap();
				me._map_2.ggInitMapMarkers();
			}
		}
		me._map_2.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
					var xPos = (me._map_2.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2.ggHMarkerAnchorOffset;
					yPos -= me._map_2.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2.style['z-index'] + 2;
				}
			}
		}
		me._map_2.ggInitMapMarkers=function() {
			me._map_2.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2.ggFilteredIds = [];
			if (me._map_2.ggFilter != '') {
				var filter = me._map_2.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2.ggFilteredIds.length > 0) ids = me._map_2.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2.ggMapId);
				if (coords.length>=2) {
					me._map_2.ggHMarkerAnchorOffset = 12;
					me._map_2.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin2_Class(me, markerParent);
					me._map_2.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin2;
					me._map_2.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2__mapdiv.appendChild(marker);
				}
			}
			me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2);
		}
		me._map_2.ggClearMapMarkers=function() {
			for (id in me._map_2.ggSimpleFloorplanMarkerArray) {
				if (me._map_2.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2__mapdiv.removeChild(me._map_2.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2.ggMarkerInstances=[];
			me._map_2.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2.logicBlock_visible();
		me._mobile_catagory.logicBlock_position();
		me._mobile_catagory.logicBlock_visible();
		me._m2.logicBlock_position();
		me.__mapm.logicBlock_position();
		me.__mapm.logicBlock_angle();
		me._text_7m.logicBlock_text();
		me.__mapmm.logicBlock_position();
		me.__mapmm.logicBlock_angle();
		me._m.logicBlock_position();
		me._m.logicBlock_visible();
		me._map_1m.ggMarkerInstances=[];
		me._map_1m.ggLastNodeId=null;
		me._map_1m.ggSimpleFloorplanMarkerArray=[];
		me._map_1m.ggFloorplanWidth=0;
		me._map_1m.ggFloorplanHeight=0;
		me._map_1m__mapdiv=document.createElement('div');
		me._map_1m__mapdiv.className='ggskin ggskin_map';
		me._map_1m.appendChild(me._map_1m__mapdiv);
		me._map_1m__img=document.createElement('img');
		me._map_1m__img.className='ggskin ggskin_map';
		me._map_1m__mapdiv.appendChild(me._map_1m__img);
		me._map_1m.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1m.ggRadar.update=function() {
			var radar=me._map_1m.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1m.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1m.ggFilteredIds.length > 0 && me._map_1m.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1m.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1m__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#026df3');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#026df3');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1m__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1m.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1m__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1m.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1m.clientWidth;
			var mapHeight = me._map_1m.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1m.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1m__img.setAttribute('src', imageFilename);
		me._map_1m__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1m.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1m.ggFloorplanHeight / 2 + 'px;width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1m__img.setAttribute('style','width:' + me._map_1m.ggFloorplanWidth + 'px;height:' + me._map_1m.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1m.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1m.clientWidth / me._map_1m.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1m.ggFloorplanHeight = me._map_1m.clientHeight;
				me._map_1m.ggFloorplanWidth = me._map_1m.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1m.ggFloorplanWidth = me._map_1m.clientWidth;
				me._map_1m.ggFloorplanHeight = me._map_1m.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1m.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1m.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1m.ggPermeableMap = true;
			} else {
				me._map_1m.ggPermeableMap = false;
			}
			me._map_1m.ggCalculateFloorplanSize(mapDetails);
			me._map_1m.ggShowSimpleFloorplan(mapDetails);
			me._map_1m.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1m.ggMapNotLoaded = false;
		}
		me._map_1m.ggClearMap=function() {
			me._map_1m.ggClearMapMarkers();
			me._map_1m.ggMapNotLoaded = true;
		}
		me._map_1m.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1m.ggMapId = mapId;
			if (!me._map_1m.ggMapNotLoaded) {
				me._map_1m.ggClearMap();
				me._map_1m.ggInitMap();
				me._map_1m.ggInitMapMarkers();
			}
		}
		me._map_1m.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1m.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
					var xPos = (me._map_1m.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1m.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1m.ggHMarkerAnchorOffset;
					yPos -= me._map_1m.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1m.style['z-index'] + 2;
				}
			}
		}
		me._map_1m.ggInitMapMarkers=function() {
			me._map_1m.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1m.ggFilteredIds = [];
			if (me._map_1m.ggFilter != '') {
				var filter = me._map_1m.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1m.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1m.ggFilteredIds.length > 0) ids = me._map_1m.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1m.ggMapId);
				if (coords.length>=2) {
					me._map_1m.ggHMarkerAnchorOffset = 12;
					me._map_1m.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_1m.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_1m.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1m__mapdiv.appendChild(marker);
				}
			}
			me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1m);
		}
		me._map_1m.ggClearMapMarkers=function() {
			for (id in me._map_1m.ggSimpleFloorplanMarkerArray) {
				if (me._map_1m.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1m__mapdiv.removeChild(me._map_1m.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1m.ggMarkerInstances=[];
			me._map_1m.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_1m.logicBlock_visible();
		me._map_2m.ggMarkerInstances=[];
		me._map_2m.ggLastNodeId=null;
		me._map_2m.ggSimpleFloorplanMarkerArray=[];
		me._map_2m.ggFloorplanWidth=0;
		me._map_2m.ggFloorplanHeight=0;
		me._map_2m__mapdiv=document.createElement('div');
		me._map_2m__mapdiv.className='ggskin ggskin_map';
		me._map_2m.appendChild(me._map_2m__mapdiv);
		me._map_2m__img=document.createElement('img');
		me._map_2m__img.className='ggskin ggskin_map';
		me._map_2m__mapdiv.appendChild(me._map_2m__img);
		me._map_2m.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_2m.ggRadar.update=function() {
			var radar=me._map_2m.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_2m.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_2m.ggFilteredIds.length > 0 && me._map_2m.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_2m.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_2m.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_2m__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',60);
				radar.radarElement.setAttributeNS(null,'height',60);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 60 60');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 30 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 30 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 30 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 30 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 30;
				arcY1 += 30;
				arcX2 += 30;
				arcY2 += 30;
				var radarPathString = 'M30,30 L' + arcX1 + ',' + arcY1 + ' A 30 30 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#026df3');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#026df3');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_2m__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 30;
				var radarYPos = activeMarker.radarYPos - 30;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_2m.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_2m__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_2m.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_2m.clientWidth;
			var mapHeight = me._map_2m.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_2m.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_2m__img.setAttribute('src', imageFilename);
		me._map_2m__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_2m.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_2m.ggFloorplanHeight / 2 + 'px;width:' + me._map_2m.ggFloorplanWidth + 'px;height:' + me._map_2m.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_2m__img.setAttribute('style','width:' + me._map_2m.ggFloorplanWidth + 'px;height:' + me._map_2m.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_2m.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_2m.clientWidth / me._map_2m.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_2m.ggFloorplanHeight = me._map_2m.clientHeight;
				me._map_2m.ggFloorplanWidth = me._map_2m.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_2m.ggFloorplanWidth = me._map_2m.clientWidth;
				me._map_2m.ggFloorplanHeight = me._map_2m.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_2m.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_2m.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_2m.ggPermeableMap = true;
			} else {
				me._map_2m.ggPermeableMap = false;
			}
			me._map_2m.ggCalculateFloorplanSize(mapDetails);
			me._map_2m.ggShowSimpleFloorplan(mapDetails);
			me._map_2m.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_2m.ggMapNotLoaded = false;
		}
		me._map_2m.ggClearMap=function() {
			me._map_2m.ggClearMapMarkers();
			me._map_2m.ggMapNotLoaded = true;
		}
		me._map_2m.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_2m.ggMapId = mapId;
			if (!me._map_2m.ggMapNotLoaded) {
				me._map_2m.ggClearMap();
				me._map_2m.ggInitMap();
				me._map_2m.ggInitMapMarkers();
			}
		}
		me._map_2m.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_2m.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_2m.ggMapId);
					var xPos = (me._map_2m.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_2m.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_2m.ggHMarkerAnchorOffset;
					yPos -= me._map_2m.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_2m.style['z-index'] + 2;
				}
			}
		}
		me._map_2m.ggInitMapMarkers=function() {
			me._map_2m.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_2m.ggFilteredIds = [];
			if (me._map_2m.ggFilter != '') {
				var filter = me._map_2m.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_2m.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_2m.ggFilteredIds.length > 0) ids = me._map_2m.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_2m.ggMapId);
				if (coords.length>=2) {
					me._map_2m.ggHMarkerAnchorOffset = 12;
					me._map_2m.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._map_2m.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._map_2m.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_2m__mapdiv.appendChild(marker);
				}
			}
			me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_2m);
		}
		me._map_2m.ggClearMapMarkers=function() {
			for (id in me._map_2m.ggSimpleFloorplanMarkerArray) {
				if (me._map_2m.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_2m__mapdiv.removeChild(me._map_2m.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_2m.ggMarkerInstances=[];
			me._map_2m.ggSimpleFloorplanMarkerArray=[];
		}
		me._map_2m.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			me._rectangle_3.logicBlock_backgroundcolor();
			me._text_9.logicBlock_textcolor();
			me.__36.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_textcolor();
			me.__34.logicBlock_backgroundcolor();
			me.__26.logicBlock_backgroundcolor();
			me.__27.logicBlock_textcolor();
			me.__28.logicBlock_backgroundcolor();
			me.__1_3.logicBlock_backgroundcolor();
			me.__1_4.logicBlock_textcolor();
			me.__24.logicBlock_backgroundcolor();
			me.__17.logicBlock_backgroundcolor();
			me.__18.logicBlock_textcolor();
			me.__19.logicBlock_backgroundcolor();
			me.__1_1.logicBlock_backgroundcolor();
			me.__1_2.logicBlock_textcolor();
			me.__15.logicBlock_backgroundcolor();
			me.__1_.logicBlock_backgroundcolor();
			me.__1_0.logicBlock_textcolor();
			me.__13.logicBlock_backgroundcolor();
			me.__9.logicBlock_backgroundcolor();
			me.__10.logicBlock_textcolor();
			me.__11.logicBlock_backgroundcolor();
			me.__2_1.logicBlock_backgroundcolor();
			me.__2_2.logicBlock_textcolor();
			me.__23.logicBlock_backgroundcolor();
			me.__2_.logicBlock_backgroundcolor();
			me.__2_0.logicBlock_textcolor();
			me.__21.logicBlock_backgroundcolor();
			me.__3_.logicBlock_backgroundcolor();
			me.__3_0.logicBlock_textcolor();
			me.__31.logicBlock_backgroundcolor();
			me._rectangle_3b.logicBlock_backgroundcolor();
			me._text_9b.logicBlock_textcolor();
			me.__b9.logicBlock_backgroundcolor();
			me._b3.logicBlock_backgroundcolor();
			me.__b7.logicBlock_textcolor();
			me.__b8.logicBlock_backgroundcolor();
			me.__1_b3.logicBlock_backgroundcolor();
			me.__1_b4.logicBlock_textcolor();
			me.__b6.logicBlock_backgroundcolor();
			me.__b3.logicBlock_backgroundcolor();
			me.__b4.logicBlock_textcolor();
			me.__b5.logicBlock_backgroundcolor();
			me.__1_b1.logicBlock_backgroundcolor();
			me.__1_b2.logicBlock_textcolor();
			me.__b2.logicBlock_backgroundcolor();
			me.__1_b.logicBlock_backgroundcolor();
			me.__1_b0.logicBlock_textcolor();
			me.__1b0.logicBlock_backgroundcolor();
			me.__b.logicBlock_backgroundcolor();
			me.__b0.logicBlock_textcolor();
			me.__b1.logicBlock_backgroundcolor();
			me.__2_b1.logicBlock_backgroundcolor();
			me.__2_b2.logicBlock_textcolor();
			me.__2b2.logicBlock_backgroundcolor();
			me.__2_b.logicBlock_backgroundcolor();
			me.__2_b0.logicBlock_textcolor();
			me.__2b0.logicBlock_backgroundcolor();
			me.__3_b.logicBlock_backgroundcolor();
			me.__3_b0.logicBlock_textcolor();
			me.__3b0.logicBlock_backgroundcolor();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._text_1.logicBlock_bordercolor();
			me._text_1.logicBlock_textcolor();
			me.__63.logicBlock_backgroundcolor();
			me._text_1b.logicBlock_bordercolor();
			me._text_1b.logicBlock_textcolor();
			me.__b10.logicBlock_backgroundcolor();
			me.__map.logicBlock_position();
			me.__map.logicBlock_angle();
			me._text_7pc.logicBlock_text();
			me.__mappc.logicBlock_position();
			me.__mappc.logicBlock_angle();
			me._text_40.logicBlock_text();
			me._timer_1.logicBlock_visible();
			me._text_4.logicBlock_text();
			me.__5.logicBlock_alpha();
			me.__7.logicBlock_visible();
			me._rectangle_3.logicBlock_backgroundcolor();
			me._text_9.logicBlock_textcolor();
			me.__36.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_textcolor();
			me.__34.logicBlock_backgroundcolor();
			me.__26.logicBlock_backgroundcolor();
			me.__27.logicBlock_textcolor();
			me.__28.logicBlock_backgroundcolor();
			me.__1_3.logicBlock_backgroundcolor();
			me.__1_4.logicBlock_textcolor();
			me.__24.logicBlock_backgroundcolor();
			me.__17.logicBlock_backgroundcolor();
			me.__18.logicBlock_textcolor();
			me.__19.logicBlock_backgroundcolor();
			me.__1_1.logicBlock_backgroundcolor();
			me.__1_2.logicBlock_textcolor();
			me.__15.logicBlock_backgroundcolor();
			me.__1_.logicBlock_backgroundcolor();
			me.__1_0.logicBlock_textcolor();
			me.__13.logicBlock_backgroundcolor();
			me.__9.logicBlock_backgroundcolor();
			me.__10.logicBlock_textcolor();
			me.__11.logicBlock_backgroundcolor();
			me.__2_1.logicBlock_backgroundcolor();
			me.__2_2.logicBlock_textcolor();
			me.__23.logicBlock_backgroundcolor();
			me.__2_.logicBlock_backgroundcolor();
			me.__2_0.logicBlock_textcolor();
			me.__21.logicBlock_backgroundcolor();
			me.__3_.logicBlock_backgroundcolor();
			me.__3_0.logicBlock_textcolor();
			me.__31.logicBlock_backgroundcolor();
			me._b.logicBlock_visible();
			me._rectangle_3b.logicBlock_backgroundcolor();
			me._text_9b.logicBlock_textcolor();
			me.__b9.logicBlock_backgroundcolor();
			me._b3.logicBlock_backgroundcolor();
			me.__b7.logicBlock_textcolor();
			me.__b8.logicBlock_backgroundcolor();
			me.__1_b3.logicBlock_backgroundcolor();
			me.__1_b4.logicBlock_textcolor();
			me.__b6.logicBlock_backgroundcolor();
			me.__b3.logicBlock_backgroundcolor();
			me.__b4.logicBlock_textcolor();
			me.__b5.logicBlock_backgroundcolor();
			me.__1_b1.logicBlock_backgroundcolor();
			me.__1_b2.logicBlock_textcolor();
			me.__b2.logicBlock_backgroundcolor();
			me.__1_b.logicBlock_backgroundcolor();
			me.__1_b0.logicBlock_textcolor();
			me.__1b0.logicBlock_backgroundcolor();
			me.__b.logicBlock_backgroundcolor();
			me.__b0.logicBlock_textcolor();
			me.__b1.logicBlock_backgroundcolor();
			me.__2_b1.logicBlock_backgroundcolor();
			me.__2_b2.logicBlock_textcolor();
			me.__2b2.logicBlock_backgroundcolor();
			me.__2_b.logicBlock_backgroundcolor();
			me.__2_b0.logicBlock_textcolor();
			me.__2b0.logicBlock_backgroundcolor();
			me.__3_b.logicBlock_backgroundcolor();
			me.__3_b0.logicBlock_textcolor();
			me.__3b0.logicBlock_backgroundcolor();
			me.__3.logicBlock_visible();
			me._map_10.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_10.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_10.ggCalculateFloorplanSize(mapDetails);
				me._map_10.ggShowSimpleFloorplan(mapDetails);
				me._map_10.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_10.ggRadar) me._map_10.ggRadar.update();
			if (me._map_10.ggLastNodeId) {
				var lastActiveMarker = me._map_10.ggSimpleFloorplanMarkerArray[me._map_10.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_10.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_10.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_10.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_10.ggChangeMap(mapId);
					}
				}
			}
			me._map_10.ggLastNodeId = id;
			me._map_10.ggRadar.update();
			me._map_20.logicBlock_visible();
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_20.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_20.ggCalculateFloorplanSize(mapDetails);
				me._map_20.ggShowSimpleFloorplan(mapDetails);
				me._map_20.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_20.ggRadar) me._map_20.ggRadar.update();
			if (me._map_20.ggLastNodeId) {
				var lastActiveMarker = me._map_20.ggSimpleFloorplanMarkerArray[me._map_20.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_20.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_20.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_20.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_20.ggChangeMap(mapId);
					}
				}
			}
			me._map_20.ggLastNodeId = id;
			me._map_20.ggRadar.update();
			me._markertemplate__normalInst.ggEvent_changenode();
			me._markertemplate__activeInst.ggEvent_changenode();
			me.__0.logicBlock_visible();
			me._map_1.logicBlock_visible();
			for (var i=0; i < me._map_1.ggMarkerInstances.length; i++) {
				me._map_1.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._map_2.logicBlock_visible();
			for (var i=0; i < me._map_2.ggMarkerInstances.length; i++) {
				me._map_2.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2.ggCalculateFloorplanSize(mapDetails);
				me._map_2.ggShowSimpleFloorplan(mapDetails);
				me._map_2.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2.ggRadar) me._map_2.ggRadar.update();
			if (me._map_2.ggLastNodeId) {
				var lastActiveMarker = me._map_2.ggSimpleFloorplanMarkerArray[me._map_2.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2.ggChangeMap(mapId);
					}
				}
			}
			me._map_2.ggLastNodeId = id;
			me._map_2.ggRadar.update();
			me.__mapm.logicBlock_position();
			me.__mapm.logicBlock_angle();
			me._text_7m.logicBlock_text();
			me.__mapmm.logicBlock_position();
			me.__mapmm.logicBlock_angle();
			me._m.logicBlock_visible();
			me._map_1m.logicBlock_visible();
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_1m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1m.ggCalculateFloorplanSize(mapDetails);
				me._map_1m.ggShowSimpleFloorplan(mapDetails);
				me._map_1m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1m.ggRadar) me._map_1m.ggRadar.update();
			if (me._map_1m.ggLastNodeId) {
				var lastActiveMarker = me._map_1m.ggSimpleFloorplanMarkerArray[me._map_1m.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1m.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1m.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1m.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1m.ggChangeMap(mapId);
					}
				}
			}
			me._map_1m.ggLastNodeId = id;
			me._map_1m.ggRadar.update();
			me._map_2m.logicBlock_visible();
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._map_2m.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_2m.ggCalculateFloorplanSize(mapDetails);
				me._map_2m.ggShowSimpleFloorplan(mapDetails);
				me._map_2m.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_2m.ggRadar) me._map_2m.ggRadar.update();
			if (me._map_2m.ggLastNodeId) {
				var lastActiveMarker = me._map_2m.ggSimpleFloorplanMarkerArray[me._map_2m.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_2m.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_2m.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_2m.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_2m.ggChangeMap(mapId);
					}
				}
			}
			me._map_2m.ggLastNodeId = id;
			me._map_2m.ggRadar.update();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__map.logicBlock_position();
			me.__map.logicBlock_angle();
			me._text_7pc.logicBlock_text();
			me.__mappc.logicBlock_position();
			me.__mappc.logicBlock_angle();
			me._timer_1.ggTimestamp=skin.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
			me.__5.logicBlock_alpha();
			me._scrollarea_1.ggUpdatePosition();
			me._rectangle_3.logicBlock_backgroundcolor();
			me._text_9.logicBlock_textcolor();
			me.__36.logicBlock_backgroundcolor();
			me.__32.logicBlock_backgroundcolor();
			me.__33.logicBlock_textcolor();
			me.__34.logicBlock_backgroundcolor();
			me.__26.logicBlock_backgroundcolor();
			me.__27.logicBlock_textcolor();
			me.__28.logicBlock_backgroundcolor();
			me.__1_3.logicBlock_backgroundcolor();
			me.__1_4.logicBlock_textcolor();
			me.__24.logicBlock_backgroundcolor();
			me.__17.logicBlock_backgroundcolor();
			me.__18.logicBlock_textcolor();
			me.__19.logicBlock_backgroundcolor();
			me.__1_1.logicBlock_backgroundcolor();
			me.__1_2.logicBlock_textcolor();
			me.__15.logicBlock_backgroundcolor();
			me.__1_.logicBlock_backgroundcolor();
			me.__1_0.logicBlock_textcolor();
			me.__13.logicBlock_backgroundcolor();
			me.__9.logicBlock_backgroundcolor();
			me.__10.logicBlock_textcolor();
			me.__11.logicBlock_backgroundcolor();
			me.__2_1.logicBlock_backgroundcolor();
			me.__2_2.logicBlock_textcolor();
			me.__23.logicBlock_backgroundcolor();
			me.__2_.logicBlock_backgroundcolor();
			me.__2_0.logicBlock_textcolor();
			me.__21.logicBlock_backgroundcolor();
			me.__3_.logicBlock_backgroundcolor();
			me.__3_0.logicBlock_textcolor();
			me.__31.logicBlock_backgroundcolor();
			me._scrollarea_1b.ggUpdatePosition();
			me._rectangle_3b.logicBlock_backgroundcolor();
			me._text_9b.logicBlock_textcolor();
			me.__b9.logicBlock_backgroundcolor();
			me._b3.logicBlock_backgroundcolor();
			me.__b7.logicBlock_textcolor();
			me.__b8.logicBlock_backgroundcolor();
			me.__1_b3.logicBlock_backgroundcolor();
			me.__1_b4.logicBlock_textcolor();
			me.__b6.logicBlock_backgroundcolor();
			me.__b3.logicBlock_backgroundcolor();
			me.__b4.logicBlock_textcolor();
			me.__b5.logicBlock_backgroundcolor();
			me.__1_b1.logicBlock_backgroundcolor();
			me.__1_b2.logicBlock_textcolor();
			me.__b2.logicBlock_backgroundcolor();
			me.__1_b.logicBlock_backgroundcolor();
			me.__1_b0.logicBlock_textcolor();
			me.__1b0.logicBlock_backgroundcolor();
			me.__b.logicBlock_backgroundcolor();
			me.__b0.logicBlock_textcolor();
			me.__b1.logicBlock_backgroundcolor();
			me.__2_b1.logicBlock_backgroundcolor();
			me.__2_b2.logicBlock_textcolor();
			me.__2b2.logicBlock_backgroundcolor();
			me.__2_b.logicBlock_backgroundcolor();
			me.__2_b0.logicBlock_textcolor();
			me.__2b0.logicBlock_backgroundcolor();
			me.__3_b.logicBlock_backgroundcolor();
			me.__3_b0.logicBlock_textcolor();
			me.__3b0.logicBlock_backgroundcolor();
			me.__3.logicBlock_visible();
			for (var i=0; i < me._map_10.ggMarkerInstances.length; i++) {
				me._map_10.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_10.ggVisible) {
				me._map_10.ggClearMap();
				me._map_10.ggInitMap(false);
				me._map_10.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_20.ggMarkerInstances.length; i++) {
				me._map_20.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_20.ggVisible) {
				me._map_20.ggClearMap();
				me._map_20.ggInitMap(false);
				me._map_20.ggInitMapMarkers(true);
			}
			me._markertemplate__normalInst.ggEvent_configloaded();
			me._markertemplate__activeInst.ggEvent_configloaded();
			me.__0.logicBlock_visible();
			if (me._map_1.ggVisible) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			if (me._map_2.ggVisible) {
				me._map_2.ggClearMap();
				me._map_2.ggInitMap(false);
				me._map_2.ggInitMapMarkers(true);
			}
			me.__mapm.logicBlock_position();
			me.__mapm.logicBlock_angle();
			me._text_7m.logicBlock_text();
			me.__mapmm.logicBlock_position();
			me.__mapmm.logicBlock_angle();
			me._m.logicBlock_visible();
			for (var i=0; i < me._map_1m.ggMarkerInstances.length; i++) {
				me._map_1m.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_1m.ggVisible) {
				me._map_1m.ggClearMap();
				me._map_1m.ggInitMap(false);
				me._map_1m.ggInitMapMarkers(true);
			}
			for (var i=0; i < me._map_2m.ggMarkerInstances.length; i++) {
				me._map_2m.ggMarkerInstances[i].ggEvent_configloaded();
			}
			if (me._map_2m.ggVisible) {
				me._map_2m.ggClearMap();
				me._map_2m.ggInitMap(false);
				me._map_2m.ggInitMapMarkers(true);
			}
		});
		player.addListener('positionchanged', function(event) {
			me._map_10.ggRadar.update();
			me._map_20.ggRadar.update();
			me._map_1.ggRadar.update();
			me._map_2.ggRadar.update();
			me._map_1m.ggRadar.update();
			me._map_2m.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('태그')) {
				for(var i = 0; i < hotspotTemplates['태그'].length; i++) {
					hotspotTemplates['태그'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__60.logicBlock_position();
			me.__60.logicBlock_visible();
			me.__59.logicBlock_visible();
			me._footer.logicBlock_size();
			me._text_3.logicBlock_visible();
			me._text_3m.logicBlock_visible();
			me.__3.logicBlock_position();
			me.__0.logicBlock_size();
			me._mobile_catagory.logicBlock_position();
			me._mobile_catagory.logicBlock_visible();
			me._m2.logicBlock_position();
			me._m.logicBlock_position();
			me._m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_bigfloor', function(event) {
			me.__3.logicBlock_visible();
			me.__0.logicBlock_visible();
			me._m.logicBlock_visible();
		});
		player.addListener('varchanged_vis_cartagory', function(event) {
			me._text_7pc.logicBlock_text();
			me.__mappc.logicBlock_position();
			me.__mappc.logicBlock_angle();
			me.__5.logicBlock_alpha();
			me._text_7m.logicBlock_text();
			me.__mapmm.logicBlock_position();
			me.__mapmm.logicBlock_angle();
		});
		player.addListener('varchanged_vis_icon', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_icon();
				}
			}
		});
		player.addListener('varchanged_vis_mdropdown', function(event) {
			me.__map.logicBlock_position();
			me.__map.logicBlock_angle();
			me.__3.logicBlock_visible();
		});
		player.addListener('varchanged_vis_mdropdown_m', function(event) {
			me.__mapm.logicBlock_position();
			me.__mapm.logicBlock_angle();
			me._m.logicBlock_visible();
		});
	};
	function SkinElement_map_pin2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin2=document.createElement('div');
		el.ggId="map_pin2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin2.onclick=function (e) {
			if (
				(
					((me._map_pin2.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin2.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active2=document.createElement('div');
		els=me._map_pin_active2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJEElEQVR4nO2da0xcaRnHf0O5TlkordAWplwUCr1szCp1N9Y0VdIEpmgwGBOTLVHXlNUvJsKHNSC23TY2KdUYEw1kvYTup02wTWRnmlhq+6GbXYuuidIMlwYow6QO3dKylTsdP7zLdm3gXN5z5sw79vy+nmee5znvn8M57+15PbFYDBd1SEl0Ai7/iyuIYriCKIYriGK4giiGK4hiuIIohiuIYriCKIYriGK4giiGK4hipCY6ARP4gBeB54FyoBTIB7YB6cBzwIfAEvABMA2MA6PAP4F3gSmHczaNR+HR3iygHqgBvgzstsHnMPAXoB/oA+Zt8GkrqgmSgmj8l4FvANlxjPUh0AtcAK4Bj+MYyzCqCJIOfBv4EVCZgPhDwM+BPyD+5SWMRAuSghDip0'+
			'BxIhP5iDvASYQwCXliEinIi8BvgBcSlYAG7wOvAn91OnAiPnvTgHPAO6gpBoi83kHkmeZkYKefkDLgLaDayaAWeQ/4FjDmRDAnBTkKvAlskXVw9+5dQqEQ4XCYSCTC1NQUCwsLzM/PMzc3h9frJSsri8zMTIqKiigsLMTn81FVVcWOHTus5P4A8eX3thUnRnBKkFeALmCTmR/FYjFCoRA3btxgYGCAaDQqnUBBQQHV1dUcPHiQqqoqPB6PWRerQDPwW+kkDOCEIG3A64DhFlhYWKC/v5/Lly8zNWV/57qoqIja2lpqamrIzMw089MY8BPgjO1JfUS8BXkN+JlR49XVVYLBIL29vTx8+DCOaQlyc3NpbGykrq6OTZtMPbw/Bs7GI6d4CvIq8GsMPhm3bt2iu7ubO3fuxCufDSkuLqa5uZk9e/YY/UkMcX/dducSL0G+'+
			'ClzEwDtjZWWFCxcu0NfXRyI7qR6Ph/r6eo4dO0ZqqqEx11Xg68CfbM0jDo1QhuhY5eoZRqNRzp8/z8jIiN05SFNRUUFLSwsFBQVGzB8An8PGT2K7BUlHdKg+r2c4MTHBqVOnmJmZsTO+LWzdupWOjg6Kiw2N5twEvoRNY2B299TPYkCMUChEe3u7kmIA3L9/n/b2dkKhkBHzA5j4cNHDzifkBcRfi+Z7Y2RkhJMnTzI3N2dX3Ljh9Xo5ceIE5eXleqariNGHf1iNadcTkoIYKNQUIxqNcubMmaQQA2Bubo7Tp08b6ZBuQty/5fa0S5DvIEZvN2R5eZnOzk5mZ2dtCukMs7OzdHZ2sry8rGf6EqIdLGGHIGmI3qsmPT09jI6O2hDOeUZHR+np6TFi2o7FdQp2CPIyUKJlMDg4SCAQsCFU4ggEAgwODuqZlQLHrMSxKk'+
			'gKYnhkQ1ZWVujq6kpop88OYrEY3d3drKys6Jm+hoV2tSpILTqrQYLBIOFw2GIYNZicnCQYDOqZ7Ua0ixRWBfme1sWlpSUuXrxoMYRaXLp0iaUl3T7gd2X9WxEkF/BrGVy5coUHDx5YCKEeMzMzXL16Vc+sHsiR8W9FkKNAhpZBsr/IN6Kvr0/PJAPRPqaxIshXtC4ODw8TiUQsuFeXSCRiZEC0Rsa3FUE0A167ds2Ca/W5fv26nomjgpQhvrk3ZGBgQNJ1cnDz5k09k1J02mg9ZAX5gtbFcDjMvXv3JF0nB9PT00bm+zWHk9ZDVpDPal0cGhqSdJtcGLjP5836lBXkM1oXx8fHJd0mF2NjuhOFFWZ9ygpSqnUxHkt3VMTAfZaa9SkriOaEs5UFbcnE9PS0nsmnzPqUFSRP6+L8vHIbk+KCgfvcZtanrCCawwILCwuS'+
			'bpMLA4JsNutTVhDNxW/uE/IxpierZAXRnNzIysqSdJtcGLhP3cmTp5EVRHNi3OQC5qTFgCD/MetTVhDNBVXuE/IxH5j1KSvIv7UuGlyGmfTk5+frmZj+/pcVZFjrYlFRkaTb5MLAfZpetCwriOYgTmlpqaTb5KKsrEzPxNBa1E8SF0EqKxOx9995DNyn5n+S9ZAV5G9aF30+H9u2me6kJhX5+flG/mWZnhSSFWQMUWlnQ6qrk2nns3kOHDigZzKOThuth5UpXM2lF4cPH7bgWn0OHTqkZ9Iv49eKIJoBKysr2blzpwX36lJYWMju3brVohwX5G1gUcvA79dctpW0HD2qu8JnEckiA1YEeQhoLrw6cuQIW7ZIF25Qkry8PGpqdBeUBNAZXtoIq0tJNasapKen09DQYDGEWjQ0NJCenq5n9oasf6uCBNH51vb7/fh8Po'+
			'th1MDn81FXV6dnNgxclo1hVZDH6FQ0SE1N5fjx4zK1RZTC4/HQ3NxsZA/7WSwUP7Njw86bwISWwf79+5P+Be/3+9m3b5+e2QSiPaSxQ5Bl4LSeUVNTk5HdrEpSXl5OU1OTEdPXEe0hjV2bPn+HKPS1IWlpabS0tJCTI7VKP2Hk5OTQ2tpKWppuYbn3gN9bjWeXII+BHyD2a2/I9u3baWtrw+v12hQ2vni9Xtra2ozM76wC38eGwpl2VnL4O/ArPaOKigra2trYvNn0ggxHyc7Opr29nYoKQ4sPf4mo72IZt9bJOuTl5dHR0UFJiebm4jUGgIPYVOskHtWAPo14WgxVAzp37hy3b9+2OwdpysvLaW1tNToN/RBRUkTZakBrfA34I269LPN5qFRRrquri8nJyXjlsyG7du2iubmZvXv3Gv1JDPES77I7F+VqLgYCAXp7'+
			'ex2piZKTk0NjYyN+v/+ZqLm4hnRV0mAwGJeNo4WFhdTV1T2TVUnXcOv2GiSpKltHIhGGhoaYmJggHA4TjUZ59OgRi4uLzM/Pk5WVRUZGBtnZ2RQUFODz+SgpKaGqqsrq7OX/XWXrNZKx9vsA8E0cqv3u9OkIY4iCkedR5EQbDR4DncAXcUgMSOz5IS8hPotVPLLifcRnreaAaTxI5LF57yL+db0CON/5WJ9JRD7VJEAMSPyRR2ukIxrihyTuDKpfIIbPn+kzqJ4mBTiCEKcecXRevJhHHJ33BnAFRd5pqgnySZ5D1OOqRYhkxx6HKeDPiEUIAcTReUqhsiBPU4yosbKfJyd9FvDkpM9s4BFPTvqM8uSkz38hDvhy/ugFkySTIM8E7uHEiuEKohiuIIrhCqIYriCK4QqiGK4giuEKohiuIIrhCqIYriCK8V8ooMYXXk'+
			'x64gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 22px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateSize == 0) {
					me._map_pin_active2.style.width='18px';
					me._map_pin_active2.style.height='18px';
					me._map_pin_active2.style.left = 'calc(50% - (18px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (18px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
				else {
					me._map_pin_active2.style.width='22px';
					me._map_pin_active2.style.height='22px';
					me._map_pin_active2.style.left = 'calc(50% - (22px / 2))';
					me._map_pin_active2.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_active2);
				}
			}
		}
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active2.ggParameter.sx = 1.1;
					me._map_pin_active2.ggParameter.sy = 1.1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
				else {
					me._map_pin_active2.ggParameter.sx = 1;
					me._map_pin_active2.ggParameter.sy = 1;
					me._map_pin_active2.style.transform=parameterToTransform(me._map_pin_active2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active2);}, 250);
				}
			}
		}
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active2.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active2.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active2.style.visibility=me._map_pin_active2.ggVisible?'inherit':'hidden';
					me._map_pin_active2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active2.style.opacity == 0.0) { me._map_pin_active2.style.visibility="hidden"; } }, 505);
					me._map_pin_active2.style.opacity=0;
				}
			}
		}
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_active2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active2']=true;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active2']=false;
			me._map_pin_active2.logicBlock_scaling();
		}
		me._map_pin_active2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_active2);
		el=me._map_pin_normal2=document.createElement('div');
		els=me._map_pin_normal2__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal2';
		hs='data:image/png;base64,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'+
			'a/IILiZukrVpAAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal2";
		el.ggDx=0;
		el.ggDy=-20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 44px;';
		hs+='left : calc(50% - ((38px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((44px + 0px) / 2) - 20px);';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_normal2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStatePosition == 0) {
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -10px)';
				}
				else {
					me._map_pin_normal2.style.left='calc(50% - ((38px + 0px) / 2) + 0px)';
					me._map_pin_normal2.style.top='calc(50% - ((44px + 0px) / 2) - 20px)';
				}
			}
		}
		me._map_pin_normal2.logicBlock_position();
		me._map_pin_normal2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal2.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal2.style.width='16px';
					me._map_pin_normal2.style.height='22px';
					me._map_pin_normal2.style.left = 'calc(50% - (16px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (22px / 2) + (0px / 2) + -20px)';
					skin.updateSize(me._map_pin_normal2);
				}
				else {
					me._map_pin_normal2.style.width='38px';
					me._map_pin_normal2.style.height='44px';
					me._map_pin_normal2.style.left = 'calc(50% - (38px / 2))';
					me._map_pin_normal2.style.top = 'calc(50% - (44px / 2) + (0px / 2) + -20px)';
					skin.updateSize(me._map_pin_normal2);
				}
			}
		}
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal2.ggParameter.sx = 1.2;
					me._map_pin_normal2.ggParameter.sy = 1.1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
				else {
					me._map_pin_normal2.ggParameter.sx = 1;
					me._map_pin_normal2.ggParameter.sy = 1;
					me._map_pin_normal2.style.transform=parameterToTransform(me._map_pin_normal2.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal2);}, 250);
				}
			}
		}
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal2.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal2.style.transition='left 0s, top 0s, width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal2.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal2.style.opacity == 0.0) { me._map_pin_normal2.style.visibility="hidden"; } }, 505);
					me._map_pin_normal2.style.opacity=0;
				}
				else {
					me._map_pin_normal2.style.visibility=me._map_pin_normal2.ggVisible?'inherit':'hidden';
					me._map_pin_normal2.style.opacity=1;
				}
			}
		}
		me._map_pin_normal2.logicBlock_alpha();
		me._map_pin_normal2.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal2']=true;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal2']=false;
			me._map_pin_normal2.logicBlock_scaling();
		}
		me._map_pin_normal2.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin2.appendChild(me._map_pin_normal2);
		me._map_pin_active2.logicBlock_size();
		me._map_pin_active2.logicBlock_scaling();
		me._map_pin_active2.logicBlock_alpha();
		me._map_pin_normal2.logicBlock_position();
		me._map_pin_normal2.logicBlock_size();
		me._map_pin_normal2.logicBlock_scaling();
		me._map_pin_normal2.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active2.logicBlock_alpha();
				me._map_pin_normal2.logicBlock_alpha();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active2.logicBlock_size();
				me._map_pin_normal2.logicBlock_position();
				me._map_pin_normal2.logicBlock_size();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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'+
			'x64gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateSize == 0) {
					me._map_pin_active.style.width='13px';
					me._map_pin_active.style.height='13px';
					me._map_pin_active.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateSize == 1) {
					me._map_pin_active.style.width='13px';
					me._map_pin_active.style.height='13px';
					me._map_pin_active.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (13px / 2))';
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.style.width='15px';
					me._map_pin_active.style.height='15px';
					me._map_pin_active.style.left = 'calc(50% - (15px / 2))';
					me._map_pin_active.style.top = 'calc(50% - (15px / 2))';
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_active'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 1.1;
					me._map_pin_active.ggParameter.sy = 1.1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_active);}, 250);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.onmouseover=function (e) {
			me.elementMouseOver['map_pin_active']=true;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.onmouseout=function (e) {
			me.elementMouseOver['map_pin_active']=false;
			me._map_pin_active.logicBlock_scaling();
		}
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 22px;';
		hs+='left : calc(50% - ((13px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((22px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 13px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width <= 460))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_pin_normal.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateSize == 0) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateSize == 1) {
					me._map_pin_normal.style.width='10px';
					me._map_pin_normal.style.height='19px';
					me._map_pin_normal.style.left = 'calc(50% - (10px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (19px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.style.width='13px';
					me._map_pin_normal.style.height='22px';
					me._map_pin_normal.style.left = 'calc(50% - (13px / 2))';
					me._map_pin_normal.style.top = 'calc(50% - (22px / 2))';
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.1;
					me._map_pin_normal.ggParameter.sy = 1.1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_normal);}, 250);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='width 0s, height 0s, transform 200ms ease 0ms, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseover=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseout=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		me._map_pin_active.logicBlock_size();
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_size();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me._map_pin_active.logicBlock_size();
				me._map_pin_normal.logicBlock_size();
			};
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 56px;';
		hs+='position : absolute;';
		hs+='top : 81px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._ht_node.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._ht_node.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._ht_node.style.transition='transform 0s';
				if (me._ht_node.ggCurrentLogicStateScaling == 0) {
					me._ht_node.ggParameter.sx = 0.7;
					me._ht_node.ggParameter.sy = 0.7;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
				else {
					me._ht_node.ggParameter.sx = 1;
					me._ht_node.ggParameter.sy = 1;
					me._ht_node.style.transform=parameterToTransform(me._ht_node.ggParameter);
					skin.updateSize(me._ht_node);
				}
			}
		}
		me._ht_node.logicBlock_scaling();
		me._ht_node.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
		}
		me._external_2.onmouseover=function (e) {
			me.elementMouseOver['external_2']=true;
			me._text_6.logicBlock_alpha();
			me._image_3.logicBlock_alpha();
			me._lottie_4.logicBlock_alpha();
			me._rectangle_5.logicBlock_alpha();
			me._rectangle_5.logicBlock_scaling();
		}
		me._external_2.onmouseout=function (e) {
			me.elementMouseOver['external_2']=false;
			me._text_6.logicBlock_alpha();
			me._image_3.logicBlock_alpha();
			me._lottie_4.logicBlock_alpha();
			me._rectangle_5.logicBlock_alpha();
			me._rectangle_5.logicBlock_scaling();
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			currentWidth = img.naturalWidth;
			currentHeight = img.naturalHeight;
			img.style.width = currentWidth + 'px';
			img.style.height = currentHeight + 'px';
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._text_6=document.createElement('div');
		els=me._text_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 6";
		el.ggDx=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(34,30,31,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : -30px;';
		hs+='color : rgba(255,255,255,0.705882);';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 5px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		hs+='letter-spacing:1px; line-height:14px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_6.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_6.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_6.ggUpdateText();
		});
		el.appendChild(els);
		me._text_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_6.style.transition='opacity 0s';
				if (me._text_6.ggCurrentLogicStateAlpha == 0) {
					me._text_6.style.visibility="hidden";
					me._text_6.style.opacity=0;
				}
				else {
					me._text_6.style.visibility=me._text_6.ggVisible?'inherit':'hidden';
					me._text_6.style.opacity=1;
				}
			}
		}
		me._text_6.logicBlock_alpha();
		me._text_6.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._text_6);
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_icon') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStatePosition == 0) {
					me._image_3.style.left='0px';
					me._image_3.style.top='20px';
				}
				else {
					me._image_3.style.left='0px';
					me._image_3.style.top='0px';
				}
			}
		}
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._image_3.ggCurrentLogicStateAlpha == 0) {
					me._image_3.style.visibility="hidden";
					me._image_3.style.opacity=0;
				}
				else {
					me._image_3.style.visibility=me._image_3.ggVisible?'inherit':'hidden';
					me._image_3.style.opacity=1;
				}
			}
		}
		me._image_3.logicBlock_alpha();
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._image_3);
		el=me._lottie_4=document.createElement('div');
		el.ggLottie = lottie.loadAnimation({
			container: el,
			path: basePath + 'images/lottie_4.json',
			autoplay: true,
			loop: 0,
			rendererSettings: {
				preserveAspectRatio: 'xMinYMin meet'
			}
		});
		el.ggId="Lottie 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_lottie ";
		el.ggType='lottie';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._lottie_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._lottie_4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_icon') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lottie_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lottie_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lottie_4.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._lottie_4.ggCurrentLogicStatePosition == 0) {
					me._lottie_4.style.left='0px';
					me._lottie_4.style.top='0px';
				}
				else {
					me._lottie_4.style.left='0px';
					me._lottie_4.style.top='-20px';
				}
			}
		}
		me._lottie_4.logicBlock_position();
		me._lottie_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._lottie_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._lottie_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._lottie_4.style.transition='left 800ms linear 0ms, top 800ms linear 0ms, opacity 0s';
				if (me._lottie_4.ggCurrentLogicStateAlpha == 0) {
					me._lottie_4.style.visibility="hidden";
					me._lottie_4.style.opacity=0;
				}
				else {
					me._lottie_4.style.visibility=me._lottie_4.ggVisible?'inherit':'hidden';
					me._lottie_4.style.opacity=1;
				}
			}
		}
		me._lottie_4.logicBlock_alpha();
		me._lottie_4.ggUpdatePosition=function (useTransition) {
		}
		me._external_2.appendChild(me._lottie_4);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : #ffffff;';
		hs+='border : 3px solid rgba(34,30,31,0.705882);';
		hs+='border-radius : 50px;';
		hs+='cursor : default;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateScaling == 0) {
					me._rectangle_5.ggParameter.sx = 1.1;
					me._rectangle_5.ggParameter.sy = 1.1;
					me._rectangle_5.style.transform=parameterToTransform(me._rectangle_5.ggParameter);
					skin.updateSize(me._rectangle_5);
				}
				else {
					me._rectangle_5.ggParameter.sx = 1;
					me._rectangle_5.ggParameter.sy = 1;
					me._rectangle_5.style.transform=parameterToTransform(me._rectangle_5.ggParameter);
					skin.updateSize(me._rectangle_5);
				}
			}
		}
		me._rectangle_5.logicBlock_scaling();
		me._rectangle_5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateVisible == 0) {
					me._rectangle_5.style.visibility="hidden";
					me._rectangle_5.ggVisible=false;
				}
				else {
					me._rectangle_5.style.visibility=(Number(me._rectangle_5.style.opacity)>0||!me._rectangle_5.style.opacity)?'inherit':'hidden';
					me._rectangle_5.ggVisible=true;
				}
			}
		}
		me._rectangle_5.logicBlock_visible();
		me._rectangle_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['external_2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_5.style.transition='transform 0s, opacity 800ms linear 0ms';
				if (me._rectangle_5.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_5.style.visibility=me._rectangle_5.ggVisible?'inherit':'hidden';
					me._rectangle_5.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_5.style.opacity == 0.0) { me._rectangle_5.style.visibility="hidden"; } }, 805);
					me._rectangle_5.style.opacity=0;
				}
			}
		}
		me._rectangle_5.logicBlock_alpha();
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__47=document.createElement('div');
		els=me.__47__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/_47_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubc29 \uc774\ubbf8\uc9c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__47.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me.__47.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me.__47);
		me._external_2.appendChild(me._rectangle_5);
		me._ht_node.appendChild(me._external_2);
		me._ht_node.logicBlock_scaling();
		me._text_6.logicBlock_alpha();
		me._image_3.logicBlock_position();
		me._image_3.logicBlock_alpha();
		me._lottie_4.logicBlock_position();
		me._lottie_4.logicBlock_alpha();
		me._rectangle_5.logicBlock_scaling();
		me._rectangle_5.logicBlock_visible();
		me._rectangle_5.logicBlock_alpha();
			me.ggEvent_changenode=function() {
				me._image_3.logicBlock_position();
				me._lottie_4.logicBlock_position();
			};
			me.ggEvent_configloaded=function() {
				me._image_3.logicBlock_position();
				me._lottie_4.logicBlock_position();
			};
			me.ggEvent_sizechanged=function() {
				me._ht_node.logicBlock_scaling();
				me._rectangle_5.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_icon=function() {
				me._image_3.logicBlock_position();
				me._lottie_4.logicBlock_position();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__48(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__48=document.createElement('div');
		el.ggId="\ud0dc\uadf8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 559px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__48.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__48.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize().width <= 640))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__48.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__48.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__48.style.transition='transform 0s';
				if (me.__48.ggCurrentLogicStateScaling == 0) {
					me.__48.ggParameter.sx = 0.8;
					me.__48.ggParameter.sy = 0.8;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
				else {
					me.__48.ggParameter.sx = 1;
					me.__48.ggParameter.sy = 1;
					me.__48.style.transform=parameterToTransform(me.__48.ggParameter);
					skin.updateSize(me.__48);
				}
			}
		}
		me.__48.logicBlock_scaling();
		me.__48.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__48.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__48.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_48']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__48.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_48']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__48.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='background : #221e1f;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNmZmZmZmYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlLXdpZHRoPSIxLjUiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzLWNpcmNsZSIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIxIj4KIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+CiA8bGluZSB5MT0iOCIgeDE9IjEyIiB5Mj0iMTYiIHgyPSIxMiIvPgogPGxpbmUgeTE9IjEyIiB4MT0iOCIgeTI9IjEyIi'+
			'B4Mj0iMTYiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_3.onclick=function (e) {
			if (
				(
					((player.getViewerSize().width > 640))
				)
			) {
				skin.__49.ggVisible = !skin.__49.ggVisible;
				var flag=skin.__49.ggVisible;
				skin.__49.style.transition='none';
				skin.__49.style.visibility=((flag)&&(Number(skin.__49.style.opacity)>0||!skin.__49.style.opacity))?'inherit':'hidden';
			}
			if (
				(
					((player.getViewerSize().width <= 640))
				)
			) {
				skin.__38.ggVisible = !skin.__38.ggVisible;
				var flag=skin.__38.ggVisible;
				skin.__38.style.transition='none';
				skin.__38.style.visibility=((flag)&&(Number(skin.__38.style.opacity)>0||!skin.__38.style.opacity))?'inherit':'hidden';
			}
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me._external_1.appendChild(me._svg_3);
		me.__48.appendChild(me._external_1);
		me.__48.logicBlock_scaling();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_sizechanged=function() {
				me.__48.logicBlock_scaling();
			};
			me.__div = me.__48;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='태그') {
				hotspot.skinid = '태그';
				hsinst = new SkinHotspotClass__48(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('vis_icon', !player.getVariableValue('vis_icon'));
			} else {
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap") .ggskin { font-family: "Noto Sans KR", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};