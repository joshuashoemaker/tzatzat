export namespace ipc {
	
	export class messageJSON {
	    id: string;
	    content: string;
	    datetime: string;
	    senderUserId: string;
	
	    static createFrom(source: any = {}) {
	        return new messageJSON(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.content = source["content"];
	        this.datetime = source["datetime"];
	        this.senderUserId = source["senderUserId"];
	    }
	}
	export class userJSON {
	    id: string;
	    displayName: string;
	    profilePictureSource: string;
	
	    static createFrom(source: any = {}) {
	        return new userJSON(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.displayName = source["displayName"];
	        this.profilePictureSource = source["profilePictureSource"];
	    }
	}
	export class RecentChat {
	    id: string;
	    senderUsers: userJSON[];
	    // Go type: messageJSON
	    lastMessage: any;
	
	    static createFrom(source: any = {}) {
	        return new RecentChat(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.senderUsers = this.convertValues(source["senderUsers"], userJSON);
	        this.lastMessage = this.convertValues(source["lastMessage"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SendMessageRequest {
	    chatId: string;
	    content: string;
	    datetime: string;
	    senderUserId: string;
	
	    static createFrom(source: any = {}) {
	        return new SendMessageRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.chatId = source["chatId"];
	        this.content = source["content"];
	        this.datetime = source["datetime"];
	        this.senderUserId = source["senderUserId"];
	    }
	}

}

