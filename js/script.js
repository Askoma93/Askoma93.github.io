let text = `Привет, Настенька. 
Вот делал делал презентаху и решил вот такую штуку для тебя сделать. 
Ты удивительная девушка. Мне нравится в тебе все. 
А как говорят "Если тебя ничего не бесит в человеке то значит ты влюбился)
Похоже я влюбился, уж прости.
Ты очень милая и нежная. Это не просто комплименты это то что я в тебе отметил и то что мне нравится. 
Мне очень близки твои взгляды в плане морали и от этого ты еще краше.
У тебя грустные глаза но они мне очень нравятся.
Мне очень сипатизирует твоя застенчевость и скромность.
Ты меня вдохновляешь, спасибо тебе за это.
Прогу писать было намного быстрее чем письмо)) Тут ведь прям думать надо)
Может это старомодно расписывать такие письма но мне пох) 
Захотелось тебе рассказать что я думаю.
Сори за ошибки если они тут есть)`;
let arr = text.split('');
let timer, counter = 0;

function writeLetter() {
    let tag = $(`<span>${arr[counter] === ' ' ? '&nbsp' : arr[counter]}</span>`);
    $("#letter").append(tag);

    counter++;

    if (counter === arr.length) {
        stopIntervalForLetter()
    }
}

function startIntervalForLetter() {
    timer = setInterval(writeLetter, 100);
}

function stopIntervalForLetter() {
    clearInterval(timer);
}

function go() {
    $("#letter").removeClass("invisible");
    startIntervalForLetter();
}
