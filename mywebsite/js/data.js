
//var dataJsonStr='{"html":[],"css":[],"javascript":[],"jquery":[],"zepto":[],"git":[],"flex":[],"layout":[],"buildWebsite":[],"resources":[],"encourage":[],"noCategory":[]}';
//var dataJsonStr='{"html":[],"css":[],"javascript":[],"jquery":[],"zepto":[],"git":[],"flex":[],"layout":[{"addArticleTtitle":"实现水平居中的几种方法","classify":"layout","addarticleContent":"1.inline-block+text-align<br>特点：<br>&nbsp;&nbsp;兼容性好，给display:&nbsp;inline-block;做兼容（*display:inline;*zoom:1;）<br><br>后可以支持到IE6<br>实现方法：<br>&nbsp;&nbsp;.child1{display:&nbsp;inline-block;background-color:&nbsp;black;}<br>&nbsp;&nbsp;.parent1{text-align:&nbsp;center;}<br><br>2.table+margin<br>特点：&nbsp;<br>&nbsp;&nbsp;兼容性：display:&nbsp;table&nbsp;IE8以上，如果想支持IE6、7可以把div换位table结<br><br>构<br>实现方法：<br>&nbsp;&nbsp;.child2{display:&nbsp;table;margin:&nbsp;0&nbsp;auto;&nbsp;background-color:&nbsp;black;}<br><br>3.absolute+transform&nbsp;<br>特点：<br>&nbsp;&nbsp;兼容性：transform&nbsp;IE9以上&nbsp;&nbsp;优点：设置position:&nbsp;absolute;的元素脱离文<br><br>档流，不影响其他子元素<br>实现方法：<br>&nbsp;&nbsp;.parent3{position:&nbsp;relative;}<br>&nbsp;&nbsp;.child3{position:&nbsp;absolute;left:&nbsp;50%;transform:translateX(-<br><br>50%);background-color:&nbsp;black;}<br><br>4.flex<br>特点：<br>&nbsp;&nbsp;兼容性：flex&nbsp;IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent4{display:&nbsp;flex;justify-content:center;}<br>&nbsp;&nbsp;.child4{background-color:&nbsp;black;}<br>","addLink":"<a href=&quot;./layout/demo1.html&quot;>以上实现方法Demo<a/>","date":"2016-01-05 00:14","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":0},{"addArticleTtitle":"实现父元素不定高度，子元素垂直居中的几种方法","classify":"layout","addarticleContent":"1.table-cell+vertical-align<br>特点：<br>&nbsp;&nbsp;兼容到IE8以上，如果想兼容IE6、7,把&nbsp;DIV改成table<br>实现方法：<br>&nbsp;&nbsp;.parent1{display:&nbsp;table-cell;vertical-align:&nbsp;middle;background-color:&nbsp;black;height:&nbsp;100px;}<br>&nbsp;&nbsp;.child1{background-color:&nbsp;white;}&nbsp;<br><br>2.absolute+transform&nbsp;<br>特点：&nbsp;<br>&nbsp;&nbsp;兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent2{position:&nbsp;relative;height:&nbsp;100px;background-color:&nbsp;black;}<br>&nbsp;&nbsp;.child2{position:&nbsp;absolute;top:50%;&nbsp;transform:translateY(-50%);&nbsp;background-color:&nbsp;white;}<br><br>3.flex<br>特点：<br>&nbsp;&nbsp;兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent3{display:&nbsp;flex;&nbsp;align-items:center;&nbsp;background-color:&nbsp;black;&nbsp;height:&nbsp;100px;}<br>&nbsp;&nbsp;.child3{background-color:&nbsp;white;}<br>","addLink":"<a href=&quot;./layout/demo2.html&quot;>Demo<a/>","date":"2016-01-05 10:09","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":1}],"buildWebsite":[],"resources":[],"encourage":[{"addArticleTtitle":"穷人思维","classify":"encourage","addarticleContent":"穷人为什么穷？无论中国美国，主流对此都有种没明说但心照不宣的观点：因为他们懒、酗酒、赌博……曾有条被疯转微博，一位妈妈卖盗版光盘被城管追赶跳入水中，当时，一位女博士点评说北京好月嫂都月入过万了，何必要选这么苦情的生活方式？此微博后被证实为谣言，但抱小孩卖毛片的中年女性的确曾是北京一景。中产阶级的眼界不是穷人的眼界，正如本书作者也苦苦思索，劳工为何不要求加薪，或寻找更高薪工作，甚至组织工会，维护自身权益？答案是，越贫困，越无力。<br><br>畅销书女作家芭芭拉•艾伦瑞克进入美国底层，体验在时薪6~8美元下，辛勤工作是否能生活下去，她的答案是：不能。除非你跟别人合租房子，或者打两份工。<br><br>她在三个城市当过餐厅服务员、旅馆服务员、清洁女工、看护护理及沃尔玛的售货员，她努力工作，也努力尝试收支平衡，为此她曾勇猛打两份工，一周工作七天，每周还能在打工的看护之家免费吃两三餐，这些都帮助了她。但到旅游旺季，房租将上涨三倍，身为女佣的她，只能再次破产。<br><br>作者有穷人没有的优势：在前面的几十年，她有高于一般水平的医疗照顾、良好饮食、她常年练举重，身体“是不寻常的结实”。并且，就这个实验来说，她作弊了，她给自己租车，用信用卡付费；每到一个城市，她备有一千多美元的起头基金；她开了外挂，却仍然没有打赢。<br><br>我一度觉得这本《我在底层的生活——当专栏作家化身女服务员》是来黑美国的，因为美剧、好莱坞电影不曾说过，还有这么个美国存在：低薪白人劳工，三四人挤在一个小房间里生活；怀孕的清洁工摔伤也不敢请假，一天没薪水，第二天就没钱买杂物；沃尔玛的员工付不起房租，住在收容所；背着十几磅重的吸尘器吸尘、跪在地上擦地，女佣们话题热点是哪个牌子的止痛药最好用；没有健康保险，因为太贵，这意味如果生病，你要比别人多花钱。<br><br>女招待考虑搬入每晚40~60美金的汽车旅馆（她每天才挣四十多美金），作家惊讶问她怎么想的，同事像看笨蛋一样看着女作家：我上哪儿弄一个月的租金跟押金去租公寓？而女作家，之所以能租到月租500的公寓，是拜她从自己的现实世界带来的1000美金付押金及头一月租金所赐。<br><br>不断上涨的房租是穷人的噩梦，作者发现，穷人越来越多住在汽车旅馆。后者可以按天结账，犹如鸦片，诱惑现金紧张的穷人陷进去，微薄的积蓄被烧光，更加不可能有钱租公寓。作者发现有两个男人轮流睡一张床，一个人睡觉时另一个在车上打盹。而我忽然明白卡佛小说里的那些穷人，那些卖掉农庄，揣着全部积蓄进城找工作的一家人，在一间汽车旅馆里住下去，某一天又一声不吭地走掉——他们就是汽车旅馆鸦片的受害者，他们不是走掉，是掉入地狱的更下一层。<br><br>作者认为，穷人破产，因为薪水太低，而房租太贵。这一点中国读者想必也深有共鸣。当房租犹如奥运会田径赛道上的博尔特般一路狂奔，穷人只能不停搬家，搬入一间又一间不带家具的公寓，锅碗瓢勺家具又是一笔钱；或入住汽车旅馆胶囊公寓，只剩一张床那么大小的房间，你证悟到睡觉和死亡何其相似。而无法做饭的后果，是你要花更多钱在吃饭上。最终，她，还有我们，均不难发现一条荒谬定律，如果你穷，你就得比不穷的人花更多的钱，才能活下去。这不是美剧中的美国，但它并不陌生。全世界的金钱流动法则相同：钱生育钱，贫困生育贫困。<br><br>作者有强烈的政治立场，而她真实凶残的打工经历平衡了她的倾向。说到底这并不是一本坐在空调房间凭政治理念写出来的书，她一天工作九小时，住在没有纱窗空调电扇的旅馆，因为锁不上门，不得不合衣而睡。而她的工作，是在35度高温下打扫“有五套浴厕的房子”，撅起屁股，跪于大理石地板，用抹布擦过每一寸地面，擦干净整排玻璃门上的每一个指纹，而且遵循女仆美德，不在主人家喝水；是每周六日服侍近四十名阿兹海默症老年病人吃三餐、清理餐具、擦桌吸地，“我只能全力跟上洗碗机吐出盘子和脏盘子涌进来的速度”；午饭是高速路上停车上厕所时的五分钟；上厕所要打卡。即使这样，仍有几次，她不得不求助于慈善机构，后者提供的免费食物，对没有冰箱的穷人来说并不实用；而一个“平价”通铺床位，每晚也要19美元，慈善机构的小姐建议她“搬进收容所”，以便存到足够的钱交第一个月的房租和押金。<br><br>她将自己奉献为小白鼠，而我们得以观察，贫穷是如何侵蚀一个人的精神。<br><br>作者自己能从时薪5.15美元的餐厅跳槽至时薪7.5，因为她有车，可四处应聘，上班范围更有弹性。她的同事若换工作，交通是大问题，甚至需更换住处。穷人比富人更保守，更不愿意改变，就像奴隶比奴隶主更保守。物质上的窘迫，使他们承受不起改变，冒不起一周没工作的风险。那意味着他们会挨饿，从现在的房子被赶出去，掉到地狱更可怕的下一层。<br><br>但作者在找工作时呈现的状态，她的精神活力、她的勇气才是她和她的同事们之最大区别。同样被羞辱及盘剥，她跃跃欲试组织工会，她的同事却只希望偶尔请一天假，第二天还能有钱买点杂货。这一部分也可用来解释教育的重要所在，作者隐瞒了博士学位，却拿不走自己的思维。精神的贫困是穷人解脱贫穷的最大障碍。<br><br>两个多月的底层生活后，作者的背伤复发、全身起了疱疹，并且，她身为“民主社会主义者”“女性主义者”，对底层人民抱有的博爱之情，慢慢变淡，代之以麻木，甚至仇恨。一个身高不到1米4的女售货员跟她起了纠纷，她看着后者踩着梯子才够得着高处衣服，一股恶意涌上，“希望能看到她啪地一声摔到地上”；而残疾员工忧伤地坐在轮椅里，她看到第一感觉是“至少你还坐着。”——她忽然意识到，如果自己的父亲没有脱离矿工身份，如果去掉自己的教育程度，也许自己就是现在这样：苛刻、狡猾、满怀怨恨。她没有强调，但读者可以自行总结：穷人仇恨穷人。这不是什么新鲜事，却让人难以面对——穷人不都是善良的么？法国作家塞利纳在他1935年的《长夜行》里写道：“我们之间有五个法郎的隔阂，就足以产生恨，希望他们统统死光。”“五个法郎”，可以换成小升初的一个名额、一个工作机会，甚至仅仅是高峰期公车上的一个座位、它仍然“足以产生恨，希望他们统统死光”。不信你看北京上海贴吧里，那些铺天盖地的“外地人滚出去”。<br><br>贫穷是一种专制，它培养自己的奴隶。当你习惯于被剥夺自尊，习惯于被当做一个小偷/懒虫/酒鬼对待，当你常年生活在社会边缘、你存在的意义被抹去，宛如你根本不存在。而打开电视——无论中美——都是老板，男女白领，即使是喊着奋斗的北漂，住的也是你这辈子都住不上的三室两厅，它会让你以为“只有我自己才是不正常的”。精神上的专制就此完成。穷奴大抵上有两种，一种借仇恨别人获得自己高人一等的存在价值感，一种则接受自己是最弱的，就像那些被迫在自己的社会体系中落入屈从位置的沮丧的猴子，它们变得焦虑而退缩，不再挣扎，甚至对自卫也毫无兴趣。<br><br>借助铁丝和剪刀，能培养出自然界不存在的侏儒松，定型成功，即使松开捆扎铁丝，那些松树也固定在扭曲的姿态。同样，精神上的专制，令你在内心相信自己就是个侏儒。芭芭拉•艾伦瑞克细腻雄辩地写出精神的毁灭之路，我却在其中看到熟悉的人脸，作为经历了大饥荒的幸存者的后代，她绘出的精神贫穷者的肖像我并不陌生。那些脸在我们周围漫游，如恒河河沙，又似幽灵。<br><br>怎么办？也许没有一个药方可以取消贫困，但至少下次看到一个走投无路的穷人，在指责他懒惰、酗酒之前还可以多想一秒钟；在大吼“外地人滚出去”之前，还可以思考一下这仇恨从何而来；即使我们的初始值是一棵被剪成侏儒的盆景，也可以在松绑后尝试站起来，笔直地站成一棵树。<br><br>开外挂的女作家，无论如何也做不到收支平衡。但实在要流浪街头时，她可以挖出自己的信用卡，大吃一顿。可是现实中真正的穷人，她的同事们呢？<br><br>我想起《没有人给他写信的上校》的最后一段：绝望的妻子揪着上校的领子，问这些天我们吃什么？<br><br>“上校活了七十五岁——用他一生中分分秒秒积累起来的七十五岁——才到了这个关头。他自觉心灵清透，坦坦荡荡，什么事也难不住他。他说：<br><br>‘吃屎’。”","date":"2016-01-04 20:15","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":0},{"addArticleTtitle":"行走，回首","classify":"encourage","addarticleContent":"&nbsp;&nbsp;人生路，漫漫而行。一阵秋雨洒落，驻足回首，秋叶纷飞。踩过一叠厚厚堆积的落叶，仿佛就像生命中一堆纠缠不清的人和事，渐渐遗忘，渐渐随风。<br>　　<br>　　往事过眼，便是回忆。你的呢喃，清晰在耳畔。但我的眼眸，已失去了你的色彩。人生这条路，走的越远，失去的就越多，想抓也抓不住，想停也只能一直走下去。<br>　　<br>　　昨日的温存，已成了今日的怀恋。依稀记得梦中的清风随了夜，划在心底的寒，淡淡的痛。你说的话语，凋零在上一个叶落，满地的残朵。我却傻傻祈求，时光捡起，成为我心中不忘的那朵。<br>　　<br>　　转眼间秋风舞动，一声呓语飘落清冷，像一场邂逅，一次回眸。记忆在残风中流逝，那样匆匆，那样落寞，连呼喊都来不及停留，便消散在天边不见。书刻思念的篇章，空白，黯淡，碎散一地无法拼凑。寥寥秋落，回忆是那么的无助，那么令人叹息，苍白的嘴唇自嘲苦笑，连握笔的手指都那么的无力，消瘦。<br>　　<br>　　告诉我什么是孤独？我们还会再见吗？最后的旅程擦肩而过，时光带走了一切，但我只求留下最后的思念。<br>　　<br>　　醉念红尘，抚桥流水。岁月铸就的青石板路，寸草难生，如同霜寒舞天的夜月，哀叹了生命的流逝。一曲残星滑落，蓦然回首。这条路，孤独的没有任何生命。<br>　　<br>　　时间匆忙，我们来不及休息。风景匆匆而来又匆匆而去，看到了风景却落下了脚程。人的使命就是在孤独寂寞中寻索，可人自己，却想看看尘世的美艳。这一世为使命，还是为自己？<br>　　<br>　　又是那条无人的街道，一个人漫步远去，莫名的情绪，莫名在颤动。眼神茫然地注视着前方，寒风带起的落叶，如思念般那么无助那么遥远，像根丝线般，缠绕着你绷紧的心弦，连雨落到脸上，还依旧倔强地走着。<br>　　<br>　　那些人再也不回来，那片天最后模糊了色彩。我们都是孤独的，都在黑夜中寻找被云雾遮掩的星空，却看到了流星失落的雨夜。期盼着刺目的阳光，却在逆光的地方，看着自己沉默的倒影。以为世界会关注自己，转过身看着消失的彼岸，却不得不为世界而哭泣。<br>　　<br>　　一条沉默的路，一个狼狈的背影。彷徨，无助。孤独的感觉似幽风徘徊在耳边，拉动了最后的心弦，凄厉地惨叫。奔跑，跌撞。无人的世界，无人的寂静。回首，期盼的眼眸望不到熟悉的轻语;行走，孤独的身影望不到漆黑的彼方。泪断的雨线，渐渐模糊了记忆的错觉……<br>　　<br>　　虚无的世界，虚无的路，孤独的人，孤独地走。耳边飘来了熟悉的话语:不是所有委屈都可以呐喊，不是所有心事都可以述说，有些事只有自己能做，别人帮不了你。这条路，注定是寂寞的。回首，充满了期待却是更残酷的等待。<br>　　<br>　　秋季，等待了一地叶落，像那些荒芜的岁月，像是旅人，望着沉默的斑驳古路，带着落寞，行走，回首……","date":"2016-01-04 20:24","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":1},{"addArticleTtitle":"一直努力，直至成功","classify":"encourage","addarticleContent":"&nbsp;&nbsp;所谓理想就是把我们的愿景放在一个价值观的尺度上度量，然后决定人生往哪里走？去哪里？走多远？和谁走？<br>　　<br>　　从民营企业角度看，我做生意是被迫的一个开始，但习惯于用自己的价值观来引导我做判断，因此一直把丧事当喜事办。因为我总觉得自己要去心中期待的某个地方，这时我会经常想起鲁迅的一个小说《过客》。这个过客腿脚不好，他一直不停地走，有天他到一个茶水摊和一个老人和小孩对话，询问前方的路该怎么走？老人告诉他：过了一个坟地，再往前一拐，差不多就到了。他又问那小孩儿，小孩告诉他，你看见那片鲜花了，再往前走就到了。同样一个地方，老人眼里看见的是坟墓，而年轻人眼里看见的是鲜花，可见视野和心态截然不同。而这个过客心里只有一句话，就是——我要走，我要走，我要走。<br>　　<br>　　我在创业和折腾的过程中经常会想起这个故事，我心里有两个地方可以去，一个是坟墓，一个是鲜花，不管是哪个，当下就是“我要走”这样一个状态，这种想法陪伴我，从开始很被动的创业，甚至到后来哪怕负债累累，人生已经到了最绝望的时候，始终没有放弃，仍然把丧事当喜事办，因为我意识到理想是希望的风，是黑暗尽头的那道光，有了它，我能驱走黑暗与恐惧，虽然不知道前方有多远，但是依然有坚持下去的力量。<br>　　<br>　　50岁生日前夕，我决定送给自己的一份特别、有纪念意义的生日礼物，去台湾骑自行车环岛旅行。那时正值酷暑，我每天骑行80多公里，总共环岛5500公里，路上看到一个老太太比我还猛，她磕头环岛。我问她，您怎么走？她说，我就拜拜拜拜，一直走没停过。我很是敬佩，送给她一瓶水，她接着继续走。真的很难想象一个瘦老太太单薄的身躯下，哪来这么大能量？只有一个答案：她心里有佛，有信念，有理想和快乐的天堂，所以才有如此的毅力和能量，不停地拜下去，也许有一天膝盖流血她却浑然不知，也许有一天她会劳累晕眩，但她心里追求的天堂不会坠落。<br>　　<br>　　我再说一个崔永元的故事，原来我们俩很不搭界，相信他对“黑心开发商”也抱有道德上的不满，而在央视看到的小崔似乎也有点装，老讲长征、理想什么的，后来我听一个朋友介绍说他在做一个口述历史的节目。某天，我们在一家酒店中见面，香格里拉见面，他送我一些小人书和他做的口述史的资料，我才发现原来屏幕以外的小崔很了不起。<br>　　<br>　　有个夏天我把这个故事讲给王石，带着王石去了小崔的工作室，到了工作室以后，我们看到崔永元花了十几、二十年的时间一直在做一件事情，就是记录当下中国人的状态，而且默默无闻地到处筹资。这让我看到了一个有责任感的男人，这个男人没事儿找事儿，把别人事儿当自己事儿，自己的事儿不当回事儿，自己都快抑郁了，还是操心民族的历史是不是能记录下来，着实感动了我，也感动了王石。后来，我们成了好朋友，也参与到了口述历史的项目中，共同记录这个时代以及这个时代中人们的想法和事迹。<br>　　<br>　　古人讲：势必有坚韧不拔之志，才有坚韧不拔之力。志向是带来毅力的事儿，就像磕头环岛的老太太，如果她心里没有佛，怎会有毅力去磕头环岛？毅力依附于信念和理想之上，不是欺骗也不是虚妄，理想除了让我们获得能量、财富外，还会在我们遭遇痛苦和不幸时支撑我们活下去。否则，当我们遇到巨大的困难时，很可能会选择逃避，甚至会在不为人知的时候选择死亡。在这个纷繁、价值观多元的时代，希望我们对“理想”这个词不再拒绝，不再隔膜，不再离它而去，而是从脚下做起，一天天努力，直到成功为止。","date":"2016-01-04 20:26","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":2}],"noCategory":[]}';
var dataJsonStr='{"html":[],"css":[],"javascript":[],"jquery":[],"zepto":[],"git":[],"flex":[],"layout":[{"addArticleTtitle":"居中布局---实现父元素不定宽高、子元素水平居中的几种方法","classify":"layout","addarticleContent":"1.inline-block+text-align<br>特点：<br>&nbsp;&nbsp;兼容性好，给display:&nbsp;inline-block;做兼容（*display:inline;*zoom:1;）<br><br>后可以支持到IE6<br>实现方法：<br>&nbsp;&nbsp;.child1{display:&nbsp;inline-block;background-color:&nbsp;black;}<br>&nbsp;&nbsp;.parent1{text-align:&nbsp;center;}<br><br>2.table+margin<br>特点：&nbsp;<br>&nbsp;&nbsp;兼容性：display:&nbsp;table&nbsp;IE8以上，如果想支持IE6、7可以把div换位table结<br><br>构<br>实现方法：<br>&nbsp;&nbsp;.child2{display:&nbsp;table;margin:&nbsp;0&nbsp;auto;&nbsp;background-color:&nbsp;black;}<br><br>3.absolute+transform&nbsp;<br>特点：<br>&nbsp;&nbsp;兼容性：transform&nbsp;IE9以上&nbsp;&nbsp;优点：设置position:&nbsp;absolute;的元素脱离文<br><br>档流，不影响其他子元素<br>实现方法：<br>&nbsp;&nbsp;.parent3{position:&nbsp;relative;}<br>&nbsp;&nbsp;.child3{position:&nbsp;absolute;left:&nbsp;50%;transform:translateX(-<br><br>50%);background-color:&nbsp;black;}<br><br>4.flex<br>特点：<br>&nbsp;&nbsp;兼容性：flex&nbsp;IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent4{display:&nbsp;flex;justify-content:center;}<br>&nbsp;&nbsp;.child4{background-color:&nbsp;black;}<br>","addLink":"<a href=&quot;./layout/demo1.html&quot;>以上实现方法Demo<a/>","date":"2016-01-05 00:14","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":0},{"addArticleTtitle":"居中布局---实现父元素不定高度，子元素垂直居中的几种方法","classify":"layout","addarticleContent":"1.table-cell+vertical-align<br>特点：<br>&nbsp;&nbsp;兼容到IE8以上，如果想兼容IE6、7,把&nbsp;DIV改成table<br>实现方法：<br>&nbsp;&nbsp;.parent1{display:&nbsp;table-cell;vertical-align:&nbsp;middle;background-color:&nbsp;black;height:&nbsp;100px;}<br>&nbsp;&nbsp;.child1{background-color:&nbsp;white;}&nbsp;<br><br>2.absolute+transform&nbsp;<br>特点：&nbsp;<br>&nbsp;&nbsp;兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent2{position:&nbsp;relative;height:&nbsp;100px;background-color:&nbsp;black;}<br>&nbsp;&nbsp;.child2{position:&nbsp;absolute;top:50%;&nbsp;transform:translateY(-50%);&nbsp;background-color:&nbsp;white;}<br><br>3.flex<br>特点：<br>&nbsp;&nbsp;兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent3{display:&nbsp;flex;&nbsp;align-items:center;&nbsp;background-color:&nbsp;black;&nbsp;height:&nbsp;100px;}<br>&nbsp;&nbsp;.child3{background-color:&nbsp;white;}<br>","addLink":"<a href=&quot;./layout/demo2.html&quot;>Demo<a/>","date":"2016-01-05 10:09","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":1},{"addArticleTtitle":"居中布局---实现父元素不定宽高、子元素居中的几种方法","classify":"layout","addarticleContent":"1.inline-block+text-align+table-cell+vertical-align<br>特点：<br>&nbsp;&nbsp;兼容性好<br>实现方法：<br>&nbsp;&nbsp;.parent1{text-align:&nbsp;center;&nbsp;display:&nbsp;table-cell;vertical-align:&nbsp;middle;background-color:&nbsp;black;height:&nbsp;100px;width:&nbsp;100px;}<br>&nbsp;&nbsp;.child1{display:&nbsp;inline-block;&nbsp;background-color:&nbsp;white;}<br><br>2.absolute+transform<br>特点：&nbsp;<br>&nbsp;&nbsp;兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent2{position:&nbsp;relative;height:&nbsp;100px;background-color:&nbsp;black;}<br>&nbsp;&nbsp;.child2{position:&nbsp;absolute;top:50%;left:&nbsp;50%;&nbsp;transform:translate(-50%,-50%);&nbsp;background-color:&nbsp;white;}<br><br>3.flex<br>特点：<br>&nbsp;&nbsp;兼容性：兼容性IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent3{display:&nbsp;flex;justify-content:center;&nbsp;align-items:center;&nbsp;background-color:&nbsp;black;&nbsp;height:&nbsp;100px;}<br>&nbsp;&nbsp;.child3{background-color:&nbsp;white;}","addLink":"<a href=&quot;./layout/demo3.html&quot;>Demo<a/>","date":"2016-01-05 10:19","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":2},{"addArticleTtitle":"多列布局---实现一列定宽，一列自适应的几种方法","classify":"layout","addarticleContent":"1.float+margin<br>特点：<br>&nbsp;&nbsp;不足：当right中子元素有清除浮动时，会对布局有影响&nbsp;&nbsp;margin-right:&nbsp;-100px;兼容IE6<br>实现方法：<br>&nbsp;&nbsp;.left1{float:&nbsp;left;width:&nbsp;100px;&nbsp;background-color:&nbsp;#ccc;margin-right:&nbsp;-100px;}<br>&nbsp;&nbsp;.right1{margin-left:&nbsp;120px;&nbsp;background-color:&nbsp;#555;}<br><br>2.float+margin+(fix)<br>特点：&nbsp;<br>&nbsp;&nbsp;第一个方案的改进，right中有浮动子元素，不影响。兼容IE6<br>实现方法：<br>&nbsp;&nbsp;.left2{float:&nbsp;left;width:&nbsp;100px;position:&nbsp;relative;&nbsp;background-color:&nbsp;#ccc;}<br>&nbsp;&nbsp;.right-fix{float:&nbsp;right;width:&nbsp;100%;margin-left:-100px;&nbsp;}<br>&nbsp;&nbsp;.right2{margin-left:&nbsp;120px;&nbsp;background-color:&nbsp;#555;}<br><br>3.float+hidden<br>特点：<br>&nbsp;&nbsp;不支持IE6<br>实现方法：<br>&nbsp;&nbsp;.left3{float:&nbsp;left;width:&nbsp;100px;margin-right:&nbsp;20px;background-color:&nbsp;#ccc;}<br>&nbsp;&nbsp;.right3{overflow:&nbsp;hidden;&nbsp;background-color:&nbsp;#555;}<br><br>4.table<br>特点：<br>&nbsp;&nbsp;<br>实现方法：<br>&nbsp;&nbsp;.parent4{display:&nbsp;table;width:&nbsp;100%;}<br>&nbsp;&nbsp;.left4,.right4{display:&nbsp;table-cell;background-color:&nbsp;#555;}<br>&nbsp;&nbsp;.left4{width:&nbsp;100px;padding-right:&nbsp;20px;background-color:&nbsp;#ccc;}<br><br>5.flex<br>特点：<br>&nbsp;&nbsp;兼容性：兼容性差，flex&nbsp;IE9以上<br>实现方法：<br>&nbsp;&nbsp;.parent5{display:&nbsp;flex;}<br>&nbsp;&nbsp;.left5{width:&nbsp;100px;margin-right:&nbsp;20px;background-color:&nbsp;#ccc;}<br>&nbsp;&nbsp;.right5{flex:1;background-color:&nbsp;#555;}<br><br>6.两列定宽+一列自适应，方法跟上面类似<br>float+margin实现方法：<br>&nbsp;&nbsp;.left6,.middle6{float:&nbsp;left;width:&nbsp;100px;&nbsp;background-color:&nbsp;#ccc;margin-right:&nbsp;20px;}<br>&nbsp;&nbsp;.middle6{margin-right:&nbsp;-100px;}<br>&nbsp;&nbsp;.right6{margin-left:&nbsp;240px;&nbsp;background-color:&nbsp;#555;}<br><br><br><br><br>","addLink":"<a href=&quot;./layout/demo4.html&quot;>Demo<a/>","date":"2016-01-05 10:53","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":3}],"buildWebsite":[],"resources":[],"encourage":[{"addArticleTtitle":"穷人思维","classify":"encourage","addarticleContent":"穷人为什么穷？无论中国美国，主流对此都有种没明说但心照不宣的观点：因为他们懒、酗酒、赌博……曾有条被疯转微博，一位妈妈卖盗版光盘被城管追赶跳入水中，当时，一位女博士点评说北京好月嫂都月入过万了，何必要选这么苦情的生活方式？此微博后被证实为谣言，但抱小孩卖毛片的中年女性的确曾是北京一景。中产阶级的眼界不是穷人的眼界，正如本书作者也苦苦思索，劳工为何不要求加薪，或寻找更高薪工作，甚至组织工会，维护自身权益？答案是，越贫困，越无力。<br><br>畅销书女作家芭芭拉•艾伦瑞克进入美国底层，体验在时薪6~8美元下，辛勤工作是否能生活下去，她的答案是：不能。除非你跟别人合租房子，或者打两份工。<br><br>她在三个城市当过餐厅服务员、旅馆服务员、清洁女工、看护护理及沃尔玛的售货员，她努力工作，也努力尝试收支平衡，为此她曾勇猛打两份工，一周工作七天，每周还能在打工的看护之家免费吃两三餐，这些都帮助了她。但到旅游旺季，房租将上涨三倍，身为女佣的她，只能再次破产。<br><br>作者有穷人没有的优势：在前面的几十年，她有高于一般水平的医疗照顾、良好饮食、她常年练举重，身体“是不寻常的结实”。并且，就这个实验来说，她作弊了，她给自己租车，用信用卡付费；每到一个城市，她备有一千多美元的起头基金；她开了外挂，却仍然没有打赢。<br><br>我一度觉得这本《我在底层的生活——当专栏作家化身女服务员》是来黑美国的，因为美剧、好莱坞电影不曾说过，还有这么个美国存在：低薪白人劳工，三四人挤在一个小房间里生活；怀孕的清洁工摔伤也不敢请假，一天没薪水，第二天就没钱买杂物；沃尔玛的员工付不起房租，住在收容所；背着十几磅重的吸尘器吸尘、跪在地上擦地，女佣们话题热点是哪个牌子的止痛药最好用；没有健康保险，因为太贵，这意味如果生病，你要比别人多花钱。<br><br>女招待考虑搬入每晚40~60美金的汽车旅馆（她每天才挣四十多美金），作家惊讶问她怎么想的，同事像看笨蛋一样看着女作家：我上哪儿弄一个月的租金跟押金去租公寓？而女作家，之所以能租到月租500的公寓，是拜她从自己的现实世界带来的1000美金付押金及头一月租金所赐。<br><br>不断上涨的房租是穷人的噩梦，作者发现，穷人越来越多住在汽车旅馆。后者可以按天结账，犹如鸦片，诱惑现金紧张的穷人陷进去，微薄的积蓄被烧光，更加不可能有钱租公寓。作者发现有两个男人轮流睡一张床，一个人睡觉时另一个在车上打盹。而我忽然明白卡佛小说里的那些穷人，那些卖掉农庄，揣着全部积蓄进城找工作的一家人，在一间汽车旅馆里住下去，某一天又一声不吭地走掉——他们就是汽车旅馆鸦片的受害者，他们不是走掉，是掉入地狱的更下一层。<br><br>作者认为，穷人破产，因为薪水太低，而房租太贵。这一点中国读者想必也深有共鸣。当房租犹如奥运会田径赛道上的博尔特般一路狂奔，穷人只能不停搬家，搬入一间又一间不带家具的公寓，锅碗瓢勺家具又是一笔钱；或入住汽车旅馆胶囊公寓，只剩一张床那么大小的房间，你证悟到睡觉和死亡何其相似。而无法做饭的后果，是你要花更多钱在吃饭上。最终，她，还有我们，均不难发现一条荒谬定律，如果你穷，你就得比不穷的人花更多的钱，才能活下去。这不是美剧中的美国，但它并不陌生。全世界的金钱流动法则相同：钱生育钱，贫困生育贫困。<br><br>作者有强烈的政治立场，而她真实凶残的打工经历平衡了她的倾向。说到底这并不是一本坐在空调房间凭政治理念写出来的书，她一天工作九小时，住在没有纱窗空调电扇的旅馆，因为锁不上门，不得不合衣而睡。而她的工作，是在35度高温下打扫“有五套浴厕的房子”，撅起屁股，跪于大理石地板，用抹布擦过每一寸地面，擦干净整排玻璃门上的每一个指纹，而且遵循女仆美德，不在主人家喝水；是每周六日服侍近四十名阿兹海默症老年病人吃三餐、清理餐具、擦桌吸地，“我只能全力跟上洗碗机吐出盘子和脏盘子涌进来的速度”；午饭是高速路上停车上厕所时的五分钟；上厕所要打卡。即使这样，仍有几次，她不得不求助于慈善机构，后者提供的免费食物，对没有冰箱的穷人来说并不实用；而一个“平价”通铺床位，每晚也要19美元，慈善机构的小姐建议她“搬进收容所”，以便存到足够的钱交第一个月的房租和押金。<br><br>她将自己奉献为小白鼠，而我们得以观察，贫穷是如何侵蚀一个人的精神。<br><br>作者自己能从时薪5.15美元的餐厅跳槽至时薪7.5，因为她有车，可四处应聘，上班范围更有弹性。她的同事若换工作，交通是大问题，甚至需更换住处。穷人比富人更保守，更不愿意改变，就像奴隶比奴隶主更保守。物质上的窘迫，使他们承受不起改变，冒不起一周没工作的风险。那意味着他们会挨饿，从现在的房子被赶出去，掉到地狱更可怕的下一层。<br><br>但作者在找工作时呈现的状态，她的精神活力、她的勇气才是她和她的同事们之最大区别。同样被羞辱及盘剥，她跃跃欲试组织工会，她的同事却只希望偶尔请一天假，第二天还能有钱买点杂货。这一部分也可用来解释教育的重要所在，作者隐瞒了博士学位，却拿不走自己的思维。精神的贫困是穷人解脱贫穷的最大障碍。<br><br>两个多月的底层生活后，作者的背伤复发、全身起了疱疹，并且，她身为“民主社会主义者”“女性主义者”，对底层人民抱有的博爱之情，慢慢变淡，代之以麻木，甚至仇恨。一个身高不到1米4的女售货员跟她起了纠纷，她看着后者踩着梯子才够得着高处衣服，一股恶意涌上，“希望能看到她啪地一声摔到地上”；而残疾员工忧伤地坐在轮椅里，她看到第一感觉是“至少你还坐着。”——她忽然意识到，如果自己的父亲没有脱离矿工身份，如果去掉自己的教育程度，也许自己就是现在这样：苛刻、狡猾、满怀怨恨。她没有强调，但读者可以自行总结：穷人仇恨穷人。这不是什么新鲜事，却让人难以面对——穷人不都是善良的么？法国作家塞利纳在他1935年的《长夜行》里写道：“我们之间有五个法郎的隔阂，就足以产生恨，希望他们统统死光。”“五个法郎”，可以换成小升初的一个名额、一个工作机会，甚至仅仅是高峰期公车上的一个座位、它仍然“足以产生恨，希望他们统统死光”。不信你看北京上海贴吧里，那些铺天盖地的“外地人滚出去”。<br><br>贫穷是一种专制，它培养自己的奴隶。当你习惯于被剥夺自尊，习惯于被当做一个小偷/懒虫/酒鬼对待，当你常年生活在社会边缘、你存在的意义被抹去，宛如你根本不存在。而打开电视——无论中美——都是老板，男女白领，即使是喊着奋斗的北漂，住的也是你这辈子都住不上的三室两厅，它会让你以为“只有我自己才是不正常的”。精神上的专制就此完成。穷奴大抵上有两种，一种借仇恨别人获得自己高人一等的存在价值感，一种则接受自己是最弱的，就像那些被迫在自己的社会体系中落入屈从位置的沮丧的猴子，它们变得焦虑而退缩，不再挣扎，甚至对自卫也毫无兴趣。<br><br>借助铁丝和剪刀，能培养出自然界不存在的侏儒松，定型成功，即使松开捆扎铁丝，那些松树也固定在扭曲的姿态。同样，精神上的专制，令你在内心相信自己就是个侏儒。芭芭拉•艾伦瑞克细腻雄辩地写出精神的毁灭之路，我却在其中看到熟悉的人脸，作为经历了大饥荒的幸存者的后代，她绘出的精神贫穷者的肖像我并不陌生。那些脸在我们周围漫游，如恒河河沙，又似幽灵。<br><br>怎么办？也许没有一个药方可以取消贫困，但至少下次看到一个走投无路的穷人，在指责他懒惰、酗酒之前还可以多想一秒钟；在大吼“外地人滚出去”之前，还可以思考一下这仇恨从何而来；即使我们的初始值是一棵被剪成侏儒的盆景，也可以在松绑后尝试站起来，笔直地站成一棵树。<br><br>开外挂的女作家，无论如何也做不到收支平衡。但实在要流浪街头时，她可以挖出自己的信用卡，大吃一顿。可是现实中真正的穷人，她的同事们呢？<br><br>我想起《没有人给他写信的上校》的最后一段：绝望的妻子揪着上校的领子，问这些天我们吃什么？<br><br>“上校活了七十五岁——用他一生中分分秒秒积累起来的七十五岁——才到了这个关头。他自觉心灵清透，坦坦荡荡，什么事也难不住他。他说：<br><br>‘吃屎’。”","date":"2016-01-04 20:15","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":0},{"addArticleTtitle":"行走，回首","classify":"encourage","addarticleContent":"&nbsp;&nbsp;人生路，漫漫而行。一阵秋雨洒落，驻足回首，秋叶纷飞。踩过一叠厚厚堆积的落叶，仿佛就像生命中一堆纠缠不清的人和事，渐渐遗忘，渐渐随风。<br>　　<br>　　往事过眼，便是回忆。你的呢喃，清晰在耳畔。但我的眼眸，已失去了你的色彩。人生这条路，走的越远，失去的就越多，想抓也抓不住，想停也只能一直走下去。<br>　　<br>　　昨日的温存，已成了今日的怀恋。依稀记得梦中的清风随了夜，划在心底的寒，淡淡的痛。你说的话语，凋零在上一个叶落，满地的残朵。我却傻傻祈求，时光捡起，成为我心中不忘的那朵。<br>　　<br>　　转眼间秋风舞动，一声呓语飘落清冷，像一场邂逅，一次回眸。记忆在残风中流逝，那样匆匆，那样落寞，连呼喊都来不及停留，便消散在天边不见。书刻思念的篇章，空白，黯淡，碎散一地无法拼凑。寥寥秋落，回忆是那么的无助，那么令人叹息，苍白的嘴唇自嘲苦笑，连握笔的手指都那么的无力，消瘦。<br>　　<br>　　告诉我什么是孤独？我们还会再见吗？最后的旅程擦肩而过，时光带走了一切，但我只求留下最后的思念。<br>　　<br>　　醉念红尘，抚桥流水。岁月铸就的青石板路，寸草难生，如同霜寒舞天的夜月，哀叹了生命的流逝。一曲残星滑落，蓦然回首。这条路，孤独的没有任何生命。<br>　　<br>　　时间匆忙，我们来不及休息。风景匆匆而来又匆匆而去，看到了风景却落下了脚程。人的使命就是在孤独寂寞中寻索，可人自己，却想看看尘世的美艳。这一世为使命，还是为自己？<br>　　<br>　　又是那条无人的街道，一个人漫步远去，莫名的情绪，莫名在颤动。眼神茫然地注视着前方，寒风带起的落叶，如思念般那么无助那么遥远，像根丝线般，缠绕着你绷紧的心弦，连雨落到脸上，还依旧倔强地走着。<br>　　<br>　　那些人再也不回来，那片天最后模糊了色彩。我们都是孤独的，都在黑夜中寻找被云雾遮掩的星空，却看到了流星失落的雨夜。期盼着刺目的阳光，却在逆光的地方，看着自己沉默的倒影。以为世界会关注自己，转过身看着消失的彼岸，却不得不为世界而哭泣。<br>　　<br>　　一条沉默的路，一个狼狈的背影。彷徨，无助。孤独的感觉似幽风徘徊在耳边，拉动了最后的心弦，凄厉地惨叫。奔跑，跌撞。无人的世界，无人的寂静。回首，期盼的眼眸望不到熟悉的轻语;行走，孤独的身影望不到漆黑的彼方。泪断的雨线，渐渐模糊了记忆的错觉……<br>　　<br>　　虚无的世界，虚无的路，孤独的人，孤独地走。耳边飘来了熟悉的话语:不是所有委屈都可以呐喊，不是所有心事都可以述说，有些事只有自己能做，别人帮不了你。这条路，注定是寂寞的。回首，充满了期待却是更残酷的等待。<br>　　<br>　　秋季，等待了一地叶落，像那些荒芜的岁月，像是旅人，望着沉默的斑驳古路，带着落寞，行走，回首……","date":"2016-01-04 20:24","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":1},{"addArticleTtitle":"一直努力，直至成功","classify":"encourage","addarticleContent":"&nbsp;&nbsp;所谓理想就是把我们的愿景放在一个价值观的尺度上度量，然后决定人生往哪里走？去哪里？走多远？和谁走？<br>　　<br>　　从民营企业角度看，我做生意是被迫的一个开始，但习惯于用自己的价值观来引导我做判断，因此一直把丧事当喜事办。因为我总觉得自己要去心中期待的某个地方，这时我会经常想起鲁迅的一个小说《过客》。这个过客腿脚不好，他一直不停地走，有天他到一个茶水摊和一个老人和小孩对话，询问前方的路该怎么走？老人告诉他：过了一个坟地，再往前一拐，差不多就到了。他又问那小孩儿，小孩告诉他，你看见那片鲜花了，再往前走就到了。同样一个地方，老人眼里看见的是坟墓，而年轻人眼里看见的是鲜花，可见视野和心态截然不同。而这个过客心里只有一句话，就是——我要走，我要走，我要走。<br>　　<br>　　我在创业和折腾的过程中经常会想起这个故事，我心里有两个地方可以去，一个是坟墓，一个是鲜花，不管是哪个，当下就是“我要走”这样一个状态，这种想法陪伴我，从开始很被动的创业，甚至到后来哪怕负债累累，人生已经到了最绝望的时候，始终没有放弃，仍然把丧事当喜事办，因为我意识到理想是希望的风，是黑暗尽头的那道光，有了它，我能驱走黑暗与恐惧，虽然不知道前方有多远，但是依然有坚持下去的力量。<br>　　<br>　　50岁生日前夕，我决定送给自己的一份特别、有纪念意义的生日礼物，去台湾骑自行车环岛旅行。那时正值酷暑，我每天骑行80多公里，总共环岛5500公里，路上看到一个老太太比我还猛，她磕头环岛。我问她，您怎么走？她说，我就拜拜拜拜，一直走没停过。我很是敬佩，送给她一瓶水，她接着继续走。真的很难想象一个瘦老太太单薄的身躯下，哪来这么大能量？只有一个答案：她心里有佛，有信念，有理想和快乐的天堂，所以才有如此的毅力和能量，不停地拜下去，也许有一天膝盖流血她却浑然不知，也许有一天她会劳累晕眩，但她心里追求的天堂不会坠落。<br>　　<br>　　我再说一个崔永元的故事，原来我们俩很不搭界，相信他对“黑心开发商”也抱有道德上的不满，而在央视看到的小崔似乎也有点装，老讲长征、理想什么的，后来我听一个朋友介绍说他在做一个口述历史的节目。某天，我们在一家酒店中见面，香格里拉见面，他送我一些小人书和他做的口述史的资料，我才发现原来屏幕以外的小崔很了不起。<br>　　<br>　　有个夏天我把这个故事讲给王石，带着王石去了小崔的工作室，到了工作室以后，我们看到崔永元花了十几、二十年的时间一直在做一件事情，就是记录当下中国人的状态，而且默默无闻地到处筹资。这让我看到了一个有责任感的男人，这个男人没事儿找事儿，把别人事儿当自己事儿，自己的事儿不当回事儿，自己都快抑郁了，还是操心民族的历史是不是能记录下来，着实感动了我，也感动了王石。后来，我们成了好朋友，也参与到了口述历史的项目中，共同记录这个时代以及这个时代中人们的想法和事迹。<br>　　<br>　　古人讲：势必有坚韧不拔之志，才有坚韧不拔之力。志向是带来毅力的事儿，就像磕头环岛的老太太，如果她心里没有佛，怎会有毅力去磕头环岛？毅力依附于信念和理想之上，不是欺骗也不是虚妄，理想除了让我们获得能量、财富外，还会在我们遭遇痛苦和不幸时支撑我们活下去。否则，当我们遇到巨大的困难时，很可能会选择逃避，甚至会在不为人知的时候选择死亡。在这个纷繁、价值观多元的时代，希望我们对“理想”这个词不再拒绝，不再隔膜，不再离它而去，而是从脚下做起，一天天努力，直到成功为止。","date":"2016-01-04 20:26","author":"xxz","good":0,"view":0,"comments":0,"commentsStrArr":[],"articleId":2}],"noCategory":[]}';
var dataObj=JSON.parse(dataJsonStr);
var dataSaid=[
	{
		said:"二十四五岁：迷茫的年纪过了，心中有个目标，前进吧！",
		date:"2015-1-3 17:30"
	},
	{
		said:"今天天气真好，适合----睡觉",
		date:"2015-1-3 17:30"
	},
	{
		said:"知识改变世界，教育改变未来，奋斗吧，骚年！为了遇到更好的自己。",
		date:"2015-1-3 17:30"
	},
	{
		said:"知识改变世界，教育改变未来，奋斗吧，骚年！为了遇到更好的自己。",
		date:"2015-1-3 17:30"
	}
]
