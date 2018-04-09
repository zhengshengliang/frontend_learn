class navDemo {
    constructor() {

    }

    /**
     * 初始化函数
     */
    init () {
        this.keys = [
            ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
            ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
            ['z', 'x', 'c', 'v', 'b', 'n', 'm']
        ];

        this.defaultHash = {
            j: 'jd.com',
            q: 'qq.com',
            w: 'weibo.com',
        };

        this.generateKeyBoard();

        this.bindEvent();
    }

    /**
     * 添加事件
     */
    bindEvent() {
        // todo onkeydown onkeypress
        document.onkeypress = (e) => {
            console.log(e);
            const key = e.key;
            const domain = this.defaultHash[key];
            domain && window.open('http://' + domain);
        }
    }

    /**
     * 生成键盘布局
     */
    generateKeyBoard() {
        this.keys.forEach((outItem, outIndex) => {
            const div = document.createElement('div');
            div.className = 'out-div';
            outItem.forEach((innerItem, innerIndex) => {
                const kbd = document.createElement('kbd');
                kbd.innerText = this.keys[outIndex][innerIndex];
                kbd.className = 'inner-kbd'
                div.appendChild(kbd);

            })
            content.appendChild(div);
        })
    }


    getFromLocalStorage() {

    }
}

const nd = new navDemo();
nd.init();