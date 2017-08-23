var nametext = new Array(13);
var messages = new Array(13);
function Teamname(team) {
    switch (team) {
        case "xingxin":
            nametext = [" ", "莫凡", "安文逸", "罗辑", "乔一帆", "包荣兴", "唐柔", "魏琛", "方锐", "陈果", "苏沐橙", "叶修", " "];
            messages = ["冠军之队，王者之师！",
                        "荣耀不是一个人的游戏。", 
                        "就算再烂，我也是兴欣的治疗！",
                        "那是水平不够，水平够了自然可以做到。",
                        "是的，三次，足够了！",
                        "你是什么星座的？",
                        "这一次我们一定会赢的！",
                        "老夫那时还是神一样的少年！",
                        "荣耀没你想的这么甜。",
                        "有幸在那一天，遇到你，最了不起的你。",
                        "是到了靠自己的时候了！",
                        "我可是职业选手，你以为呢？"];
            break;
        default:
            nametext[0] = 1;
            messages[0] = " You won!"
            for (var i=1;i<13;i++){
                nametext[i] = nametext[i-1]*2;
                messages[i] = "Game over!"; 
            }
    }

}
