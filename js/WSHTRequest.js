/**
 * 
 */
var log = new Log();

function initHTServerInfo(url, sessionCookie){
	this.URL = url;
	this.endPoint = this.URL + '/services/HumanTaskClientAPIAdmin/';
	this.cookie = sessionCookie;
}

/*
 * Function to send http request to back-end server
 * 
 * return response payload
 * throw exception 
 */
function requestBPS(endPoint, soapAction, BPSSessionCookie, payload){
	var BPSResponse = null;
	var httpClient = new XMLHttpRequest();
	httpClient.open('POST', endPoint, false);
	httpClient.setRequestHeader('COOKIE', BPSSessionCookie);
	httpClient.setRequestHeader('SOAPAction', soapAction);
	httpClient.setRequestHeader('Content-Type','text/xml');

	try{
		httpClient.send(payload);
		BPSResponse = httpClient.responseText;
	}catch(e){
		throw e;
	}
	
	return BPSResponse;
}


/*
 * Function to make WS-HT simplequery request with basic limited parameters 
 * 
 * return response payload
 * throw org.mozilla.javascript.WrappedException
 */
function simpleQueryBasic(status, pageSize, pageNumber, queryCategory, queryOrder, queryOrderBy){
	var payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
									xmlns:ns="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803"\
									xmlns:ns1="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/types/200803">\
					   <soapenv:Header/>\
					   <soapenv:Body>\
					      <ns:simpleQuery>\
					         <ns:simpleQueryInput>\
					            <ns1:status>' +status +'</ns1:status>\
					            <ns1:pageSize>' +pageSize +'</ns1:pageSize>\
					            <ns1:pageNumber>'+pageNumber +'</ns1:pageNumber>\
					            <ns1:simpleQueryCategory>'+queryCategory +'</ns1:simpleQueryCategory>\
					            <ns1:queryOrder>' +queryOrder +'</ns1:queryOrder>\
					            <ns1:queryOrderBy>' +queryOrderBy +'</ns1:queryOrderBy>\
					         </ns:simpleQueryInput>\
					      </ns:simpleQuery>\
					   </soapenv:Body>\
					</soapenv:Envelope>';
	
	var soapAction = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803/simpleQuery';
	//var endPoint = this.URL + '/services/HumanTaskClientAPIAdmin/';
	var BPSResponse = null;
	try{
		BPSResponse = requestBPS(this.endPoint, soapAction, this.cookie, payload);
	}catch(e){
		throw e;
	}
	return BPSResponse;
}

/*
 * Function to make WS-HT simplequery request Advance parameters 
 * 
 * return response payload
 * throw exception
 */
function simpleQueryAdvance(status, pageSize, pageNumber, queryCategory, queryOrder, queryOrderBy, createdDate, taskName){
	var payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
							xmlns:ns="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803"\
							xmlns:ns1="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/types/200803">\
						<soapenv:Body>\
							<ns:simpleQuery>\
								<ns:simpleQueryInput>\
									<ns1:status>' +status +'</ns1:status>\
									<ns1:createdDate>' +createdDate +'</ns1:createdDate>\
									<ns1:undatedDate></ns1:undatedDate>\
									<ns1:taskName>' +taskName +'</ns1:taskName>\
									<ns1:pageSize>' +pageSize +'</ns1:pageSize>\
									<ns1:pageNumber>' +pageNumber +'</ns1:pageNumber>\
									<ns1:simpleQueryCategory>' +queryCategory +'</ns1:simpleQueryCategory>\
									<ns1:queryOrder>' +queryOrder +'</ns1:queryOrder>\
									<ns1:queryOrderBy>' +queryOrderBy +'</ns1:queryOrderBy>\
								</ns:simpleQueryInput>\
							</ns:simpleQuery>\
						</soapenv:Body>\
					</soapenv:Envelope>';
	
	var soapAction = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803/simpleQuery';
	//var endPoint = this.URL + '/services/HumanTaskClientAPIAdmin/';
	
	var BPSResponse = null;
	try {
		BPSResponse = requestBPS(this.endPoint, soapAction, this.cookie, payload);
	} catch (e) {
		// TODO: handle exception
	}
	return BPSResponse;
}



/*
 * Function to make WS-HT loadTask request
 * 
 * return response payload
 * throw org.mozilla.javascript.WrappedException
 */
function loadTask(id){
	var payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
									xmlns:ns="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803">\
					   <soapenv:Header/>\
					   <soapenv:Body>\
					      <ns:loadTask>\
					         <ns:identifier>'+id +'</ns:identifier>\
					      </ns:loadTask>\
					   </soapenv:Body>\
					</soapenv:Envelope>';
	var soapAction = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803/loadTask';
	var BPSResponse = null;
	try {
		BPSResponse = requestBPS(this.endPoint, soapAction, this.cookie, payload);
	} catch (e) {
		throw e;
	}
	return BPSResponse;
}

/*
 * Function to make WS-HT getComments request
 * 
 * return response payload
 * throw org.mozilla.javascript.WrappedException
 */
function getComments(id){
	var payload = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
									xmlns:ns="http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803">\
								<soapenv:Body>\
								<ns:getComments>\
								 <ns:identifier>'+id +'</ns:identifier>\
								</ns:getComments>\
								</soapenv:Body>\
							</soapenv:Envelope>';
	var soapAction = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803/getComments';
	var BPSResponse = null;
	try {
		BPSResponse = requestBPS(this.endPoint, soapAction, this.cookie, payload);
	} catch (e) {
		throw e;
	}
	return BPSResponse;
}

