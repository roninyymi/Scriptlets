/// RemoveWarningToast2.js
const myInterval = setInterval(ToastClean, 1000);

function ToastClean() {
    const toasts = document.querySelectorAll('.toast-root');
    if (toasts.length > 0) {
        toasts.forEach(toast => toast.remove());
        console.log("Warning toast removed! t. WTR9002");
        clearInterval(myInterval);
    } else {
        console.log("tick");
    }
}
