
declare var dataLayer:any;
var displayDetectClass: DisplayDetect;

class DisplayDetectItem{
	public eventFired: boolean = false;
	constructor(public element:HTMLElement, public eventName:string, public eventId:string){

	}

	fireEvent(){
		let eSrc;

		if(this.eventFired) return;

		eSrc = this.element.getAttribute('data-src');

		if(eSrc){
			this.element.setAttribute('src', eSrc);
		}

		if(this.eventName && this.eventId)
			dataLayer.push({
				'event': this.eventName,
				'eventId': this.eventId
			});

		this.eventFired = true;

	}
}

class DisplayDetect{

	public registeredListeners: DisplayDetectItem[] = [];

	constructor(){

		this.registerListeners();
		this.registerScrollListener();
	}

	registerListeners(){
		let listenerElements = document.querySelectorAll(".display_detect"),
		e, evt, evt_id, dSrc;

		for (var i = 0; i < listenerElements.length; ++i) {
			e = listenerElements[i];
			evt = e.getAttribute('data-event');
			evt_id = e.getAttribute('data-event-id');
			dSrc = e.getAttribute('data-src');
			if(evt && evt_id || dSrc)
				this.registeredListeners.push(new DisplayDetectItem(e, evt, evt_id))
		}

		this.onScrollEvent();
	}

	registerScrollListener(){
		document.addEventListener("scroll", this.onScrollEvent.bind(this));
	}

	onScrollEvent():void{
		let isVisible;
		for(var o of this.registeredListeners){
			this.isVisible(o.element) ? o.fireEvent() : null;
		}
	}

	isVisible(el:HTMLElement){
		let elemTop = el.getBoundingClientRect().top,
		elemBottom = el.getBoundingClientRect().bottom,
		isVisible = (elemTop >= 0) && ((elemBottom-300) <= window.innerHeight),
		cStyle = getComputedStyle(el);

		if(cStyle.display === 'none')
			return false;

		//tricki
		//Jeśli user widział górę to ustawiamy na elemencie klase topSeen
		if(elemTop <= window.innerHeight)
			el.classList.add('topSeen');

		if(elemBottom <= window.innerHeight)
			el.classList.add('bottomSeen');

		if(!isVisible && (el.classList.contains('topSeen') && el.classList.contains('bottomSeen')))
			isVisible = true;

		return isVisible;
	}
}

displayDetectClass = new DisplayDetect();
