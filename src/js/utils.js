const sharePage = (url, title, text) => {

    if (!('share' in navigator)) return alert('Web Share API is not supported in your browser.');

    navigator
        .share({
            title: title || document.title,
            text: text || 'Check out this page!',
            url: url || window.location.href
        })
        .catch((error) => console.error('Error sharing:', error));

}

export {
    sharePage,

}