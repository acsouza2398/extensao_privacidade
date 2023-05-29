async function getActiveTab(){
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function localStorage(tabs){
    const tab = tabs.pop();
    const listen = await browser.tabs.sendMessage(tab.id, {method: "localStorage"});
    var store = document.getElementById('localStorage');
    var url = document.getElementById('urlLocal');
    url.innerHTML = tab.url;
    const proc = Object.values(listen.data);
    for (a in proc){
        const temp = proc[a].toString().split(",");
        store.innerHTML += "<li> " + temp[0] + "</li>";
        
    } 
    return listen;
}

var currentTab = getActiveTab().then((tabs) => {
    const localstorage = localStorage([...tabs]);
});
