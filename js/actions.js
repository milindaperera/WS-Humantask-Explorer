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
		
	})
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
		
	})
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
		
	})

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
		
	})
	
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
		
	})

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
		
	})


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
		
	})
}





/*
------------------------------------------------------------------------------------------------------------------------------------------------------------------
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