function showImage(index) {
    // Скрываем все картинки
    document.querySelectorAll('iframe').forEach(function(iframe) {
        iframe.style.display = 'none';
    });
    // Отображаем только выбранную картинку
    document.getElementById('iframe' + index).style.display = 'block';
}
