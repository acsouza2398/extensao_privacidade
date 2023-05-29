
async function getActiveTab(){
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function sessionStorage(tabs){
    const tab = tabs.pop();
    const listen = await browser.tabs.sendMessage(tab.id, {method: "sessionStorage"});
    var store = document.getElementById('sessionStorage');
    var url = document.getElementById('urlSession');
    url.innerHTML = tab.url;
    const proc = Object.values(listen.data);
    for (a in proc){
        const temp = proc[a].toString().split(",");
        store.innerHTML += "<li> " + temp[0] + "</li>";
        
    }   
    return listen
}

var currentTab = getActiveTab().then((tabs) => {
    const sessionstorage = sessionStorage([...tabs]);
});
