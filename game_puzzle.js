function yes() {
    alert('of course <3');
}
function no()
{
    // Lấy random từ 0 - chiều rộng trình duyệt và làm tròn
    let x = Math.round(Math.random() * window.innerWidth);
    // Lấy random từ 0 - chiều dài trình duyệt và làm tròn
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('buttonNo').style.left = x + 'px';
    document.getElementById('buttonNo').style.top = y + 'px';
}