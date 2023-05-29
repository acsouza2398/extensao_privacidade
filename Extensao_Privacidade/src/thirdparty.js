async function getActiveTab(){
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function thirdParty(tabs){
    const tab = tabs.pop();
    const listen = await browser.tabs.sendMessage(tab.id, {method: "thirdParty"});
    const all_connections = listen.data.count;
    var thirdparty = document.getElementById('thirdParty');
    if (all_connections > 0){
        thirdparty.innerHTML = all_connections + " connections found";
    } else {
        thirdparty.innerHTML = "No connections found";
    }
    
}

var currentTab = getActiveTab().then((tabs) => {
    const connections = thirdParty([...tabs]);
});