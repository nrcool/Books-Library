const msToTime = (dd) => {
    let d=new Date(dd).getTime()
    console.log(typeof d);
    let totaltime=d-(new Date().getTime())
    let day=0
    if (totaltime > 86400000) {
        day = Math.floor(totaltime / 86400000)
        totaltime = totaltime - day;
    }
    let seconds = Math.floor((totaltime / 1000) % 60);
    let minutes = Math.floor((totaltime  / (1000 * 60)) % 60);
    let hours = Math.floor((totaltime  / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    console.log(hours,minutes,seconds);
    if (day > 0) {
        totaltime = day + " Days " + hours + ":" + minutes + ":" + seconds;
    } else {
        totaltime = hours + ":" + minutes + ":" + seconds;
    }
    return totaltime;
}
export default msToTime