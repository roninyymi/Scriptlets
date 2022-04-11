/// RemoveWarningToast.js
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
delay(1000).then(() => {
    const toasts = document.querySelectorAll('.toast-root');
    toasts.forEach(toast => toast.remove());
    console.log("Warning toast removed!");
});
