
const element_clock_clock = document.getElementById(`id_p_clock`);
const element_clock_stopwatch = document.getElementById(`id_p_stopwatch`);

//==================================================================================================
let state_stopwatch = 0;
let stopwatch_starttime = 0;

//==================================================================================================
const element_btn_start = document.getElementById(`id_btn_start`);
element_btn_start.addEventListener('click',()=>{
    stopwatch_starttime = new Date();
    state_stopwatch = 1;
    //console.log("start");
})
//
const element_btn_stop = document.getElementById(`id_btn_stop`);
element_btn_stop.addEventListener('click',()=>{
    state_stopwatch = 0;
    //console.log("stop");
})
//
const element_btn_reset = document.getElementById(`id_btn_reset`);
element_btn_reset.addEventListener('click',()=>{
    state_stopwatch = 0;
    stopwatch_starttime = new Date();
    //console.log("id_btn_reset");
    loadstopwatch();
})
//==================================================================================================

//時計とストップウォッチを動かす
function clock_clock(){
    const now = new Date();//Dateインスタンス
    
    element_clock_clock.textContent = "現在時刻：" + now.toLocaleTimeString();
    if (state_stopwatch == 1){
        loadstopwatch();
    }
}

//ストップウォッチをロードする
function loadstopwatch(){
    const now = new Date();//Dateインスタンス
    stopwatch_curr = now-stopwatch_starttime;
    element_clock_stopwatch.textContent = "ストップウォッチ：" + formatMinutes(stopwatch_curr);
}

//-時間-分表記に変換
function formatMinutes(totalMillSeconds) {
    totalSeconds = Math.trunc(totalMillSeconds/1000);
    if (typeof totalSeconds !== 'number' || isNaN(totalSeconds) || totalSeconds < 0) {
        return '0秒';
    }
    // 小数点以下を切り捨て
    const sec = Math.floor(totalSeconds);

    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    const parts = [];

    if (hours > 0) parts.push(`${hours}時間`);
    if (minutes > 0) parts.push(`${minutes}分`);
    if (seconds > 0 || parts.length === 0) parts.push(`${seconds}秒`);

    return parts.join('');
}

setInterval(clock_clock, 1000);
