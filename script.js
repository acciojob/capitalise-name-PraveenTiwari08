//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    var inputField = document.getElementById('fname');
    
    inputField.addEventListener('blur', function() {
        this.value = this.value.toUpperCase();
    });
});
