function clickHandler() {
    alert('You clicked me!');
}

function startLogic() {
    let newHtml = '<em>New Header</em>';
    document.getElementById('headerItem').innerHTML = newHtml;
}

startLogic();