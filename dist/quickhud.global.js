(()=>{function c(){console.log("Hi")}function i(p){let e=document.createElement(p);return c(),{withClass(t){return e.classList.add(t),this},withClasses(t){return t.forEach(r=>e.classList.add(r)),this},withId(t){return e.id=t,this},withAttribute(t,r){return e.setAttribute(t,r),this},withAttributes(t){return Object.entries(t).forEach(r=>e.setAttribute(r[0],r[1])),this},withStyle(t,r){return e.style[t]=r,this},withStyles(t){return Object.entries(t).forEach(r=>e.style[r[0]]=r[1]),this},withHtml(t){return e.innerHTML=t,this},withText(t){return e.innerText=t,this},appendChild(t){return e.appendChild(t),this},appendChildren(t){return t.forEach(r=>e.appendChild(r)),this},addToParent(t){return t.appendChild(e),this},ok(){return e}}}function m(){i("style").withText(`
		.qh-wrapper {
				position: absolute;
				background: rgba(20, 20, 30, 0.9);
				backdrop-filter: blur(10px);
				border-radius: 8px;
				font-family: 'Segoe UI', monospace;
				color: white;
				z-index: 9999;
				min-width: 240px;
				box-shadow: 0 8px 20px rgba(0,0,0,0.4);
				border: 1px solid rgba(255,255,255,0.1);
				user-select: none;
		}
		.qh-top-right { top: 20px; right: 20px; }
		.qh-top-left { top: 20px; left: 20px; }
		.qh-bottom-right { bottom: 20px; right: 20px; }

		.qh-header {
				padding: 12px 15px;
				background: rgba(255,255,255,0.05);
				border-bottom: 1px solid rgba(255,255,255,0.1);
				cursor: pointer;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 8px 8px 0 0;
				font-weight: bold;
				letter-spacing: 1px;
		}
		.qh-header:hover { background: rgba(255,255,255,0.1); }

		.qh-toggle { transition: 0.2s; }

		.qh-content {
				padding: 15px;
				display: flex;
				flex-direction: column;
				gap: 12px;
		}

		.qh-row { display: flex; flex-direction: column; gap: 6px; }

		.qh-label-row {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				color: #aaa;
		}

		/* Inputs */
		.qh-slider { width: 100%; cursor: pointer; accent-color: #4a90e2; }

		.qh-select {
				width: 100%;
				background: #333;
				color: white;
				border: 1px solid #555;
				padding: 5px;
				border-radius: 4px;
				cursor: pointer;
		}

		.qh-color-input {
				width: 100%;
				height: 30px;
				border: none;
				cursor: pointer;
				background: none;
		}

		.qh-button {
				background: #4a90e2;
				border: none;
				color: white;
				padding: 8px;
				border-radius: 4px;
				cursor: pointer;
				font-weight: bold;
				text-align: center;
				transition: 0.2s;
		}
		.qh-button:hover { background: #357abd; transform: translateY(-1px); }

		/* Folders */
		.qh-folder {
				border-left: 2px solid #444;
				padding-left: 10px;
				margin-top: 5px;
		}
		.qh-folder-header {
				font-size: 13px;
				color: #ddd;
				cursor: pointer;
				margin-bottom: 8px;
				font-weight: bold;
				display: flex;
				align-items: center;
				gap: 5px;
		}
		.qh-folder-header::before { content: '\u25B8'; display: inline-block; transition: 0.2s; }
		.qh-folder.open .qh-folder-header::before { transform: rotate(90deg); }
		.qh-folder-content { display: none; flex-direction: column; gap: 10px; }
		.qh-folder.open .qh-folder-content { display: flex; }
	`).withId("qh-styles").addToParent(document.head)}var b=class{header;content;wrapper;toggleEl;isOpen;hasDragged;draggable;constructor(e="QuickHUD",t="top-right"){this.toggleEl=i("span").withClass("qh-toggle").withText("\u25BC").ok(),this.header=i("div").withClass("qh-header").appendChild(i("span").withClass("qh-title").withText(e).ok()).appendChild(this.toggleEl).ok(),this.content=i("div").withClass("qh-content").ok(),this.wrapper=i("div").withClass("qh-wrapper").withClass(`qh-${t}`).appendChild(this.header).appendChild(this.content).addToParent(document.body).ok(),this.isOpen=!0,this.hasDragged=!1,this.draggable=!1,this.initDragAndToggle(),document.getElementById("quick-hud-styles")||m()}toggle(){this.isOpen=!this.isOpen,this.content.style.display=this.isOpen?"flex":"none",this.toggleEl.style.transform=this.isOpen?"rotate(0deg)":"rotate(-90deg)"}initDragAndToggle(){let e,t,r,s;this.header.addEventListener("click",n=>{if(this.hasDragged){this.hasDragged=!1;return}this.isOpen=!this.isOpen,this.content.style.display=this.isOpen?"flex":"none"}),this.header.addEventListener("pointerdown",n=>{if(!this.draggable)return;this.header.setPointerCapture(n.pointerId),this.header.style.cursor="grabbing",this.hasDragged=!1,e=n.clientX,t=n.clientY;let a=this.wrapper.getBoundingClientRect();r=a.left,s=a.top,this.wrapper.style.right="auto",this.wrapper.style.left=r+"px",this.wrapper.style.top=s+"px"}),this.header.addEventListener("pointermove",n=>{if(!this.header.hasPointerCapture(n.pointerId))return;let a=n.clientX-e,o=n.clientY-t;Math.hypot(a,o)>5&&(this.hasDragged=!0),this.hasDragged&&(this.wrapper.style.left=r+a+"px",this.wrapper.style.top=s+o+"px")}),this.header.addEventListener("pointerup",n=>{this.header.releasePointerCapture(n.pointerId),this.header.style.cursor="grab"})}setDraggable(e){return this.draggable=e,this.header.style.cursor=e?"grab":"default",e?this.header.setAttribute("title","Drag me!"):this.header.removeAttribute("title"),this}createRow(e,t){return i("div").withClass("qh-row").appendChildren(t).addToParent(e).ok()}addRange(e,t,r,s,l,n,a=this.content){let o=i("span").withText(String(s)).withId(`val-${e}`).ok(),h=i("div").withClass("qh-label-row").appendChild(i("span").withText(e).ok()).appendChild(o).ok(),d=i("input").withClass("qh-slider").withAttribute("type","range").withAttribute("min",String(t)).withAttribute("max",String(r)).withAttribute("step",String(l)).withAttribute("value",String(s)).ok();return this.createRow(a,[h,d]),d.addEventListener("input",g=>{let u=parseFloat(d.value);o.innerText=u.toFixed(l<1?2:0),n(u)}),this}addSelect(e,t,r,s,l=this.content){let n=i("div").withClass("qh-label-row").withText(e).ok(),a=[];Array.isArray(t)?t.forEach(h=>{let d=i("option").withText(h).withAttribute("value",h).withAttribute("selected",String(h==r)).ok();a.push(d)}):Object.entries(t).forEach(([h,d])=>{let g=i("option").withText(h).withAttribute("value",d).withAttribute("selected",String(d==r)).ok();a.push(g)});let o=i("select").withClass("qh-select").appendChildren(a).ok();return this.createRow(l,[n,o]),o.addEventListener("change",h=>s(o.value)),this}addButton(e,t,r=this.content){i("button").withText(e).withClass("qh-button").addToParent(r).ok().addEventListener("click",t)}addFolder(e){let t=i("div").withText(e).withClass("qh-folder-header").ok(),r=i("div").withClass("qh-folder-content").ok(),s=i("div").withClass("qh-folder").appendChild(t).appendChild(r).addToParent(this.content).ok();return t.addEventListener("click",l=>s.classList.toggle("open")),this.folderResult(this,r)}folderResult(e,t){return{addRange:(r,s,l,n,a,o)=>(this.addRange(r,s,l,n,a,o,t),this.folderResult(e,t)),addSelect:(r,s,l,n)=>(this.addSelect(r,s,l,n,t),this.folderResult(e,t)),addButton:(r,s)=>(this.addButton(r,s,t),this.folderResult(e,t)),ok:()=>e}}};})();
