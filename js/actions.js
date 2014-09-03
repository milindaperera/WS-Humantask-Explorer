var httpUrl = location.protocol + "//" + location.host;
var appName = "WS-Humantask-Explorer"; //TODO finalize appName

function claimTask(id){

	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=claim_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			if (success == 'true'){
				//successful
				window.location=httpUrl+"/"+ appName +"/inboxtask?id=" +id;
			}else{
				//unsuccessful
				alert("Unable to claim the task : " +id);
			}
        }
		
	});
}



function startTask(id) {
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=start_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				//window.location=httpUrl+"/UISampleCode1_1/inboxtask?id=" +id;

				//TODO : decide whether to remove this or not
				document.getElementById('taskActionBtns').innerHTML = '<button  onclick="stopTask(<%=id%>)" type="button" class="btn btn-default">Stop</button>\
																  		<button type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>\
																  		<button type="button" class="btn btn-default">Fail</button>';
				alert("Task Start success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/inboxtask?id="+id;

			}else{
				//unsuccessful
				alert("Unable to start the task : " +id);
			}
        }
		
	});
}



function stopTask(id){

	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=stop_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				//window.location=httpUrl+"/UISampleCode1_1/inboxtask?id=" +id;
				//TODO : decide whether to remove this or not
				document.getElementById('taskActionBtns').innerHTML = '<button onclick="startTask(<%=id%>)" type="button" class="btn btn-default">Start</button>\
																  		<button type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>';
				alert("Task Start success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/inboxtask?id="+id;

			}else{
				//unsuccessful
				alert("Unable to start the task : " +id);
			}
        }
		
	});

}



function releaseTask (id) {
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=release_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				//window.location=httpUrl+"/UISampleCode1_1/inboxtask?id=" +id;
				//TODO : decide whether to remove this or not
				document.getElementById('taskActionBtns').innerHTML = '<button onclick="startTask(<%=id%>)" type="button" class="btn btn-default">Start</button>\
																  		<button onclick="releaseTask(<%=id%>)" type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>';
				alert("Task RELEASE success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/taskview?id="+id;

			}else{
				//unsuccessful
				alert("Unable to RELEASE the task : " +id);
			}
        }
		
	});
	
}


function suspendTask(id){
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=suspend_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				
				//TODO : decide whether to remove this or not
				/*document.getElementById('taskActionBtns').innerHTML = '<button onclick="startTask(<%=id%>)" type="button" class="btn btn-default">Start</button>\
																  		<button onclick="releaseTask(<%=id%>)" type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>';*/
				alert("Task SUSPEND success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/inboxtask?id="+id;

			}else{
				//unsuccessful
				alert("Unable to SUSPEND the task : " +id);
			}
        }
		
	});

}



function resumeTask(id){
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=resume_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				
				//TODO : decide whether to remove this or not
				/*document.getElementById('taskActionBtns').innerHTML = '<button onclick="startTask(<%=id%>)" type="button" class="btn btn-default">Start</button>\
																  		<button onclick="releaseTask(<%=id%>)" type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>';*/
				alert("Task RESUME success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/inboxtask?id="+id;

			}else{
				//unsuccessful
				alert("Unable to RESUME the task : " +id);
			}
        }
		
	});


}



function failTask(id){
	
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=fail_task&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				
				//TODO : decide whether to remove this or not
				/*document.getElementById('taskActionBtns').innerHTML = '<button onclick="startTask(<%=id%>)" type="button" class="btn btn-default">Start</button>\
																  		<button onclick="releaseTask(<%=id%>)" type="button" class="btn btn-default">Release</button>\
																  		<button type="button" class="btn btn-default">Suspend</button>\
																  		<button type="button" class="btn btn-default">Comment</button>\
																  		<button type="button" class="btn btn-default">Assign</button>';*/
				alert("Task FAIL success : " +id);

				//TODO update to proper url [UISampleCode1_1]
				window.location=httpUrl+"/"+ appName +"/inboxtask?id="+id;

			}else{
				//unsuccessful
				alert("Unable to FAIL the task : " +id);
			}
        }
		
	});
}





//function to retrieve updates for comments

function updateComments(id){
	
	document.getElementById('commentTab').setAttribute("class","active");
	document.getElementById('historyTab').setAttribute("class","");
	document.getElementById('attachmentTab').setAttribute("class","");
	
	document.getElementById('commentList').style.display = "block";
	document.getElementById('historyList').style.display = "none";
	document.getElementById('AttchmentsList').style.display = "none";
	
	document.getElementById('addComment').style.display = "block";
	
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/update?type=update_comments&tid=" +id;
	//document.getElementById("demo").innerHTML = requestUrl;
	
	
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
						
			if (success == 'true'){
				//successful
				var ns1NS = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/types/200803';
				var commentList = data.firstChild.getElementsByTagNameNS('http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803','comment');
				
				var commentViewList = new String();
				
				//TODO : remove logs
				console.log('Comments = ' +commentList.length);
				
				for (var i = 0; i < commentList.length; i++) {
					console.log(commentList[i].getElementsByTagNameNS(ns1NS,'text')[0].textContent);
					
					var dateInfo = new Date(commentList[i].getElementsByTagNameNS(ns1NS,'lastModifiedTime')[0].textContent);
					
					commentViewList = commentViewList + '<li class="list-group-item" id="comment_' + commentList[i].getElementsByTagNameNS(ns1NS,'id')[0].textContent +'">\
																<div>'+commentList[i].getElementsByTagNameNS(ns1NS,'addedBy')[0].textContent +' added a comment - \
																	<time>'+dateInfo +'</time>\
																	<a href="#additionalInfoSection" onclick="deleteComment('+id +','+commentList[i].getElementsByTagNameNS(ns1NS,'id')[0].textContent +')">\
																		<span class="glyphicon glyphicon-remove" style="float:right; font-size:85%; color:#B0B0B0"></span>\
																	</a>\
																</div>\
																<div>'+commentList[i].getElementsByTagNameNS(ns1NS,'text')[0].textContent +'</div>\
															</li>';	
				}
				
				document.getElementById('commentList').innerHTML = commentViewList;

			}else{
				//unsuccessful
				//TODO : find way to find reason for failure and put in alert
				alert("Unable to update comments the task : " +id);
			}
        }
		
	});
}




//function to add comment
function addComment(id) {
	
	var text = document.getElementById("addCommentTextArea").value;
	//TODO update to proper url [UISampleCode1_1]
	var requestUrl = "/"+ appName +"/action?type=addComment_task&tid=" +id;
	
	var requestPayload = 	"<addComment><text><![CDATA["+text +"]]></text></addComment>";
	
	//TODO: remove log
	console.log('payload = ' + requestPayload);
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		data: requestPayload,
		contentType: "text/xml",
		dataType: "xml",
		success: function(data){
        	//window.location=httpUrl+"/UISampleCode1_1/inbox";
			//document.getElementById("demo").innerHTML = data;
			//document.getElementById("demo").innerHTML = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			console.log('Response : ' + data);
			
			if (success == 'true'){
				//successful
				alert("Task ADDCOMMENT success : " +id);
				
			}else{
				//unsuccessful
				alert("Unable to ADDCOMMENT the task : " +id);
			}
        },
        error:function(response){
        	alert('Failed : ERROR OCCURED');
    	}
		
	});

	
	$('#addCommentModal').modal('hide');
	$('#addCommentModal').on('hidden.bs.modal', function (e) {
		//TODO : try to avoid additioal update if add comment get failed
		//update comment list in ui
		updateComments(id);
	});
		
}









function updateHistory(id) {
	document.getElementById('commentTab').setAttribute("class","");
	document.getElementById('historyTab').setAttribute("class","active");
	document.getElementById('attachmentTab').setAttribute("class","");
	
	document.getElementById('commentList').style.display = "none";
	document.getElementById('historyList').style.display = "block";
	document.getElementById('AttchmentsList').style.display = "none";
	
	document.getElementById('addComment').style.display = "none";
	
	var requestUrl = "/"+ appName + "/update?type=update_history&tid=" +id;
	
	$.ajax({
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){		
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			console.log('Response : ' + data);
			
			if (success == 'true'){
				//successful				
				var historyList = data.firstChild.getElementsByTagName('event');
				
				var historyViewList = new String();
				
				//TODO : remove logs
				console.log('Comments = ' +historyList.length);
				
				//TODO : decide whether do we need to display in ASCENDING order or DESCENDING order
				for (var i = 0; i < historyList.length; i++) {
					console.log(historyList[i].getElementsByTagName('eventType')[0].textContent);
					
					var dateInfo = new Date(historyList[i].getElementsByTagName('eventTime')[0].textContent);
					
					//TODO ******** Decide whether do we need to display old state
					//TODO ******** Decide whether do we need to make efficient rendering xml data 
					historyViewList = historyViewList + '<li class="list-group-item">\
															<div> <b>User : </b>'
																+historyList[i].getElementsByTagName('eventInitiator')[0].textContent
															+'</div>\
															<div> <b>Operation : </b>'
																+historyList[i].getElementsByTagName('eventType')[0].textContent 
															+'</div>\
															<div> <b>Time : </b>'
																+'<time>' +dateInfo +'</time>' 
															+'</div>\
															<div> <b>Old State : </b>'
																+historyList[i].getElementsByTagName('oldState')[0].textContent 
															+'</div>\
															<div> <b>New State : </b>'
																+historyList[i].getElementsByTagName('newState')[0].textContent 
															+'</div>\
														</li>';
				}
				
				document.getElementById('historyList').innerHTML = historyViewList;
				
			}else{
				//unsuccessful
				alert("Unable to ADDCOMMENT the task : " +id);
			}
        },
        error:function(response){
        	alert('Failed : ERROR OCCURED : ' +response);
    	}
	});
	
	
}


function updateAttachments(id){
	document.getElementById('commentTab').setAttribute("class","");
	document.getElementById('historyTab').setAttribute("class","");
	document.getElementById('attachmentTab').setAttribute("class","active");
	
	document.getElementById('commentList').style.display = "none";
	document.getElementById('historyList').style.display = "none";
	document.getElementById('AttchmentsList').style.display = "block";
	
	document.getElementById('addComment').style.display = "none";
}


//function to delete comment 
//params: 	id: task id
//			commentId: comment id 
//TODO : decide whether do we have to avoid deleting comments posted by other users??
function deleteComment(id, commentId) {
	
	var requestUrl = "/"+ appName + "/action?type=deleteComment&tid=" +id +"&commentId=" +commentId;
	
	$.ajax({
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){	
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			console.log('Response : ' + data);
			
			if (success == 'true'){
				//successful
				//TODO : remove log
				console.log("comment_" + commentId);
				
				var commentElementId = "comment_" + commentId;
				var element = document.getElementById(commentElementId);
				
				if (element != null){
					element.parentNode.removeChild(element);
				}else{
					alert('ERROR OCCURED : element ' +commentElementId +" not found. Please refresh the page");
				}
			}else{
				//unsuccessful
				alert("Unable to DELETE COMMENT : " +commentId);
			}
        },
        error:function(response){
        	alert('Failed : ERROR OCCURED : ' +response);
    	}
	});
}



//function to assign task to another user
//params: 	id: task id
function assignTask(id){
	
	var assignee = document.getElementById("assignableUserList").value;
	
	var requestUrl = "/"+ appName +"/action?type=assign_task&tid=" +id +"&assignee=" +assignee;
	
	$.ajax({
		
		type: 'POST',
		url: httpUrl + requestUrl,
		dataType: "xml",
		success: function(data){
			
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			console.log('Response : ' + data.firstChild.toString());
			
			if (success == 'true'){
				//successful
				alert("Task ASSIGNTASK success : " +id);
				
				$('#addCommentModal').modal('hide');
				
				//redirect to task view
				window.location=httpUrl+"/"+ appName +"/taskview?id="+id;
				
			}else{
				//unsuccessful
				alert("Unable to ASSIGNTASK the task : " +id);
				$('#addCommentModal').modal('hide');
			}
        },
        error:function(response){
        	alert('Failed : ERROR OCCURED');
    	}
		
	});
	
}







/* ************************************************************************************************
 * 								Modal related functions
 *************************************************************************************************/
function assignTaskModalUpdate(id){

	var requestUrl = "/"+ appName +"/update?type=update_assignableUsers&tid=" +id;
	
	
	$.ajax({
		type: 'POST',
		url: httpUrl + requestUrl,
		success: function(data){	
			
			//TODO : fix error if getElementsByTagName returns null
			var success = data.firstChild.getElementsByTagName('success')[0].textContent;
			
			console.log('Response : ' + data);
			
			if (success == 'true'){
				//successful
				//TODO : remove log
				console.log("assignTaskModalUpdate SUCCESS");
				
				var ns2NS = 'http://docs.oasis-open.org/ns/bpel4people/ws-humantask/api/200803';
				var userList = data.firstChild.getElementsByTagNameNS(ns2NS ,'user');
				
				var userListDisplay = new String();
				
				if (userList.length > 0){
					for (var i = 0; i < userList.length; i++) {	
						console.log('users :' + userList[i].textContent);
						userListDisplay = userListDisplay + '<option value="'+userList[i].textContent +'">'+userList[i].textContent +'</option>';
					}
					
					document.getElementById('assignableUserList').innerHTML = userListDisplay;
					document.getElementById('taskAssignBtn').removeAttribute('disabled');
					document.getElementById('userUnavailableAlert').style.display = "none";
					
				}else{
					//no users available to assign
					document.getElementById('assignableUserList').innerHTML = userListDisplay;
					document.getElementById('taskAssignBtn').setAttribute('disabled','disabled');
					document.getElementById('userUnavailableAlert').style.display = "block";
				}
				//show modal
				$('#assignTaskModal').modal();
				
			}else{
				//unsuccessful
				alert("Unable to retrieve assignable user list : " +id);
			}
        },
        error:function(response){
        	//TODO : Display error reason
        	alert('Failed : ERROR OCCURED');
    	}
	});	
	
}










/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------
TODO : remove below content
------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


function completeTask(data, id){
	var url = "/bpmn-humantask/send?req=/bpmnrest/runtime/tasks/" + id;
	var variables = [];
	for(var i=0; i<data.length; i++){
		variables.push({
			"name":data[i].name,
			"value":data[i].value
		});
	}
	var body = {
		"action" : "complete",
		"variables" : variables
	};

	$.ajax({
        type: 'POST',
        contentType: "application/json",
        url: httpUrl + url,
        data: JSON.stringify(body),
        success: function(data){
        	window.location=httpUrl+"/bpmn-humantask/inbox";
        }
    });
}

function reassign(username, id){
	var url = "/bpmn-humantask/send?req=/bpmnrest/runtime/tasks/" + id;
	var body = { 
		"assignee" : username
	};

	$.ajax({
        type: 'PUT',
        contentType: "application/json",
        url: httpUrl + url,
        data: JSON.stringify(body),
        success: function(data){
        	window.location=httpUrl+"/bpmn-humantask/inbox";
        }
    });
}

function transfer(username, id){
	var url = "/bpmn-humantask/send?req=/bpmnrest/runtime/tasks/" + id;
	var body = { 
		"owner" : username
	};

	$.ajax({
        type: 'PUT',
        contentType: "application/json",
        url: httpUrl + url,
        data: JSON.stringify(body),
        success: function(data){
        	window.location=httpUrl+"/bpmn-humantask/inbox";
        }
    });
}

function startProcess(processDefId){
    var url = "/bpmn-humantask/send?req=/bpmnrest/runtime/process-instances";
    var body = { 
      "processDefinitionId": processDefId
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json",
        url: httpUrl + url,
        data: JSON.stringify(body),
        success: function(data){
            window.location=httpUrl+"/bpmn-humantask/inbox";
        }
    });
}