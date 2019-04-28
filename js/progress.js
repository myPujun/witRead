//处理分秒关系转换及格式
let secondToMinute = function(second){
	let minute = Math.floor(Number(second)/60)
	let sec = Number(second)%60
	if(minute<10){
		minute = '0' + minute
	}
	if(sec<10){
		sec = '0' + sec
	}
	let time = minute+':'+ sec
	return time
}

let initTime = 0//初始播放时间
let canPlay = false//是否播放
let s = 30//音频时长(以秒为单位)
//初始化播放总时长
let sumTime = document.querySelectorAll('.sumTime')[0]
sumTime.innerHTML = secondToMinute(s)

var timer
let begin =function(sum=s){
	clearInterval(timer)
	canPlay = !canPlay
	let progress_current = document.getElementById('progress_current');
	let progress_btn = document.getElementById('progress_btn');
	let myTime = document.querySelectorAll('.initTime')[0]
	timer = setInterval(function(){
		if(initTime<sum&&canPlay){
			initTime++;
			myTime.innerHTML = secondToMinute(initTime)
		}else{
			clearInterval(timer)
		}
		progress_current.style.width = initTime/sum*100+'%'
		progress_btn.style.left = initTime/sum*100-2+'%'
	},1000)
}