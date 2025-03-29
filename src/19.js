// 生成随机数
function getRandomNumber(min, max) {
    min = Math.floor(Math.random() * (max - min + 1)) + min;
    return min;
}

// 获取当前日期和时间
function getCurrentDateAndTime() {
    let date = new Date();
    let time = date.toLocaleString('default', { hour: '2-digit', minute: '2-digit' });
    return time;
}

// 计算两个数的平均值
function average(a, b) {
    return (a + b) / 2;
}
